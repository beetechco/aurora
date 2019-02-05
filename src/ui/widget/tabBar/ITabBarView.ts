import { IView } from '../../component/view/IView';
import { Tab } from './Tab';
export interface ITabBarView extends IView {
  setOnTabClickCallback(onTabClickCallback: Function): void;
  setSelectedTab(selectedTab: string): void;
  setTabs(tabs: Tab[]): void;
}
