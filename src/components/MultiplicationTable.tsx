import clsx from 'clsx';

type MultiplicationTableProps = {
  number: number;
};

export default function MultiplicationTable({ number }: MultiplicationTableProps) {
  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="overflow-hidden rounded-xl border border-indigo-100">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-600">
            <th className="py-3 px-6 text-left text-white font-semibold text-sm uppercase tracking-wider">Multiplier</th>
            <th className="py-3 px-6 text-center text-white font-semibold text-sm uppercase tracking-wider">Expression</th>
            <th className="py-3 px-6 text-right text-white font-semibold text-sm uppercase tracking-wider">Result</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((multiplier) => {
            const result = number * multiplier;
            return (
              <tr
                key={multiplier}
                className={clsx(
                  'transition-colors duration-150 hover:bg-indigo-50',
                  multiplier % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                )}
              >
                <td className="py-3 px-6 text-left">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                    {multiplier}
                  </span>
                </td>
                <td className="py-3 px-6 text-center text-gray-700 font-medium">
                  {number} × {multiplier}
                </td>
                <td className="py-3 px-6 text-right">
                  <span className="font-bold text-indigo-600 text-lg">{result}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
