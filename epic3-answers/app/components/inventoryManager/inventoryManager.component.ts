/**
 * Created by Franz on 3/28/2017.
 */

import {Component, ElementRef, ViewChild} from "@angular/core";
import {jewelryRackList, allList} from "../../util/constants.various";
import {IInventoryItem} from "../../shapes/IInventoryItem";
import {InventoryList} from "../inventoryList/inventoryList.component";

@Component({
  selector:'inventory-manager',
  templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
}) export class InventoryManager {
  selectedContext:string;
  jewelryRackListName:string = jewelryRackList;
  allListName:string = allList;
  itemEdited:IInventoryItem;

  @ViewChild('itemEditName') nameInput:ElementRef;
  @ViewChild(InventoryList) inventoryList:InventoryList;

  constructor(private el:ElementRef) {}

  setContext(context:string) {
    this.selectedContext = context;
  }

  editItem($event:IInventoryItem) {
    this.itemEdited = $event;
    if ($event) {
      setTimeout(() => {
        this.nameInput.nativeElement.focus();
        /*
         let found:HTMLCollection = this.el.nativeElement.getElementsByClassName('itemEditedName');
         if(found.length != 1) {
         let err:Error = new Error('Unreachable code condition!');
         console.log(err);
         throw err;
         } else {
         let input:HTMLInputElement = <HTMLInputElement>found.item(0);
         input.focus();
         }*/
      }, 10);
    }
  }

  clearSelection() {
    if(this.inventoryList) {
      this.inventoryList.clearCurrentItem();
    }
  }
}