import { IView } from '../../component/view/IView';

export interface IInputView<T> extends IView {
    setOnChangeCallback(onChangeCallback: Function): void;
    setValue(value: T): void;
}