import PhotoItemTemplete from "@/app/photo/_component/_component/PhotoItemTemplete";

export default function DeskTopPhotoItem({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div className="mt-8">
      <PhotoItemTemplete params={params} />
    </div>
  );
}
