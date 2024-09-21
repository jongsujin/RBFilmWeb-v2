const fetchData = async (THEME: string) => {
  // Next.js API로 GET 요청을 보냄, 쿼리 파라미터로 THEME 전달
  const res = await fetch(`/api/items?THEME=${THEME}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  // Next.js API에서 받은 데이터를 JSON으로 변환하여 반환
  const data = await res.json();
  return data;
};

export default fetchData;
