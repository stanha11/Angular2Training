/**
 * Created by fzemen on 3/14/17.
 */

import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Injectable()
export class BackendInventoryService {
  constructor() {}

  getItems():IInventoryItem[] {
    let items:IInventoryItem[] = [{
      guid: 'item1',
      name: 'Bronze Earings',
      price: 100.00
    },{
      guid: 'item49',
      name: 'Kardassian Broach',
      price: 55.00
    },{
      guid:  'item74',
      name: 'Diamon Necklace #54',
      price: 99.99
    }];

    return items;
  }
}