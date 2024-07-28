//        1.
number = 1
while (number <= 10){
    console.log("1. " +number)
    number += 1;
}
//         2.
console.log("")
number2 = 10
for(let i = 1; i < number2; i += 1){
    if (i % 2 === 1){
        continue
    }
    console.log("2. "+ i)
}  
//       3.
console.log("")
total7 = 0
for(let i = 1; i < 10; i += 1){
    total7 = 7 * i
    console.log("3. 7 * "+ i+' = ' + total7)
}  
//    4.
console.log("")
number5 = [1, 2, 3, 4, 5];
k = 0;
while (k < number5.length) {
    console.log("4. " + number5[k]);
    k++;
}
//        5.
console.log("")
number10 = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < 10; i += 1){
    if(number10[i] == 7){
        break
    }
    console.log("5. "+ number10[i])
} 
//        6. 
n = 21
console.log("")
for(let i = 1; i < n; i += 1){
    if(i >= n){
        break
    }
    console.log("6. "+ i)
} 
//         7.
console.log("")
number7 = 0
while(number7 < 21){
number7 = number7 + 1
if (number7 % 3 === 0){
    continue
}
console.log("7. " + number7)
} 