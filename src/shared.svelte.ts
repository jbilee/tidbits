type UserData = {
  solved: number;
  knowledge: number;
  decor: string[];
  pixelStyle: string;
  ambience: string;
};

const storageData = localStorage.getItem("user-data");
const initData = storageData
  ? JSON.parse(storageData)
  : { solved: 0, knowledge: 0, decor: [], pixelStyle: "default", ambience: "default" };

export const userData: UserData = $state(initData);
