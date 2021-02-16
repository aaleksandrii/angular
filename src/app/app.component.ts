import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42 / 2 * 115;
  arr = [1, 2, 3];
  obj = { a: 1, b: {c: 2}};


  img = 'https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png';
  imgAngular = 'https://angular.io/assets/images/logos/angular/angular.png';

  constructor() {
    setTimeout(() => {
      console.log('timeout is over');
      this.img = this.imgAngular;
    }, 5000);
  }
}
