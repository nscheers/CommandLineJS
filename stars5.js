const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('n: ', (answer) => {

    for (var i = 0; i < answer; i++) {
        var string = '';

        for (var j = 0; j < answer; j++) {

            if (i < answer / 2) {
                if (j + 1 >= Math.round(answer / 2) - i && j + 1 <= Math.round(answer / 2) + i) {
                    string += '*';
                } else {
                    string += ' ';
                }
            } else {
                if (j + 1 >= Math.round(answer / 2) - (answer - i - 1) && j + 1 <= Math.round(answer / 2) + (answer - i - 1)) {
                    string += '*';
                } else {
                    string += ' ';
                }
            }
        }
        console.log(string);
    }
    rl.close();
    process.exit();

});
