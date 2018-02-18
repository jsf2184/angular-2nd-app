import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      color: red;
    }
    .laterEntry {
      color: white;
    }
  `]
})
export class AppComponent {
  password = '';
  title = 'Greater Website';
  userName = 'Joe';
  displayParagraph = true;
  buttonClicks = [];

  // onSetToJoeTimeout() {
  //   this.userName = 'Joe';
  //   setTimeout(() => this.onSetToJoeTimeout(), 5000);
  // }

  constructor() {
    // setTimeout(() => this.onSetToJoeTimeout(), 5000);

  }

  onUserNameReset() {
    this.userName = '';
  }
  isUserNameResetAllowed() {
    const res = this.userName.length > 0;
    return res;
  }

  onDisplayParagraphButtonClick() {
    this.displayParagraph = !this.displayParagraph;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }

  getElementBackgroundColor(v) {
    return v >= 4 ? 'blue' : 'white';
  }

}
