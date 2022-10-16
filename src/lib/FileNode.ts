import { uniqueId } from 'lodash';

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
  setName(name: string): void;
  addChild(name: string, type: FileType): void;
  remove(): void;
}

export class FileNode implements FileNodeInterface {
  public key: string;
  public name: string;
  public type: FileType;
  public parent: FileNodeInterface | null;
  public children: FileNodeInterface[] = [];

  constructor(name: string, type: FileType, parent: FileNodeInterface | null) {
    this.key = uniqueId();
    this.name = name;
    this.type = type;
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
    }
  }

  public getDepth(depth = 0): number {
    if (!this.parent) {
      return depth;
    }

    return this.parent.getDepth(depth + 1);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public addChild(name: string, type: FileType) {
    new FileNode(name, type, this);
  }

  public remove(): void {
    this.key = uniqueId();
    this.name = 'my_app';
    this.children = [];
    if (!this.parent) {
      return;
    }
    this.parent.children = this.parent.children.filter((child) => child !== this);
  }
}
