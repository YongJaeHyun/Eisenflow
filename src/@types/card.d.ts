declare module "card" {
  export interface ICardDetail {
    deadline: string;
    rate: number;
    title: string;
    content: string;
  }
  export interface IDraggedCardDetail {
    cardDetail: ICardDetail;
    x: number;
    y: number;
  }
}
