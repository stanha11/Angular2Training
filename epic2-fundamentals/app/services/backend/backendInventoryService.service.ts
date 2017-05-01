/**
 * Created by fzemen on 3/9/17.
 */

import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";
import {jewelryRackList} from "../../util/constants.various";
import {saleRackList} from "../../util/constants.various";



@Injectable()
export class BackendInventoryService {

  getItems(context:string):Promise<IInventoryItem[]> {
    if(context === jewelryRackList) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
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
        });
      });
    } else if (context === saleRackList ) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{
            guid: 'item6guid',
            name: 'Garden Hose',
            price: 20.0
          }, {
            guid: 'item7guid',
            name: 'Extension Cord',
            price: 10.0
          }, {
            guid: 'item8guid',
            name: 'Shovel',
            price: 25.0
          }]);
        });
      });
    }
    else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
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
          },{
            guid: 'item5guid',
            name: 'Spider Scarf',
            price: 65.0
          }]);
        });
      });
    }
  }
}





