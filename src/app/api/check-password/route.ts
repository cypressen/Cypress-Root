export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;
  if (password === process.env.SECRET_PASSWORD) {
    return Response.json({ message: "ok" });
  } else {
    return Response.json({ message: "Incorrect password" });
  }
}
