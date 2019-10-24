const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('n: ', (answer) => {

    width = answer * 2 - 1;

    for (var i = 0; i < width; i++) {
        var string = '';

        for (var j = 0; j < width; j++) {

            if (i < width / 2) {
                if (j + 1 == answer - i || j + 1 == 1 * answer + i) {
                    string += '+';
                } else if (j + 1 < Math.round(width / 2) - i) {
                    string += 'A';
                } else if (j + 1 > Math.round(width / 2) + i) {
                    string += 'B';
                } else {
                    string += 'E'
                }
            } else {
                if (j + 1 == answer - (width - i - 1) || j + 1 == 1 * answer + (width - i - 1)) {
                    string += '+';
                } else if (j + 1 < answer - (width - i - 1)) {
                    string += 'C';
                    4
                } else if (j + 1 > 1 * answer + (width - i - 1)) {
                    string += 'D';
                } else {
                    string += 'E'
                }
            }
        }
        console.log(string);
    }
    rl.close();
    process.exit();

});

