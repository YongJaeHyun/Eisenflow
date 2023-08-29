declare module "modal" {
  export type IModalStateType = "add" | "modify";
  export interface IModalState {
    isVisible: boolean;
    type: IModalStateType;
  }
}
