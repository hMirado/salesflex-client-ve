import {Item} from "../../app/modules/shared/models/item";

export const ITEMS: Item[] = [
  {
    "id": 1,
    "itemCode": "98-6898782",
    "itemName": "Sun - Dried Tomatoes",
    "itemTarif": [
      {
        "id": 1,
        "itemPriceHt": 4000.0,
        "tva": 20.0,
        "tarifType": {
          "id": 1,
          "tarifCode": "TP",
          "tarifName": "Tarif public"
        }
      }
    ]
  },
  {
    "id": 2,
    "itemCode": "46-0490453",
    "itemName": "Sausage - Breakfast",
    "itemTarif": [
      {
        "id": 2,
        "itemPriceHt": 9000.0,
        "tva": 20.0,
        "tarifType": {
          "id": 1,
          "tarifCode": "TP",
          "tarifName": "Tarif public"
        }
      }
    ]
  },
  {
    "id": 3,
    "itemCode": "68-2596372",
    "itemName": "Glucose",
    "itemTarif": [
      {
        "id": 3,
        "itemPriceHt": 2700.0,
        "tva": 20.0,
        "tarifType": {
          "id": 1,
          "tarifCode": "TP",
          "tarifName": "Tarif public"
        }
      }
    ]
  },
];
