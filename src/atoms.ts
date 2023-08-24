import { atom } from "recoil";

export interface ICardData {
  deadline: Date;
  rate: number;
  title: string;
  content: string;
}

export const isModalVisible = atom({
  key: "isModalVisible",
  default: false,
});

export const currentAddGroupIdx = atom({
  key: "currentAddGroupIdx",
  default: 0,
});

export const groupList = atom<ICardData[][]>({
  key: "groupList",
  default: [[], [], [], []],
});
