export async function onRequestGet(context) {
  const hasResendKey = Boolean(context.env.RESEND_API_KEY);

  return new Response(
    JSON.stringify({ hasResendKey }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
