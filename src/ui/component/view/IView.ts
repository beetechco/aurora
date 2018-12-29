export default interface IView<T> {
  getId(): String;
  setParent(view: IView<any>): void;
  paint(): any;
  repaint(): void;
}
