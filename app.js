//1
function revStr(str){
    let a = '';
    for (i = 0; i < str.length; i++){
        a += str[(str.length - 1) - i];
    }
    return a
}
console.log(revStr('привет'))

//2
    const getNumber = function () {
        let meaning = 0
        for (let i =0; i < arguments.length; i += 1){
            meaning += arguments[i];
        }
        return meaning / arguments.length;
}
console.log(getNumber(1, 3, 4, 5, 9, 12));