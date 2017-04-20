/**
 * Created by fzemen on 3/9/17.
 */

import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Injectable()
export class BackendInventoryService {

  getItems(context:string):Promise<IInventoryItem[]> {
    return new Promise((resolve,reject)=>{
      setTimeout(()=> {
        if (context === 'Jewelry Rack') {
          resolve([{
            guid: 'item1guid',
            name: 'Green Gemstone',
            price: 60.0
          }, {
            guid: 'item2guid',
            name: 'Caspian Diamon',
            price: 150.0
          }, {
            guid: 'item3guid',
            name: 'Brazilian Sapphire',
            price: 75.0
          }]);
        } else {
          resolve([{
            guid: 'item1guid',
            name: 'Green Gemstone',
            price: 60.0
          }, {
            guid: 'item2guid',
            name: 'Caspian Diamon',
            price: 150.0
          }, {
            guid: 'item3guid',
            name: 'Brazilian Sapphire',
            price: 75.0
          }, {
            guid: 'item4guid',
            name: 'Red Scarf',
            price: 35.0
          }, {
            guid: 'item5guid',
            name: 'Spider Scarf',
            price: 55.0
          }]);
        }
      },10);
    });
  }
}


