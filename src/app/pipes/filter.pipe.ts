import { Pipe, PipeTransform } from '@angular/core';
import { IPost, SearchFieldState } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(posts: IPost[], search: string = '', searchField: string = SearchFieldState.Title): IPost[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => post[searchField].toLowerCase().includes(search.toLowerCase()));
  }
}
