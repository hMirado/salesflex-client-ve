export interface ItemTarif {
  id: number;
  itemPriceHt: number;
  tva: number;
  tarifType: TarifType;
}

export interface TarifType {
  id: number;
  tarifCode: string;
  tarifName: string;
}
