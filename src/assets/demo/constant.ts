import {Item} from "../../app/modules/shared/models/item";

export const ITEMS: Item[] = [
  {
    "id": 1,
    "itemCode": "I0001",
    "itemName": "Item 0001",
    "itemTarif": [
      {
        "id": 1,
        "itemPriceHt": 4000.0,
        "tva": 20.0
      }
    ]
  },
  {
    "id": 2,
    "itemCode": "I0002",
    "itemName": "Item 0002",
    "itemTarif": [
      {
        "id": 2,
        "itemPriceHt": 6000.0,
        "tva": 20.0
      }
    ]
  },
  {
    "id": 3,
    "itemCode": "I0003",
    "itemName": "Item 0003",
    "itemTarif": [
      {
        "id": 3,
        "itemPriceHt": 4500.0,
        "tva": 20.0,
      }
    ]
  },
  {
    "id": 4,
    "itemCode": "I0004",
    "itemName": "Item 0004",
    "itemTarif": [
      {
        "id": 4,
        "itemPriceHt": 9500.0,
        "tva": 20.0
      }
    ]
  }
];
