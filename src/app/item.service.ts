import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import { ITEMS } from './mock-items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems() {
    return ITEMS;
  }
}
