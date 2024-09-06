import PhotoItemTemplete from "@/app/photo/_component/_component/PhotoItemTemplete";

export default function MobilePhotoItem({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div>
      <PhotoItemTemplete params={params} />
    </div>
  );
}
