export class Option {
  private code: string;
  private label: string;

  getCode(): string {
    return this.code;
  }

  getLabel(): string {
    return this.label;
  }

  setCode(code: string): void {
    this.code = code;
  }

  setLabel(label: string): void {
    this.label = label;
  }

}