export function Well({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-gray-50 overflow-hidden rounded-lg shadow-inner">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
