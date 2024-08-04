export default function RightTextPhotoTemplete() {
  return (
    <div className="border border-white w-[90%] mx-auto flex gap-2 p-5 bg-black">
      <div className="flex-1 flex flex-col justify-between">
        <div className="relative w-full h-0 pb-[81.99%] bg-primary rounded-lg ">
          <div className="absolute inset-0 bg-gray" />
        </div>
        <div className="text-start text-white">
          <p className="font-pre font-bold text-headline3">Sports</p>
          <p className="font-pre font-medium text-lg">Kluivert Charity Match</p>
        </div>
      </div>
      <div className="flex-1 relative h-0 pb-[67.08%] bg-gray rounded-lg">
        <div className="absolute inset-0 bg-gray-700" />
      </div>
    </div>
  );
}
