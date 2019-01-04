import * as React from 'react';
import { IView } from '../../component/view/IView';
import { View } from '../View';
import { ButtonModel } from '../../widget/button/ButtonModel';
import { IActionListener } from '../../component/common/IActionListener';

export class ButtonView extends View implements IView<ButtonModel> {
  model: ButtonModel;
  view: any;
  elementRef: React.RefObject<any>;

  constructor(model: ButtonModel, id?: string) {
    super(id);
    this.model = model;
  }

  onAction = () => {
    if (this.model.getActionListeners()) {
      this.model
        .getActionListeners()
        .forEach((actionListener: IActionListener) =>
          actionListener.actionPerformed()
        );
    }
  };

  renderComponent = () => {
    return (
      <div
        ref={this.elementRef}
        id={this.getId()}
        onClick={this.onAction}
      >
        {this.model.getLabel()}
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
