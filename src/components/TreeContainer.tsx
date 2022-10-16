type TreeContainerProps = {
  children: JSX.Element;
};

export const TreeContainer = ({ children }: TreeContainerProps) => {
  return (
    <div className="flex-1 rounded-lg border-2 border-teal-400 p-12">
      <div className="flex">{children}</div>
    </div>
  );
};
