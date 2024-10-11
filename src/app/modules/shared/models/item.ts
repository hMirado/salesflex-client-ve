import {ItemTarif} from "./item-tarif";

export interface Item {
  id: number;
  itemCode: string;
  itemName: string;
  itemPicture?: string;
  itemTarif?: ItemTarif[];
}
