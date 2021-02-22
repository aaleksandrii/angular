import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic title';

  titleNgModel = 'titleNgModel';

  onInputHandle = (event: any) => {
    this.title = event.target.value;
  }
}
