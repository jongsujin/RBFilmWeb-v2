export default function PhotoItemTemplete() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="w-2/5 text-white text-center">
        <div className="font-pre">
          <p className="text-[24px] font-bold">Sports</p>
          <p className="text-[18px] font-medium">Kluvert Charity Match</p>
        </div>
        <div className="mt-7 flex flex-col justify-center gap-3">
          <div className="flex flex-row justify-center gap-3">
            <div className="flex-1 bg-gray w-1/2 h-0 pb-[23.25%]" />
            <div className="flex-1 bg-gray w-1/2 h-0 pb-[23.25%]" />
          </div>
          <div className="w-full bg-gray h-0 pb-[45.25%]" />
          <div className="flex flex-row justify-center gap-3">
            <div className="flex-1 bg-gray w-1/2 h-0 pb-[23.25%]" />
            <div className="flex-1 bg-gray w-1/2 h-0 pb-[23.25%]" />
          </div>
        </div>
      </section>
    </main>
  );
}
