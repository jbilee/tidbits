export type VentureData = {
  total: number;
  categories: CategoryData[];
};

export type CategoryData = {
  name: string;
  cleared: number;
  answered: number[];
};

export type UserData = {
  solved: VentureData;
  knowledge: number;
  decorsUnlocked: string[];
  decorsPlaced: string[];
  pixelStyle: string;
  ambience: string;
};

const storageData = localStorage.getItem("user-data");
const initSolved = {
  total: 0,
  categories: [
    { name: "os", cleared: 0, answered: [] },
    { name: "networks", cleared: 0, answered: [] },
    { name: "db", cleared: 0, answered: [] },
    { name: "js", cleared: 0, answered: [] },
  ],
};
const initData = storageData
  ? JSON.parse(storageData)
  : {
      solved: initSolved,
      knowledge: 0,
      decorsUnlocked: [],
      decorsPlaced: [],
      pixelStyle: "default",
      ambience: "default",
    };

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
