import { Component } from '../../component/Component';
import { CommandBarModel } from './CommandBarModel';
import { ICommandBarView } from '../../view/commandbar/ICommandBarView';

/**
 * Barra de Comandos
 * Dos secciones:
 *   primaria: comandos alineados a la izquierda
 *   secundaria: comandos alineados a la derecha
 * height same as html container component that must be a flex container.
 * background color same as html container component.
 */
export class CommandBar extends Component<CommandBarModel, ICommandBarView> {
  static UICODE = 'COMMAND-BAR';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return CommandBar.UICODE;
  }

  init() {
    this.getView().setPrimaryCommands(this.getModel().getPrimaryCommands());
    this.getView().setSecondaryCommands(this.getModel().getSecondaryCommands());
  }

  sync() {
    this.getView().setPrimaryCommands(this.getModel().getPrimaryCommands());
    this.getView().setSecondaryCommands(this.getModel().getSecondaryCommands());
  }
}
