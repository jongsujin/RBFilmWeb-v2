export default function CenterTextPhotoTemplate() {
  return (
    <div className="border border-white w-[90%]  mx-auto flex flex-col items-center">
      <div className="w-full relative pb-[52.0%] bg-gray rounded-lg">
        <div className="absolute inset-0 bg-gray" />
      </div>
      <div className="text-center text-white mt-4">
        <p className="font-pre font-bold text-headline3">Sports</p>
        <p className="font-pre font-medium text-lg">Kluivert Charity Match</p>
      </div>
    </div>
  );
}
