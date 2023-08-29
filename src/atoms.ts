import { atom } from "recoil";
import { ICardDetail } from "card";
import { IModalState } from "modal";

export const modalState = atom<IModalState>({
  key: "isModalVisible",
  default: { isVisible: false, type: "add" },
});

export const isCardDragging = atom({
  key: "isCardSelected",
  default: false,
});

export const currentAddGroupIdx = atom({
  key: "currentAddGroupIdx",
  default: 0,
});

export const groupList = atom<ICardDetail[][]>({
  key: "groupList",
  default: [[], [], [], []],
});
