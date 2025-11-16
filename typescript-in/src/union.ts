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

    return 'jihad'
}
console.log(FruitsData())



function studentDatas(name:string){
    return name ;
}

studentDatas('jihad')



