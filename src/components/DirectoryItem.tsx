import { TbFolder, TbFile } from 'react-icons/tb';
import { FileNode, FileType } from '../lib/FileNode';

type DirectoryItemProps = {
  item: FileNode;
};

export const DirectoryItem = ({ item }: DirectoryItemProps) => {
  const hasChildren = item.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        {item.type === FileType.folder ? <TbFolder className="mt-0.5 mr-1" /> : <TbFile className="mt-0.5 mr-1" />}
        <div>{item.name}</div>
        <div className="ml-1">({item.getDepth()})</div>
      </div>
      {hasChildren && item.children.map((child, i) => <DirectoryItem key={i} item={child} />)}
    </div>
  );
};
