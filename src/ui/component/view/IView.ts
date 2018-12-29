export default interface IView<T> {
  getId(): string;
  setParent(view: IView<any>): void;
  paint(): any;
  repaint(): void;
}
