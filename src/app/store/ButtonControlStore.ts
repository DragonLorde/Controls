import { makeAutoObservable } from 'mobx';

export interface IButton {
  text: string | number;
  callback: () => void ;
}

export enum buttonPosition {
  left,
  right
}

class ButtonControlStore {
  value = '';
  buttonsLeft: IButton[] = [];
  buttonsRight: IButton[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setText = (text: string) => {
    this.value = text;
  };

  addButton(position: buttonPosition, text: string, callback: () => void) {
    const button = { text, callback };
    if (position === buttonPosition.left) {
      this.buttonsLeft.push(button);
    } else {
      this.buttonsRight.push(button);
    }
  }

  clearText = () => {
    this.value = '';
  };

  setHelloWorld = () => {
    this.value = 'hello world';
  };

  showAlert = () => {
    alert(this.value);
  };

  checkAndAlertNumber = () => {
    const number = parseFloat(this.value);
    if (!isNaN(number)) {
      alert(number);
    } else {
      alert('Not a number');
    }
  };
}

export default ButtonControlStore;
