const addTwoNum = (num: number) => {
        return num + 2
}

// params exist
const signUpUser = (name: string, email: string, isPaid: Boolean) => {} 

// params defaulet
const logged = (name: string, email: string, isPaid: Boolean = false) => {} 

const consoleError = (errMsg: string): void => {
    console.log(errMsg)
}

// maping
const arr = ["ahmat", "randy" , 1]
const maping = arr.map((list: string | number) => {
    return `this is ${list}`
})

addTwoNum(2)
signUpUser("hello", "Aawd", false)
logged("randy", "@gmail")