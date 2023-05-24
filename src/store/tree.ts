import { defineStore, acceptHMRUpdate } from "pinia";

type Folder = {
  name: string;
  children: Node[];
  parent?: Folder;
  siblings?: Folder[];
};

type File = {
  name: string;
  content: string;
  contentType: string;
  lastModified: string;
  size: number;
  parent?: Folder;
  siblings?: File[];
};

type Node = Folder | File;

type Tree = {
  nodes: Node[];
};

export const useTree = defineStore("tree", () => {
  const state = reactive({
    tree: null as Tree | null,
    selectedNode: null as Node | null,
  });

  const setTree = (tree: Tree) => {
    state.tree = tree;
  };

  const setNode = (source: Node, target: Folder) => {
    source.parent = target;
    if (!target.children) {
      target.children = [] as Node[];
    }
    target.children.push(source);
    target.siblings = target.children.filter(
      (node: Node) => node.name !== source.name
    ) as Folder[];
  };

  const focusNode = (node: Node) => {
    state.selectedNode = node;
  };

  return {
    state,
    setTree,
    setNode,
    focusNode,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTree, import.meta.hot));
}
