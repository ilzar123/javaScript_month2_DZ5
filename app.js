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
    const numbers = [1, 2, 3, 4, 6, 8, 12];
    const get = (number) => {
        let meaning = 0
        for (let i =0; i < number.length; i += 1){
            meaning += number[i];
        }
        return meaning / number.length;
}
console.log(get(numbers));