type OnlyBoolsAndHorses = {
  [key: string]: boolean | string;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
