function totalPrice(items:number , price:number , text?:string){
//    let price = 200;
//    let items = 50;
  
//    console.log(price * items)

const result = items * price;
console.log(result)

}

totalPrice(50 , 30 )



function simple(data:string | number | true){
    console.log(data)
}

simple('jihad')



function anyOfFunction(data:any){
    console.log(data)
}

anyOfFunction('JIhad kaka')



function IamJihadSay():void{
    let name = 'jihad'
   console.log(`Hello My Name is ${name}`)
}

IamJihadSay()

function studentinfo(name:string | number){
    return name;
}

studentinfo('jihad ') 
studentinfo(999)

