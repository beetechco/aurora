import { InputModel } from "../input/InputModel";
import { Option } from './Option';

export class OptionsModel<T> extends InputModel<T> {
  private options: Option[] = null;
  constructor() {
    super();
  }

  public getOptions(): Option[] {
    return this.options;
  }

  public setOptions(options: Option[]): void {
    this.options = options;
  }
}