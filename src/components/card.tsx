export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg py-4 px-4">
      {children}
    </div>
  );
}
