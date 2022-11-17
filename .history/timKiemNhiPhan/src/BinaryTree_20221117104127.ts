import {Tree} from "../interface/Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTree<E> implements Tree<E>{
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        
    }

    inorder(node: TreeNode<E>): void {
    }

    insert(e: E): TreeNode<E> {
        
    }

}