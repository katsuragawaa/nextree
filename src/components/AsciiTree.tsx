import { last, flattenDeep, RecursiveArray, times } from 'lodash';
import { FileNode, FileType, TreeOptions } from '../lib/FileNode';
import { LINE_STRINGS } from '../lib/constants';

type AsciiTreeProps = {
  node: FileNode;
};

function isLastChild(node: FileNode): boolean {
  return last(node.parent?.children) === node;
}

const getAsciiLine = (tree: FileNode, options: TreeOptions): string => {
  const lines = LINE_STRINGS[options.charset];
  if (lines === undefined) {
    throw new Error('Invalid line strings type');
  }

  const suffix = tree.type === FileType.folder ? '/' : '';
  const chunks = [isLastChild(tree) ? lines.LAST_CHILD : lines.CHILD, tree.name, suffix];

  let node = tree.parent;
  while (node) {
    chunks.unshift(isLastChild(node) ? lines.EMPTY : lines.DIRECTORY);
    node = node.parent;
  }

  return chunks.join('').substring(lines.CHILD.length);
};

const generateTree = (structure: FileNode, options: TreeOptions): string =>
  flattenDeep([
    getAsciiLine(structure, options),
    structure.children.map(c => generateTree(c, options)) as RecursiveArray<string>,
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
    <div>
      <pre>{generateTree(node, options)}</pre>
    </div>
  );
};
