type TreeContainerProps = {
  children: JSX.Element;
};

export const TreeContainer = ({ children }: TreeContainerProps) => {
  return (
    <div className="relative min-w-[calc(50%-24px)] rounded-lg border-2 border-teal-400 p-4 text-sm md:p-12 md:text-base">
      {children}
    </div>
  );
};
