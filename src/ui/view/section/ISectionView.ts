import { IView } from '../../component/view/IView';
import { Component } from '../../component/Component';
import { IModel } from '../../component/model/IModel';

export interface ISectionView extends IView {
  setCommandBar(commandbar: Component<IModel, IView>): void;
  setContent(content: Component<IModel, IView>): void;
  setTitle(title: string): void;
}