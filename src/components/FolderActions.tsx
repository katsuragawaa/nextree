import { TbFilePlus, TbFolderPlus, TbTrashX } from 'react-icons/tb';
import { FileType } from '../lib/FileNode';

type FolderActionsProps = {
  add: (type: FileType) => void;
  remove: () => void;
};

export const FolderActions = ({ add, remove }: FolderActionsProps) => {
  return (
    <div className="flex gap-2">
      <div
        className="cursor-pointer rounded-full p-1 transition-all hover:bg-teal-400 hover:bg-opacity-50"
        onClick={() => add(FileType.folder)}
      >
        <TbFolderPlus />
      </div>
      <div
        className="cursor-pointer rounded-full p-1 transition-all hover:bg-teal-400 hover:bg-opacity-50"
        onClick={() => add(FileType.file)}
      >
        <TbFilePlus />
      </div>
      <div
        className="cursor-pointer rounded-full p-1 transition-all hover:bg-red-400 hover:bg-opacity-50"
        onClick={remove}
      >
        <TbTrashX />
      </div>
    </div>
  );
};
