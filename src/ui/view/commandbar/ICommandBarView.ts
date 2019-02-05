import { IView } from '../../component/view/IView';
import { ButtonModel } from '../../widget/button/ButtonModel';

export interface ICommandBarView extends IView {
  setPrimaryCommands(primaryCommands: ButtonModel[]): void;
  setSecondaryCommands(secondaryCommands: ButtonModel[]): void;
}
