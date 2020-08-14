for (let i = 1; i <= 4; i++) {
    var str = "";
    for (let j = 3; j >= i; j--) {
        str += "\xa0";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += '*';
    }
    console.log(str);
}
for (let i = 3; i > 0; i--) {
    var str = "";
    for (let j = 3; j >= i; j--) {
        str += "\xa0"
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += '*';
    }
    console.log(str);
}