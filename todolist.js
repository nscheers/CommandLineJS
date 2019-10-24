const readline = require('readline');
var redis = require('redis');
var client = redis.createClient();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var choose = function () {
    rl.question('1) new task\n2) delete task\n3) show tasks\n4) exit program \n', (answer) => {
        switch (answer) {
            case '1':
                enterTask();
                break;
            case '2':
                deleteTask();
                break;
            case '3':
                viewTasks();
                break;
            case '4':
                rl.close();
                process.exit();
                return;
            default:
                console.log('Wrong input');
                choose();
        }


    });
};


function enterTask() {
    rl.question('Enter task (leave empty to exit): ', (task) => {
        if (task != '') {
            rl.question('Enter description: ', (desc) => {
                client.hset('tasks', task, desc);
                enterTask();
            });
        } else choose();

    });
}

function deleteTask() {
    rl.question('Task to delete (leave empty to exit): ', (answer) => {
        if (answer != '') {
            client.hdel(['tasks', answer], function (error, result) {
                if (result == 0) {
                    console.log(`Task ${answer} not found.`);
                } else {
                    console.log(`Task ${answer} deleted.`);
                }
                deleteTask();
            });
        } else choose();
    });
}

function viewTasks() {
    client.hgetall('tasks', function (error, result) {
        console.log(result);
        choose();
    });
}

choose();
