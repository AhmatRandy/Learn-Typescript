interface BasicAddress {
  name?: string;
  street: string;
}

interface AddressWithUnit {
  name?: string;

  street: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

const ex = (props: AddressWithUnit) => {
  console.log(props);
};

let func = ex({ unit: "oke", name: "awd", street: "wdwd" });
console.log(func);
