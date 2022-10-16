import { last, flattenDeep, RecursiveArray } from 'lodash';
import { FileNodeInterface, FileType, TreeOptions } from '../lib/FileNode';
import { LINE_STRINGS } from '../lib/constants';

type AsciiTreeProps = {
  node: FileNodeInterface;
};

const isLastChild = (node: FileNodeInterface): boolean => last(node.parent?.children) === node;

const getAsciiLine = (node: FileNodeInterface, options: TreeOptions): string => {
  const lines = LINE_STRINGS[options.charset];
  if (lines === undefined) {
    throw new Error('Invalid line strings type');
  }

  const suffix = node.type === FileType.folder ? '/' : '';
  const chunks = [isLastChild(node) ? lines.LAST_CHILD : lines.CHILD, node.name, suffix];

  let current = node.parent;
  while (current) {
    chunks.unshift(isLastChild(current) ? lines.EMPTY : lines.DIRECTORY);
    current = current.parent;
  }

  return chunks.join('').substring(lines.CHILD.length);
};

const generateTree = (structure: FileNodeInterface, options: TreeOptions): string =>
  flattenDeep([
    getAsciiLine(structure, options),
    structure.children.map((c) => generateTree(c, options)) as RecursiveArray<string>,
  ]).join('\n');

export const AsciiTree = ({ node }: AsciiTreeProps) => {
  const lines = LINE_STRINGS['utf-8'];
  if (lines === undefined) {
    throw new Error('Invalid line strings type');
  }

  const options: TreeOptions = {
    charset: 'utf-8',
    trailingDirSlash: true,
    fullPath: false,
  };

  return (
    <div className="overflow-x-scroll">
      <pre>{generateTree(node, options)}</pre>
    </div>
  );
};
