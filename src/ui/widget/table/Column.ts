
export class Column {
  private accessor: string;
  private accessorHandler: Function;
  private id: string;
  private label: string;

  getAccessor(): string {
    return this.accessor;
  }

  getAccessorHandler(): Function {
    return this.accessorHandler;
  }

  getId(): string {
    return this.id;
  }

  getLabel(): string {
    return this.label;
  }

  setAccessor(accessor: string): void {
    this.accessor = accessor;
  }

  setAccessorHandler(accessorHandler: Function): void {
    this.accessorHandler = accessorHandler;
  }

  setId(id: string): void {
    this.id = id;
  }

  setLabel(label: string): void {
    this.label = label;
  }

}