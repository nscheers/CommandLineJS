const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('n: ', (answer) => {

    var string = `${answer} -> `;
    for (var i = 2; i <= answer; i++) {
        var prime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false
            }
        }
        if (prime) {
            string += ` ${i}`
        }
    }
    console.log(string);


    rl.close();
    process.exit();
});

