import { IView } from '../../component/view/IView';

export interface IInputView<T> extends IView {
    setEditable(editable: boolean): void;
    setOnChangeCallback(onChangeCallback: Function): void;
    setValue(value: T): void;
}