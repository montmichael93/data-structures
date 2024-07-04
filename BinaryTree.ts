class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryNode<number>(1);
root.left = new BinaryNode<number>(2);
root.right = new BinaryNode<number>(3);
root.left.left = new BinaryNode<number>(4);
root.left.right = new BinaryNode<number>(5);
root.right.right = new BinaryNode<number>(6);
root.right.left = new BinaryNode<number>(7);
