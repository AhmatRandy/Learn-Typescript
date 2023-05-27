const User = {
    name: "randy",
    age: 26,
    isMarried: true
}


const useObj = ({ name: string, age: number, isMarried: boolean }) => { }
let Newobj = { name: "ahmat", age: 26, isMarried: true, email: "randywande@gmail.com" }

const getObj = ({ name: string, age: number }):{} => {
    return {
        name: "ahmat",
        age: 26
    }
}



useObj(Newobj)