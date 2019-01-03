import * as React from 'react';
import { IView } from 'ui/component/view/IView';
import { View } from 'ui/view/View';
import { Model } from 'ui/component/model/Model';
import { Component } from 'ui/component/Component';

export class ComponentViewMock extends View implements IView<Model> {
  model: Model;
  view: any;
  elementRef: React.RefObject<any>;

  constructor(model: Model, id?: string) {
    super(id);
    this.model = model;
  }

  renderComponent = () => {
    return (
      <div
        ref={this.elementRef}
        id={this.getId()}
        key={this.getId()}
      >
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