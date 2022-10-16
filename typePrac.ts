let a: number = 1;
let b: string = "il"
let c: boolean = true

let d: number[] = [1, 2, 3]
let e: string[] = ["a", "b"]

type Player = {
    name: string,
    age?: number,
    wins?: boolean
}

const playerKim: Player = {
    name: "kim",
    age: 27,
    wins: true
}

const playerBaek: Player = {
    name: "beak"
}