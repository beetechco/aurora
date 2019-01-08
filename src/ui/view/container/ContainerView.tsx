import * as React from 'react';
import { View } from '../View';
import { ContainerModel } from '../../widget/container/ContainerModel';
import { Component } from '../../component/Component';
import { IContainerView } from './IContainerView';

export class ContainerView extends View implements IContainerView {
  model: ContainerModel;
  view: any;
  elementRef: React.RefObject<any>;

  constructor(model: ContainerModel, id?: string) {
    super(id);
    this.model = model;
  }

  renderComponent = () => {
    return (
      <div
        ref={this.elementRef}
        id={this.getId()}
      >
        {
          this.model
            .getElements()
            .map((component: Component<any, any>) =>
              component.getUI().paint()
            )
        }
      </div>
    );
  }

  paint = () => {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = this.renderComponent();
    }

    return this.view;
  }

  repaint = () => {

  }
}