export enum FileType {
  file,
  folder,
}

export interface TreeOptions {
  charset: 'ascii' | 'utf-8';
  trailingDirSlash: boolean;
  fullPath?: boolean;
}

export interface FileNodeInterface {
  name: string;
  type: FileType;
  parent: FileNodeInterface | null;
  children: FileNodeInterface[];
  getDepth(depth: number): number;
}

export class FileNode implements FileNodeInterface {
  public name: string;
  public type: FileType;
  public parent: FileNodeInterface | null;
  public children: FileNodeInterface[] = [];

  constructor(name: string, type: FileType, parent: FileNodeInterface | null) {
    this.name = name;
    this.type = type;
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
    }
  }

  /**
   * Searches the depth a node is in the tree
   */
  public getDepth(depth = 0): number {
    if (!this.parent) {
      return depth;
    }

    return this.parent.getDepth(depth + 1);
  }
}
