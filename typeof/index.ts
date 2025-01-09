type TAccount = {
  username: string;
  email: string;
  password: string;
  role: string;
};

type TEntityPropsMapper<T> = {
  [Property in keyof T]: {
    protectedField: boolean;
    description: string;
  };
};

type TAccountProps = TEntityPropsMapper<TAccount>;

const account = {
  username: "donald_duck",
  email: "donald.duck@exmaple.com",
  password: "goawaygoaway",
  role: "admin",
};

function getProp<T, K extends keyof T>(obj: T, prop: K) {
  return obj[prop];
}
console.log(getProp(account, "username"));
