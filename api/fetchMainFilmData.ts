const fetchMainfilmData = async (THEME: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AWS_API_URL}/items/${THEME}`,
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default fetchMainfilmData;
