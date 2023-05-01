export const TD = ({ children }) => {
  return <td className="py-4 px-6">{children}</td>;
};

export const TR = ({ children, className }) => {
  return (
    <tr className={`border-b hover:bg-gray-100 ${className}`}>{children}</tr>
  );
};

export const TH = ({ children }) => {
  return (
    <th className="py-4 px-6 text-gray-600 font-bold uppercase tracking-wide">
      {children}
    </th>
  );
};

export const TBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const THead = ({ children, className }) => {
  return (
    <thead>
      <tr className={`bg-gray-50 border-b ${className}`}>{children}</tr>
    </thead>
  );
};

export const Table = ({ children }) => {
  return (
    <table className="bg-white max-w-2xl mx-auto shadow-md rounded text-left w-full border-collapse">
      {children}
    </table>
  );
};
