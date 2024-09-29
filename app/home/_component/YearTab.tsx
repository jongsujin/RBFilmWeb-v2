interface YearTabProps {
  years: number[];
  selectedYear: number;
  // eslint-disable-next-line no-unused-vars
  setSelectedYear: (year: number) => void;
}

export default function YearTab({
  years,
  selectedYear,
  setSelectedYear,
}: YearTabProps) {
  return (
    <div className="flex justify-center items-center mb-12">
      {years.map((year, index) => (
        <div key={year} className="flex items-center">
          {index > 0 && <div className="w-20 h-px bg-primary" />}
          <button
            type="button"
            className={`flex justify-center items-center px-4 py-2 rounded-full border border-primary cursor-pointer ${
              selectedYear === year
                ? "bg-primary text-dark"
                : "bg-transparent text-primary"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            <p className="text-lg font-semibold">{year}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
