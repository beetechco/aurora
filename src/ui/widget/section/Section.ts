import { Component } from '../../component/Component';
import { SectionModel } from './SectionModel';
import { ISectionView } from '../../view/section/ISectionView';
import { CommandBar } from '../commandbar/CommandBar';
import { CommandBarModel } from '../commandbar/CommandBarModel';
import { ButtonModel } from '../../..';

export class Section extends Component<SectionModel, ISectionView> {
  static UICODE = 'SECTION';

  private commandBar: CommandBar;
  private commandBarModel: CommandBarModel;


  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Section.UICODE;
  }

  init() {
    this.commandBar = new CommandBar(`${this.getId()}-commandbar`);
    this.commandBarModel = new CommandBarModel();
    this.commandBar.setModel(this.commandBarModel);

    if (this.getModel().getCollapsible()) {
      const collapsible =  new ButtonModel();
      collapsible.setCode('collapsible');
      collapsible.setIcon('fas fa-chevron-up');
      collapsible.setLabel('Ocultar');
      collapsible.setOnlyIcon(true);
      this.commandBarModel.addSecondaryCommand(collapsible);
    }

    this.getView().setCommandBar(this.commandBar);
    this.getView().setContent(this.getModel().getContent());
    this.getView().setTitle(this.getModel().getTitle());

  }

  sync() {
    this.commandBar.refresh();

    this.getView().setContent(this.getModel().getContent());
    this.getView().setTitle(this.getModel().getTitle());
  }
}
