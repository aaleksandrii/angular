import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic title';

  inputValue = '';

  inputValueBlur = '';

  constructor() {
  }

  onInputChange(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlurChange(str: string) {
    this.inputValueBlur = str;
  }

  onClickHandle() {
    console.log('click');
  }
}
