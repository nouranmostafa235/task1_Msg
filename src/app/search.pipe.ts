import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userData:any[],searchTerm:string): any[] {
    if(!userData|| !searchTerm)
      return userData
    return userData.filter(data=>data.id.toString().includes(searchTerm))
  }

}
