type Add = {
    (a: number, b: number ) : number;
    (a: number, b: string ) : number;
}

const  add:Add = (a, b) => {
    if (typeof b === "string") return a
    return a + b
}