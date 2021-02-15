import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  // language=HTML
  template: `
    <div class="post4">
        <h2>post title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, officia.</p>
    </div>
  `,
  styles: [`
    .post4 {
      color: darkgreen;
      border: 2px solid black;
      padding: 0.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  `],
})
export class Post4Component {

}
