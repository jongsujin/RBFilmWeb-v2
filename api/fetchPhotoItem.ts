interface FetchPhotoItemProps {
  THEME: string;
  id: number;
}
const fecthPhotoItem = async ({ THEME, id }: FetchPhotoItemProps) => {
  const res = await fetch(`/api/items/id?THEME=${THEME}?id=${id}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data;
};

export default fecthPhotoItem;
