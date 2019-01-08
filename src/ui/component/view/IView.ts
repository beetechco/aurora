export interface IView {
  getId(): string;
  setParent(view: IView): void;
  paint(): any;
  repaint(): void;
}
