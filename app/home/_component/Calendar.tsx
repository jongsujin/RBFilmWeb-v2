// import { useState } from "react";

// interface CalendarModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelect: (date: string) => void;
// }
// export default function CalendarModal({
//   isOpen,
//   onClose,
//   onSelect,
// }: CalendarModalProps) {
//   const [selectedYear, setSelectedYear] = useState(2023);
//   const [selectedMonth, setSelectedMonth] = useState(12);

//   const months = [10, 11, 12, 1, 2, 3, 4];

//   const handleSelect = () => {
//     onSelect(`${selectedYear}.${selectedMonth.toString().padStart(2, "0")}`);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-gray-900 rounded-lg p-4 w-80">
//         <div className="flex justify-between items-center mb-4">
//           <button
//             type="button"
//             onClick={() => setSelectedYear(selectedYear - 1)}
//             className="text-primary"
//           >
//             &lt;
//           </button>
//           <span className="text-primary text-lg font-bold">
//             {selectedYear}년
//           </span>
//           <button
//             type="button"
//             onClick={() => setSelectedYear(selectedYear + 1)}
//             className="text-primary"
//           >
//             &gt;
//           </button>
//         </div>
//         <div className="grid grid-cols-3 gap-2 mb-4">
//           {months.map((month) => (
//             <button
//               type="button"
//               key={month}
//               onClick={() => setSelectedMonth(month)}
//               className={`py-2 rounded-lg ${
//                 selectedMonth === month
//                   ? "bg-primary text-black"
//                   : "bg-gray-800 text-white"
//               }`}
//             >
//               {month}월
//             </button>
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-400 hover:text-white"
//           >
//             취소
//           </button>
//           <button
//             type="button"
//             onClick={handleSelect}
//             className="text-primary hover:text-primary-light"
//           >
//             확인
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
