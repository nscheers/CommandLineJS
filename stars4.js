const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('n: ', (answer) => {

    for (var i = 0; i < answer; i++) {
        var string = '';

        for (var j = 0; j < answer; j++) {

            if (j + 1 == answer - i || j == i) {
                string += '*';
            } else {
                string += ' ';
            }


        }


        console.log(string);
    }


    rl.close();
    process.exit();
});

