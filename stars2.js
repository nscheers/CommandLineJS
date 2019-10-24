const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('n: ', (answer) => {

    for (var i = 0; i <= answer; i++) {
        var string = '';

        for (var j = 0; j < answer - i; j++) {
            string += ' ';
        }

        for (var j = 0; j < i; j++) {
            string += '*';
        }
        console.log(string);
    }


    rl.close();
    process.exit();
});

