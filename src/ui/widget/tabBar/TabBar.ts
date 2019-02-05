import { Component } from '../../component/Component';
import { TabBarModel } from './TabBarModel';
import { ITabBarView } from './ITabBarView';

export class TabBar extends Component<TabBarModel, ITabBarView> {
  static UICODE = 'TABBAR';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return TabBar.UICODE;
  }

  init(): void {
    this.getView().setOnTabClickCallback(this.onTabClickCallback);
    this.getView().setSelectedTab(this.getModel().getSelectedTab());
    this.getView().setTabs(this.getModel().getTabs());
  }

  onTabClickCallback = (tabId: string): void => {
    this.getModel().setSelectedTab(tabId);
    this.refresh();
  }

  setSelectedTab(selectedTab: string): void {
    this.getModel().setSelectedTab(selectedTab);
  }

  sync(): void {
    this.getView().setSelectedTab(this.getModel().getSelectedTab());
    this.getView().setTabs(this.getModel().getTabs());
  }

}
