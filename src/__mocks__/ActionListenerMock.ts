import { IActionListener } from '../ui/component/common/IActionListener';

export class ActionListenerMock implements IActionListener {
  actionPerformed = (): boolean => {
    return true;
  }
}