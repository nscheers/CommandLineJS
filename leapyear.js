const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Give a year: ', (answer) => {
    var leapyear = false;
    if (answer % 400 == 0) {
        leapyear = true
    }
    ;
    if (answer % 4 == 0 && answer % 100 != 0) {
        leapyear = true
    }
    ;

    console.log('' + answer + ' -> ' + leapyear);
    rl.close();
    process.exit();
});


