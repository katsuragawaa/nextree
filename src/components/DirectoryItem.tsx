import { last, times } from 'lodash';
import { TbFolder, TbFile } from 'react-icons/tb';
import { FileNode, FileType } from '../lib/FileNode';
import { ChildBranchIcon, ConnectorBranchIcon, LastChildBranchIcon } from './BranchIcon';

type DirectoryItemProps = {
  item: FileNode;
};

export const DirectoryItem = ({ item }: DirectoryItemProps) => {
  const hasChildren = item.children.length > 0;
  const depth = item.getDepth();
  const lastChild = last(item.parent?.children) === item;

  return (
    <div>
      <div className="flex items-center">
        {depth !== 0 && (
          <>
            {times(depth - 1, key => (
              <div key={key} className="h-8 w-5">
                <div className="relative h-full w-full">
                  <ConnectorBranchIcon />
                </div>
              </div>
            ))}
            <div className="h-8 w-5">
              <div className="relative h-full w-full">{lastChild ? <LastChildBranchIcon /> : <ChildBranchIcon />}</div>
            </div>
          </>
        )}

        {item.type === FileType.folder ? <TbFolder className="mx-1 mt-0.5" /> : <TbFile className="mx-1 mt-0.5" />}
        <div>{item.name}</div>
      </div>
      {hasChildren && item.children.map((child, i) => <DirectoryItem key={i} item={child} />)}
    </div>
  );
};
