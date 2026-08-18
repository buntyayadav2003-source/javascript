n = 5

function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        line = ''
        for (let j = 1; j <= n; j++) {
            line = line + " *"
        }
        console.log(line)

    }
}
squarePattern(n)

console.log("----------");



function trianglePattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';

        for (let j = 1; j <= i; j++) {
            line = line + " *";
        }
        console.log(line);
    }
}

trianglePattern(n);

console.log("-------------");


let row = 3;
let col = 4;

function rectanglePattern(r, c) {
    for (let i = 1; i <= r; i++) {
        let line = '';

        for (let j = 1; j <= c; j++) {
            line = line + " *"
        }
        console.log(line)

    }
}

rectanglePattern(row, col)

console.log("-----------");


printRightAngleTriangle(n)

function printRightAngleTriangle(n) {
    for (let i = 1; i <= n; i++) {
        line = ''
        for (let j = n; j >= i; j--) {
            line += " *"
        }
        console.log(line)

    }
}
printRightAngleTriangle(n)


console.log("------------");



function pyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';


        for (let j = 1; j <= n - i; j++) {
            line = line + " ";
        }


        for (let k = 1; k <= (2 * i - 1); k++) {
            line = line + "*";
        }

        console.log(line);
    }
}

pyramidPattern(n);