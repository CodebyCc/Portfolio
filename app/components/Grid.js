function Grid({ children, bg }) {
  return (
    <div
      className={`grid ${bg} items-center grid-cols-1 md:grid-cols-2  gap-10 mb-4`}
    >
      {children}
    </div>
  );
}

export default Grid;
