export interface Header {
  categories: Categories[];
}

export interface Categories {
  name: string;
  value: string;
  isActive: boolean;
}
