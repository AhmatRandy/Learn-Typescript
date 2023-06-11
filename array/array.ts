const superHeroes: Array<string | number | boolean> = []
superHeroes.push(1, "randywande", true)

// Array of object
type ArrayValue = {
    name: string,
    age: number,
    meried: boolean
}

const userProfile: ArrayValue[] = []

userProfile.push({name: "randywande", age: 25, meried: true})
