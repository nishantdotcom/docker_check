export async function GET(request: Request) {
  return new Response("Hello, World!");
}
export async function POST(request: Request) {
  const data = await request.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
