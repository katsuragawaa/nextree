import { TbTrashX } from 'react-icons/tb';

type FileActionsProps = {
  remove: () => void;
};

export const FileActions = ({ remove }: FileActionsProps) => {
  return (
    <div className="flex gap-2">
      <div
        className="cursor-pointer rounded-full p-1 transition-all hover:bg-red-400 hover:bg-opacity-50"
        onClick={remove}
      >
        <TbTrashX />
      </div>
    </div>
  );
};
