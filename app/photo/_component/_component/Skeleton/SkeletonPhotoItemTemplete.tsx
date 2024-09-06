export default function SkeletonPhotoItemTemplete() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <section className="mt-16 w-4/5 h-full text-white text-center">
        <div className="flex flex-col justify-center font-pre animate-pulse text-center items-center">
          <div className="h-6 w-2/5 bg-white mb-2 rounded" />
          <div className="h-4 w-3/5 bg-white mb-6 rounded" />
        </div>
        <div className="mt-7 flex flex-col justify-center gap-3 animate-pulse">
          <div className="flex flex-row justify-center gap-3">
            <div className="relative flex-1 w-1/2 aspect-[3/2] bg-white rounded-lg" />
            <div className="relative flex-1 w-1/2 aspect-[3/2] bg-white rounded-lg" />
          </div>
          <div className="relative flex-1 w-full aspect-[3/2] bg-white rounded-lg" />
          <div className="flex flex-row justify-center gap-3">
            <div className="relative flex-1 w-1/2 aspect-[3/2] bg-white rounded-lg" />
            <div className="relative flex-1 w-1/2 aspect-[3/2] bg-white rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
