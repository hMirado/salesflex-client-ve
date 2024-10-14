export interface Classification {
  id: number;
  classificationKey: string;
  classificationName: string;
  classificationIsMandatory: boolean;
  subClassification: SubClassification[];
}

export interface SubClassification {
  id: number;
  classificationValueKey: string;
  classificationValueName: string;
}
