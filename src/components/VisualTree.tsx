import { last, times } from 'lodash';
import { TbFolder, TbFile } from 'react-icons/tb';
import { FileNode, FileType } from '../lib/FileNode';
import { ChildBranchIcon, ConnectorBranchIcon, LastChildBranchIcon } from './BranchIcon';

type VisualTreeProps = {
  node: FileNode;
};

export const VisualTree = ({ node }: VisualTreeProps) => {
  const hasChildren = node.children.length > 0;
  const depth = node.getDepth();
  const lastChild = last(node.parent?.children) === node;

  return (
    <div>
      <div className="flex items-center">
        {depth > 0 && (
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

        {node.type === FileType.folder ? <TbFolder className="mx-1 mt-0.5" /> : <TbFile className="mx-1 mt-0.5" />}
        <div>{node.name}</div>
      </div>
      {hasChildren && node.children.map((child, i) => <VisualTree key={i} node={child} />)}
    </div>
  );
};
