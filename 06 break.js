var i = 100;
function foo() {
    bbb: try {
        console.log("Hi");
        return i++; // <-位置1：i++表达式将被执行 
    } finally {
        break bbb;
    }
    console.log("Here");
    return i; // <-位置2
}
console.log(foo())