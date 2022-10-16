type TreeContainerProps = {
  children: JSX.Element;
};

export const TreeContainer = ({ children }: TreeContainerProps) => {
  return <div className="min-w-[calc(50%-24px)] rounded-lg border-2 border-teal-400 p-12">{children}</div>;
};
