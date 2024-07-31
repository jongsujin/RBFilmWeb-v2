interface FetchPortfolioItemProps {
  THEME: string;
  id: number;
}

const fetchPortfolioItem = async ({ THEME, id }: FetchPortfolioItemProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AWS_API_URL}/items/${THEME}/${id}`,
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default fetchPortfolioItem;
