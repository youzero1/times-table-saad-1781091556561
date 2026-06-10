import MultiplicationTable from '@/components/MultiplicationTable';

export default function TablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">Multiplication Table of 11</h1>
        <p className="text-center text-gray-500 mb-8 text-sm">11 × 1 through 11 × 12</p>
        <MultiplicationTable number={11} />
      </div>
    </div>
  );
}
