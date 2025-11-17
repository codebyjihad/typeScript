"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentData = 'jihad';
studentData = 20;
studentData = [];
console.log(studentData);
function FruitsData() {
    let item = 1;
    if (item > 1) {
        return ['Apple', 'Banana'];
    }
    else {
        return 'apple';
    }
}
console.log(FruitsData());
function studentDatas(name) {
    if (typeof name === 'string') {
        return 'Student nam is ' + name;
    }
    if (typeof name === 'number') {
        return 'student age is ' + name;
    }
}
studentDatas('jihad');
const country = 'Bangladesh';
const HelloIamJiahd = `Hello world ${country}`;
console.log(HelloIamJiahd);
//# sourceMappingURL=union.js.map