type personTA={name:string}
type personTB={age:number}
type PersonDataTC = personTA & personTB

let PersonDataA:{name:string} = {name:'jihad',}
let PersonDataB:{age:number} = {age:30}

let PersonDataC:{name:string, age:number} = {name:'jihad', age:30}



const isArray:string[] = []

if(isArray){
    console.log('Value is Same')
}