import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

//GET
export async function GET(Request) {
  const message = "I am GET";

  const { searchParams } = new URL(Request.url);
  const name = searchParams.get("name");
  const mobile = searchParams.get("mobile");

  return NextResponse.json({ name, mobile });
}

//POST
export async function POST(Request, Response) {
  const message = "I am POST";

  const res = await Request.json(); // body request raw
  const name = res["name"];
  const mobile = res["mobile"];

  return NextResponse.json({ name, mobile });
}

//PUT
export async function PUT(Request) {
  const message = "I am PUT";
  const formData = await Request.formData(); // body request form data
  const name = formData.get("name");
  const mobile = formData.get("mobile");

  return NextResponse.json({ message, name, mobile });
}

//PATCH
export async function PATCH(Request) {
  const message = "I am PATCH";

  const headersList = headers();  // Here header
  const token = headersList.get("Auth-Token");
  const Masud = headersList.get("Masud");

  return NextResponse.json({ message, token, Masud });
}

//DELETE
export async function DELETE(Request) {
  const message = "I am DELETE";

  const cookieStore = cookies(); // Here cookie
  const token = cookieStore.get("CSRF-TOKEN11");

  return NextResponse.json({ message, token });
}
