"use client";

import { useState } from "react";

interface YearTabProps {
  years: number[];
}

export default function YearTab({ years }: YearTabProps) {
  const [selectedYear, setSelectedYear] = useState(2023);

  return (
    <div className="flex justify-center items-center mb-12 space-x-4">
      {years.map((year, index) => (
        <div key={year} className="flex items-center">
          {index > 0 && <div className="w-8 h-px bg-primary" />}
          <button
            type="button"
            className={`flex justify-center items-center w-16 h-16 rounded-full border border-primary cursor-pointer ${
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
