let studentData:string|number | string[]='jihad';
studentData=20;
studentData=[];

console.log(studentData)


function FruitsData():string | string[] | number{
    let item = 1
     
    if(item  > 1){
        return['Apple', 'Banana']
    }else{
        return 'apple'
    }
}
console.log(FruitsData())

function studentDatas(name:string){
  
   if(typeof name === 'string'){
      return 'Student nam is ' + name
   }

   if(typeof name  === 'number'){
    return 'student age is ' + name
   }
}

studentDatas('jihad')
const country:string = 'Bangladesh'
const HelloIamJiahd:string = `Hello world ${country}`
console.log(HelloIamJiahd)