"use strict";
const salary = 7500;
const friendSalaries = [7599, 1300, 4300, 5000];
const friends = ['rohim', 'karin', 'jarin', 'marin'];
friendSalaries[0] = 1000;
friendSalaries.push(13000);
// friendSalaries[0]='9800'
// friendSalaries.push('5300')
friends.push("Bakib");
friends[2] = 'Qakib';
// friends.push(2345)
let max = 0; // not alow number type to string type
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
