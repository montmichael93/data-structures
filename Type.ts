type NNode<T> = {
  value: T;
  prev?: NNode<T>;
  next?: NNode<T>;
};
