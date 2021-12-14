/*import {
    atan2,
    chain,
    derivative,
    e,
    evaluate,
    log,
    pi,
    pow,
    round,
    sqrt
} from 'mathjs'

// functions and constants
console.log(round(e, 3));
// 2.718
console.log(atan2(3, -3) / pi);
// 0.75
log(10000, 10)
// 4
sqrt(-4)
// 2i
pow([
    [
        -1, 2
    ],
    [
        3, 1
    ]
], 2)
// [[7, 0], [0, 7]]
derivative('x^2 + x', 'x')
// 2 * x + 1 expressions
evaluate('12 / (2.3 + 0.7)')
// 4
evaluate('12.7 cm to inch')
// 5 inch
evaluate('sin(45 deg) ^ 2')
// 0.5
evaluate('9 / 3 + 2i')
// 3 + 2i
evaluate('det([-1, 2; 3, 1])') // -7*/

/**********************************************************/

/*import pkg from 'chart.js';
const {Chart} = pkg;*/

var Chart = require("chart.js").Chart;

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                0,
                10,
                5,
                2,
                20,
                30,
                45
            ]
        }
    ]
};
const config = {
    type: 'line',
    data: data,
    options: {}
};

console.log(config);

//const myChart = new Chart(document.getElementById('myChart'), config);
