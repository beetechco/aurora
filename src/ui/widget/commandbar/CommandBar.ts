import { Component } from '../../component/Component';
import { CommandBarModel } from './CommandBarModel';
import { ICommandBarView } from '../../view/commandbar/ICommandBarView';

export class CommandBar extends Component<CommandBarModel, ICommandBarView> {
  static UICODE = 'COMMAND-BAR';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return CommandBar.UICODE;
  }

  init() {

  }

  sync() {

  }
}
