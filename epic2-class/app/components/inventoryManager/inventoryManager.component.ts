/**
 * Created by fzemen on 3/30/17.
 */

import {Component} from "@angular/core";



@Component({
  selector: 'inventory-manager',
  templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
})
export class InventoryManager {

  firstContext:string = 'JewelryRack';
  secondContext:string = 'All';
  constructor() {}
}