import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    fakeList = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},
    {id: 4, name: 'item 4'},
    {id: 5, name: 'item 5'},
    {id: 6, name: 'item 6'},
    {id: 7, name: 'item 7'},
    ];

  constructor() {
   }

    getList(){
      return this.fakeList;
    }
}
