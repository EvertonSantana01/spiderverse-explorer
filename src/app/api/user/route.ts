import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch (`${process.env.API_URL}`)
  // const res = await fetch(`${url}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
