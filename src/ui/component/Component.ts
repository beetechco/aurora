import { Map } from 'immutable';
import IView from './view/IView';
import { randomId } from '../Utils';

export default class Component<T> {
  private id: String;
  private view: IView<T>;
  private state: Map<String, any>;
  private model: T;
  constructor() {
    this.state = Map<String, any>();
    this.id = randomId();
  }

  public setModel(model: T): void {
    this.model = model;
  }

  public getModel(): T {
    return this.model;
  }

  public refreshUI(): void { }
}
