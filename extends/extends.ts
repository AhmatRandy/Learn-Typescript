interface BasicAddress {
  status?: string;
  age: number;
}

interface AddressWithUnit {
  name?: string;
  street?: string;
}

interface AddressWithUnit extends BasicAddress {
  from: string;
}

const Exmut = (props: AddressWithUnit) => {
  console.log(props);
};

const callFunction = Exmut({ from: "Indonesia", status: "awd", age: 28 });
console.log(callFunction);
