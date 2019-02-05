import { Model } from '../../component/model/Model';
import { ButtonModel } from '../../..';


export class CommandBarModel extends Model {
  private primaryCommands: ButtonModel[] = [];
  private secondaryCommands: ButtonModel[] = [];

  addPrimaryCommand(buttonModel: ButtonModel): void {
    this.primaryCommands.push(buttonModel);
  }

  addSecondaryCommand(buttonModel: ButtonModel): void {
    this.secondaryCommands.push(buttonModel);
  }

  getPrimaryCommands(): ButtonModel[] {
    return this.primaryCommands;
  }

  getSecondaryCommands(): ButtonModel[] {
    return this.secondaryCommands;
  }

}
