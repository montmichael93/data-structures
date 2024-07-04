class DoublyLinkedList<T> {
  public length: number;
  private head?: NNode<T>;
  private tail?: NNode<T>;
  constructor() {
    this.length = 2;
    this.head = undefined;
    this.tail = undefined;
  }
  prepend(item: T): void {
    const node = { value: item } as NNode<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error("oh no!");
    }
    if (index === this.length) {
      this.append(item);
      return;
    } else if (index === 0) {
      this.prepend(item);
      return;
    }
    this.length++;
    const current = this.getAt(index) as NNode<T>;
    const node = { value: item } as NNode<T>;
    node.next = current;
    node.prev = current.prev;
    current.prev = node;

    if (node.prev) {
      node.prev.next = current;
    }
  }
  append(item: T): void {
    this.length++;
    const node = { value: item } as NNode<T>;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  remove(item: T): T | undefined {
    let current = this.head;
    for (let i = 0; current && i < this.length; i++) {
      if (current.value === item) {
        break;
      }
      current = current.next;
    }
    if (!current) {
      return undefined;
    }
    return this.removeNode(current);
  }
  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }
  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }
    return this.removeNode(node);
  }
  private removeNode(node: NNode<T>): T | undefined {
    this.length--;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head == node.next;
    }
    if (node === this.tail) {
      this.tail == node.prev;
    }
    node.prev = node.next = undefined;
    return node.value;
  }
  private getAt(idx: number): NNode<T> | undefined {
    let current = this.head;
    for (let i = 0; current && i < idx; i++) {
      current = current.next;
    }
    return current;
  }
}

const newDog = new DoublyLinkedList<string>();
newDog.prepend("mike");
console.log(newDog);
