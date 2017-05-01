/**
 * Created by shall on 4/25/2017.
 */

import {Component} from "@angular/core";
import {jewelryRackList, allList, saleRackList} from "../../util/constants.various";

@Component({
    selector:'inventory-manager',
    templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
}) export class InventoryManager {
    prevSelectedContext:string;
    selectedContext:string;
    sortOrder:string;
    jewelryRackListName:string = jewelryRackList;
    allListName:string = allList;
    saleRackListName:string = saleRackList;

    constructor() {}

    setContext(context:string) {
        this.prevSelectedContext = this.selectedContext;
        this.selectedContext = context;
    }

    setSortOrder(sortOrder:string) {
        this.sortOrder = sortOrder;
    }

}