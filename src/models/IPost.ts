export interface IPost {
  id: number;
  title?: string;
  body?: string;
  author?: string;
  coverImage?: string;
  price: number;
}

export interface INewItem {
  id: number;
  name?: string;
  price: number;
  count: number;
  quontity?: number;
}

export interface IItem {
  id?: number;
  count?: number;
  title?: string;
  total?: number;
}
