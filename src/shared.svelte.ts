export type UserData = {
  solved: number;
  knowledge: number;
  decorsUnlocked: string[];
  decorsPlaced: string[];
  pixelStyle: string;
  ambience: string;
};

const storageData = localStorage.getItem("user-data");
const initData = storageData
  ? JSON.parse(storageData)
  : { solved: 0, knowledge: 0, decorsUnlocked: [], decorsPlaced: [], pixelStyle: "default", ambience: "default" };

export const userData: UserData = $state(initData);

export const saveData = () => {
  localStorage.setItem("user-data", JSON.stringify(userData));
};

export const replaceData = (data: UserData) => {
  userData.solved = data.solved;
  userData.knowledge = data.knowledge;
  userData.decorsUnlocked = [...data.decorsUnlocked];
  userData.decorsPlaced = [...data.decorsPlaced];
  userData.pixelStyle = data.pixelStyle;
  userData.ambience = data.ambience;
};

export const activeModal = $state({ name: "" });
