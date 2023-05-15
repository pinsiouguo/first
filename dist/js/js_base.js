let age = 18;
let firstName = 'PINSIOU';
let lastName = 'GUO';
let country = 'TW';

console.log('(' + country + ') ' + firstName + ' ' + lastName);

console.log(`(${country}) ${firstName} ${lastName}`);

let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2;
let num4 = '10';
let num5 = num1 + num4;
let num6 = num1 - num4;
let num7 = num1 * num4;
let num8 = num1 / num4;
let num9 = num1 % num4;
let num10 = num1 + 'a';
console.log(num1, num2, num3, typeof num4, num5, num6, num7, num8, num9, num10);

let num11 = parseInt(num1, 10) + parseInt(num4, 10);
let num12 = +num1 + +num4;
let num13 = +num1 + +'a';
console.log(num11, num12, num13);

// 字元 char ,強型態語言時,一次只能塞一個
let s1 = 'S1 \t S1';
// 字串 string 
let s2 = "S2 \t S2";

// escape \
// \n -> new line
// \r\n -> new line
// \t -> tab

console.log(s1);
console.log(s2);

console.log(num1, num1.toString(), typeof num1, typeof num1.toString());


let b1 = true;
let b2 = false;
let b3 = 1;
let b4 = 0;
let b5 = 's';
let b6 = '';
let b7 = -1;
let b8 = 2;

if (b7) {
    console.log('Yes');
} else {
    console.log('No');
}


let students = [1, 2, 3, 4]
console.log(students);

students.push(5);
console.log(students);

console.log(students[0]);
console.log(students.join('::'));

let index = students.indexOf(2);
console.log(index);

students.splice(index, 1);
console.log(students);