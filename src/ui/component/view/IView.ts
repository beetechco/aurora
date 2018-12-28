import * as React from 'react';

export default interface IView<T>{
  paint(): React.Component;
  repaint(): void;
}