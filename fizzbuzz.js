let output = '';
for (let i = 0; i <= 100; i++){
      output += (i % 3 == 0 ? 'Fizz' : '');
      output += (i % 5 == 0 ? 'Buzz' : '');
      output += (i % 5 != 0 && i % 3 != 0 ? i : '');
      output += ' '
    
    };
console.log(output);
process.exit();
