/**
 * Created by fzemen on 3/7/17.
 */

import {Component, OnInit, ElementRef, AfterViewInit, Input} from "@angular/core";
import {InventoryService} from "../../services/inventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Component({
  selector:'inventory-list',
  templateUrl: 'app/components/inventoryList/inventoryList.component.html',
  styleUrls: ['app/components/inventoryList/inventoryList.component.css']
})
export class InventoryList implements OnInit, AfterViewInit {

  private _context:string = 'Jewelry Rack';
  @Input() set context(context:string) {
    this._context = context;
    this.inventoryService.getItems(context)
      .then((items: IInventoryItem[]) => {
        this.items = items;
      });
  }
  get context():string {
    return this._context;
  }


  items:IInventoryItem[] = [];
  currentItem:IInventoryItem;
  input:HTMLInputElement;

  constructor(private inventoryService:InventoryService, private el:ElementRef) {

  }
  setCurrentItem(item:IInventoryItem) {
    this.currentItem = item;
    this.inventoryService.setCurrentItem(this.currentItem);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let collection:HTMLCollection = this.el.nativeElement.getElementsByTagName('input');
    this.input = <HTMLInputElement> collection.item(0);
    this.input.focus();
  }
}