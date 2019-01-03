import * as React from 'react';
import { IView } from 'ui/component/view/IView';
import { View } from '../View';
import { ContainerModel } from 'ui/widget/container/ContainerModel';
import { Component } from 'ui/component/Component';

export class ContainerView extends View implements IView<ContainerModel> {
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
            .map((component: Component<any>) =>
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

  repaint = () => {}
}