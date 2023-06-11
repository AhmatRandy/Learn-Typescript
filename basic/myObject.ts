const User = {
    name: "randy",
    age: 26,
    isMarried: true
}


const useObj = ({ name: string, age: number, isMarried: boolean }) => { }
let Newobj = { name: "ahmat", age: 26, isMarried: true, email: "randywande@gmail.com" }



//  func for return typ
const getObj = ({ name: string, age: number }):{} => {
    return {
        name: "ahmat",
        age: 26
    }
}


type User = {
    name: string,
    age: number
}
const createPost = (user: User) => {
    return {name: "", age: ''}
}

createPost({name: "randy", age: 23})

