import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByListName'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchText: string): any {
    if (!data) return [];
    if (!searchText) return data;
    searchText = searchText.toString().toLowerCase();
    return data.filter(res => {
      return res.listname.toLowerCase().includes(searchText);
    });
  }

}
