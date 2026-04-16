async function sendEmail(apiKey, { from, to, subject, html, replyTo }) {
  const payload = { from, to: Array.isArray(to) ? to : [to], subject, html };
  if (replyTo) payload.reply_to = replyTo;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend API error:", err);
    throw new Error(`Resend API error: ${err}`);
  }
  return res.json();
}

export async function onRequestPost(context) {
  const env = context.env;
  // Find RESEND_API_KEY even if whitespace was accidentally added to the name
  let RESEND_API_KEY = env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    const match = Object.keys(env).find(k => k.trim() === "RESEND_API_KEY");
    if (match) RESEND_API_KEY = env[match];
  }
  const FROM_EMAIL = env.RESEND_FROM_EMAIL || "Greens Farmhouse <contact@greensfarmhouse.com>";
  const OWNER_EMAIL = env.RESEND_TO_EMAIL || "contact@greensfarmhouse.com";

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { type } = body;

  if (type !== "contact" && type !== "order") {
    return new Response(JSON.stringify({ error: "Invalid form type" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    if (type === "contact") {
      const { firstName, lastName, email, phone, company, contactSubject, message } = body;

      if (!firstName || !lastName || !email || !contactSubject || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Email to owner
      const ownerHtml = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(phone || "Not provided")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(company || "Not provided")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Subject</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(contactSubject)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
        </table>
      `;

      // Confirmation email to customer
      const customerHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#16a34a;padding:24px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:22px;">Greens Farmhouse</h1>
          </div>
          <div style="padding:24px;background:#fff;">
            <h2 style="color:#333;">Thank you for contacting us, ${escapeHtml(firstName)}!</h2>
            <p style="color:#555;line-height:1.6;">We have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:16px 0;">
              <p style="margin:0 0 4px;font-weight:bold;color:#333;">Your message:</p>
              <p style="margin:0 0 8px;font-weight:bold;color:#555;">${escapeHtml(contactSubject)}</p>
              <p style="margin:0;color:#666;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="color:#555;line-height:1.6;">If you need urgent assistance, you can also reach us via WhatsApp or reply directly to this email.</p>
          </div>
          <div style="background:#f3f4f6;padding:16px;text-align:center;font-size:12px;color:#999;">
            <p style="margin:0;">Greens Farmhouse — Premium Wholesale CBD Flowers</p>
            <p style="margin:4px 0 0;"><a href="https://greensfarmhouse.com" style="color:#16a34a;">greensfarmhouse.com</a></p>
          </div>
        </div>
      `;

      await Promise.all([
        sendEmail(RESEND_API_KEY, {
          from: FROM_EMAIL,
          to: OWNER_EMAIL,
          subject: `[Contact Form] ${contactSubject} — ${firstName} ${lastName}`,
          html: ownerHtml,
          replyTo: email,
        }),
        sendEmail(RESEND_API_KEY, {
          from: FROM_EMAIL,
          to: email,
          subject: "We received your message — Greens Farmhouse",
          html: customerHtml,
        }),
      ]);

    } else {
      // ORDER
      const { firstName, lastName, email, phone, company, address, address2, city, postal, country, notes, items, subtotal, shipping, total } = body;

      if (!firstName || !lastName || !email || !address || !city || !postal || !country) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const orderRef = `GF-${Date.now().toString(36).toUpperCase()}`;

      let itemsHtml = "";
      if (Array.isArray(items)) {
        itemsHtml = items.map((item) =>
          `<tr>
            <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(item.name)}</td>
            <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(item.variant || "")}</td>
            <td style="padding:8px;border:1px solid #ddd;text-align:center;">${Number(item.quantity)}</td>
            <td style="padding:8px;border:1px solid #ddd;text-align:right;">€${Number(item.price).toFixed(2)}</td>
            <td style="padding:8px;border:1px solid #ddd;text-align:right;">€${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
          </tr>`
        ).join("");
      }

      // Email to owner — full order details
      const ownerHtml = `
        <h2>New Order Received — ${escapeHtml(orderRef)}</h2>
        <h3>Customer Information</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(phone || "Not provided")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(company || "Not provided")}</td></tr>
        </table>

        <h3>Shipping Address</h3>
        <p>${escapeHtml(address)}${address2 ? "<br>" + escapeHtml(address2) : ""}<br>${escapeHtml(postal)} ${escapeHtml(city)}<br>${escapeHtml(country)}</p>

        <h3>Order Items</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <thead>
            <tr style="background:#f3f4f6;">
              <th style="padding:8px;border:1px solid #ddd;text-align:left;">Product</th>
              <th style="padding:8px;border:1px solid #ddd;text-align:left;">Variant</th>
              <th style="padding:8px;border:1px solid #ddd;text-align:center;">Qty</th>
              <th style="padding:8px;border:1px solid #ddd;text-align:right;">Price</th>
              <th style="padding:8px;border:1px solid #ddd;text-align:right;">Total</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <h3>Order Totals</h3>
        <table style="border-collapse:collapse;width:100%;max-width:300px;">
          <tr><td style="padding:6px 8px;">Subtotal</td><td style="padding:6px 8px;text-align:right;">€${Number(subtotal).toFixed(2)}</td></tr>
          <tr><td style="padding:6px 8px;">Shipping</td><td style="padding:6px 8px;text-align:right;">${escapeHtml(String(shipping))}</td></tr>
          <tr style="font-weight:bold;font-size:1.1em;"><td style="padding:6px 8px;border-top:2px solid #333;">Total</td><td style="padding:6px 8px;border-top:2px solid #333;text-align:right;">€${Number(total).toFixed(2)}</td></tr>
        </table>

        ${notes ? `<h3>Order Notes</h3><p style="white-space:pre-wrap;">${escapeHtml(notes)}</p>` : ""}
        <hr>
        <p style="color:#666;font-size:12px;">Payment: Bank Transfer (SEPA) — Order Reference: ${escapeHtml(orderRef)}</p>
      `;

      // Confirmation email to customer — order summary + bank transfer instructions
      const customerHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#16a34a;padding:24px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:22px;">Greens Farmhouse</h1>
          </div>
          <div style="padding:24px;background:#fff;">
            <h2 style="color:#333;">Order Confirmation</h2>
            <p style="color:#555;line-height:1.6;">Thank you for your order, ${escapeHtml(firstName)}! Your order reference is:</p>
            <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:16px;text-align:center;margin:16px 0;">
              <span style="font-size:24px;font-weight:bold;color:#16a34a;">${escapeHtml(orderRef)}</span>
            </div>

            <h3 style="color:#333;">Order Summary</h3>
            <table style="border-collapse:collapse;width:100%;">
              <thead>
                <tr style="background:#f3f4f6;">
                  <th style="padding:8px;border:1px solid #ddd;text-align:left;">Product</th>
                  <th style="padding:8px;border:1px solid #ddd;text-align:center;">Qty</th>
                  <th style="padding:8px;border:1px solid #ddd;text-align:right;">Total</th>
                </tr>
              </thead>
              <tbody>${Array.isArray(items) ? items.map((item) =>
                `<tr>
                  <td style="padding:8px;border:1px solid #ddd;">${escapeHtml(item.name)}${item.variant ? " — " + escapeHtml(item.variant) : ""}</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:center;">${Number(item.quantity)}</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;">€${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
                </tr>`
              ).join("") : ""}</tbody>
            </table>
            <table style="width:100%;max-width:300px;margin:12px 0 0 auto;">
              <tr><td style="padding:4px 8px;color:#555;">Subtotal</td><td style="padding:4px 8px;text-align:right;color:#555;">€${Number(subtotal).toFixed(2)}</td></tr>
              <tr><td style="padding:4px 8px;color:#555;">Shipping</td><td style="padding:4px 8px;text-align:right;color:#555;">${escapeHtml(String(shipping))}</td></tr>
              <tr style="font-weight:bold;"><td style="padding:4px 8px;border-top:2px solid #333;">Total</td><td style="padding:4px 8px;border-top:2px solid #333;text-align:right;">€${Number(total).toFixed(2)}</td></tr>
            </table>

            <h3 style="color:#333;margin-top:24px;">Payment Instructions</h3>
            <div style="background:#fffbeb;border:1px solid #f59e0b;border-radius:8px;padding:16px;margin:12px 0;">
              <p style="margin:0 0 8px;font-weight:bold;color:#92400e;">Bank Transfer (SEPA)</p>
              <p style="margin:0;color:#78350f;line-height:1.8;">
                Please use your order reference <strong>${escapeHtml(orderRef)}</strong> as the payment description.<br>
                We will process your order once payment is received.
              </p>
            </div>

            <h3 style="color:#333;">Shipping Address</h3>
            <p style="color:#555;line-height:1.6;">
              ${escapeHtml(firstName)} ${escapeHtml(lastName)}<br>
              ${escapeHtml(address)}${address2 ? "<br>" + escapeHtml(address2) : ""}<br>
              ${escapeHtml(postal)} ${escapeHtml(city)}<br>
              ${escapeHtml(country)}
            </p>

            <p style="color:#555;line-height:1.6;margin-top:20px;">If you have any questions about your order, simply reply to this email or contact us via WhatsApp.</p>
          </div>
          <div style="background:#f3f4f6;padding:16px;text-align:center;font-size:12px;color:#999;">
            <p style="margin:0;">Greens Farmhouse — Premium Wholesale CBD Flowers</p>
            <p style="margin:4px 0 0;"><a href="https://greensfarmhouse.com" style="color:#16a34a;">greensfarmhouse.com</a></p>
          </div>
        </div>
      `;

      await Promise.all([
        sendEmail(RESEND_API_KEY, {
          from: FROM_EMAIL,
          to: OWNER_EMAIL,
          subject: `[New Order] ${orderRef} — ${firstName} ${lastName} — €${Number(total).toFixed(2)}`,
          html: ownerHtml,
          replyTo: email,
        }),
        sendEmail(RESEND_API_KEY, {
          from: FROM_EMAIL,
          to: email,
          subject: `Order Confirmation ${orderRef} — Greens Farmhouse`,
          html: customerHtml,
        }),
      ]);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email send error:", err);
    const message = err instanceof Error ? err.message : "Failed to send email";
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
