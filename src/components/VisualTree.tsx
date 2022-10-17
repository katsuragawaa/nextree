import { useState } from 'react';
import { last, times } from 'lodash';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TbFile, TbFolder } from 'react-icons/tb';
import { FileNodeInterface, FileType } from '../lib/FileNode';
import { ChildBranchIcon, ConnectorBranchIcon, LastChildBranchIcon } from './BranchIcon';
import { FileActions } from './FileActions';
import { FolderActions } from './FolderActions';
import { InlineEdit } from './InlineEdit';

type VisualTreeProps = {
  node: FileNodeInterface;
  update: () => void;
};

export const VisualTree = ({ node, update }: VisualTreeProps) => {
  const [hover, setHover] = useState(false);
  const [animate] = useAutoAnimate<HTMLDivElement>({ duration: 75 });

  const hasChildren = node.children.length > 0;
  const depth = node.getDepth();
  const lastChild = last(node.parent?.children) === node;

  const changeName = (name: string) => {
    node.setName(name);
    update();
  };

  const addChild = (type: FileType) => {
    node.addChild(`new_${FileType[type]}`, type);
    update();
  };

  const remove = () => {
    node.remove();
    update();
  };

  return (
    <div ref={animate} className="w-full" key={node.key}>
      <div className="flex items-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {depth > 0 && (
          <>
            {times(depth - 1, (key) => (
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

        <div className="mx-1">{node.type === FileType.folder ? <TbFolder /> : <TbFile />}</div>
        <InlineEdit value={node.name} setValue={changeName} />
        <div className="ml-2">
          {hover &&
            (node.type === FileType.folder ? (
              <FolderActions add={addChild} remove={remove} />
            ) : (
              <FileActions remove={remove} />
            ))}
        </div>
      </div>
      {hasChildren && node.children.map((child, i) => <VisualTree key={i} node={child} update={update} />)}
    </div>
  );
};
