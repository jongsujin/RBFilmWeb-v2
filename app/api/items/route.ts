/* eslint-disable import/prefer-default-export */
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // URL에서 THEME 값을 쿼리 파라미터로 가져옴
  const { searchParams } = new URL(request.url);
  const THEME = searchParams.get("THEME");

  if (!THEME) {
    return NextResponse.json(
      { error: "THEME parameter is required" },
      { status: 400 },
    );
  }

  try {
    // Lambda API 호출
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AWS_API_URL}/items/${THEME}`,
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Lambda" },
        { status: res.status },
      );
    }

    // Lambda API에서 받은 데이터를 JSON으로 변환
    const data = await res.json();

    // 받은 데이터를 프론트엔드로 그대로 반환
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong while fetching data" },
      { status: 500 },
    );
  }
}
