interface info {
  name:string,
  age:number,
  collage:string
}


interface teacher extends info{
     teacherSub:string
}

let studentsObj:info 
={
    name:'jihad',
    age:30,
    collage:'Dhaka Univercity'
}



let teachersObj:teacher={
    name:'jihad',
    age:40,
    collage:'Mirpur collage',
    teacherSub:'Math'
}
