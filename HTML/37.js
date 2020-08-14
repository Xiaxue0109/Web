var output = "";
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        output += i + " * " + j + " = " + i * j + "\xa0\xa0\xa0\xa0";
    }
    console.log(output);
    output = "";
}