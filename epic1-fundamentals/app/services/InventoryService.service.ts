import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";


@Injectable()
class InventoryService {
    getItems():IInventoryItem[] {
        let items:IInventoryItem[] = [];
        //noinspection TypeScriptValidateTypes
        items = [{
            guid:'item1',
            name: 'Bronze Earings',
            price: 100.00
        },{
            guid:'item49',
            name: 'Kardassian Broach',
            price: 55.00
        },{
            guid:'item74',
            name: 'Diamond Necklace #54',
            price:  9.99
        }
        ];
        return items;
    }
}

export {
    InventoryService
}