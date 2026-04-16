export async function onRequestGet(context) {
  const hasResendKey = Boolean(context.env.RESEND_API_KEY);
  const envKeys = Object.keys(context.env || {});

  return new Response(
    JSON.stringify({ hasResendKey, envKeys }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
