import {randomId} from 'ui/Utils'
export default class View {
  private id: String;
  constructor() {
    this.id = randomId();
  }

  public getId(): String {
    return this.id;
  }
}
