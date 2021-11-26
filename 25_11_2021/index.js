var nums = [8, 7, 2, 5, 3, 1];
var target = 14;
var result = [];

nums.sort();
console.log(nums);
if (nums.length < 2) {
    console.log("array muy corto");
} else if (nums[0] + nums[1] > target) {
    console.log("no existe suma");
} else if (nums[nums.length - 2] + nums[nums.length - 1] < target) {
    console.log("no existe suma");    
} else {
    for (let index = 0; index < nums.length - 1; index++) {
        const element = nums[index];
        for (let indexDos = index + 1; indexDos < nums.length; indexDos++) {
            const elementDos = nums[indexDos];
            if (element + elementDos === target) {
                result.push({element, elementDos});
            }
        }
    }
    if (result.length >= 1) {
        result.forEach(e => {
            console.log("par de elementos que suman " + target + " es " + e[0] + " + " + e[1]);
        });
    } else {
        console.log("no hay par de elementos tal que su suma sea: " + target);
    }
}
/*
nums.forEach(e => {
    for (let indexDos = 0; indexDos < nums.length; indexDos++) {
        const elementDos = nums[indexDos];
        if (e + elementDos === target) {
            console.log("par de elementos que suman " + target + " es " + e + " + " + elementDos);
        } else {
            
        }
    }
})*/

/*
1 2 3 5 7 8
0 1 2 3 4 5
arr.length = 6

7 + 8 = 15 < 20
20

1 + 2 = 3 > 2
? === 2 -


8 7 2 5 3 1
8 + 7 ? === 10
8 + 2 ? === 10
8 + 5 ? === 10
8 + 3 ? === 10
8 + 1 ? === 10

7 + 2 ? === 10
7 + 5 ? === 10
7 + 3 ? === 10
7 + 1 ? === 10

2 + 5 ? === 10
2 + 3 ? === 10
2 + 1 ? === 10

5 + 3 ? === 10
5 + 1 ? === 10

2 + 1 ? === 10

for(i = 0; i < arr.length - 1; i++)
    for(i2 = i + 1; i2 < arr.length; i2++)
        if(i + i2 === target)
            consol.log(OK i + i2 = target)
        else
            ------
*/