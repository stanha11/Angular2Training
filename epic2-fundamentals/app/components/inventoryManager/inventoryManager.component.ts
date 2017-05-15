/**
 * Created by shall on 4/25/2017.
 */

import {Component} from "@angular/core";
import {jewelryRackList, allList, saleRackList, nameSort, priceSort} from "../../util/constants.various";

@Component({
    selector:'inventory-manager',
    templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
}) export class InventoryManager {
    prevSelectedContext:string;
    selectedContext:string;
    sort:string;


    jewelryRackListName:string = jewelryRackList;
    allListName:string = allList;
    saleRackListName:string = saleRackList;
    sortColumnName:string = nameSort;
    sortColumnPrice:string = priceSort;

    constructor() {}

    setContext(context:string) {
        this.prevSelectedContext = this.selectedContext;
        this.selectedContext = context;
    }

    setSort(sort:string) {
        this.sort = sort;
    }

}