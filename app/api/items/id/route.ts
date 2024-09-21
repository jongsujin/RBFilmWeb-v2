/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const THEME = searchParams.get("THEME");
  const id = searchParams.get("id");

  if (!id || !THEME) {
    return NextResponse.json(
      { error: "THEME or ID parameter is required" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AWS_API_URL}/items/${THEME}/${id}`,
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Lambda" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong while fetching data" },
      { status: 500 },
    );
  }
}
