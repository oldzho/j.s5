const text = "Здраствуйте"
const text2 = "Как дела"


var aidana = function (text) {
    let sum = ''
    for(let i = text.length -1; i > -1 ; i--){
        sum += text[i];
    }
    return sum
}

console.log(aidana(text));

console.log(aidana(text2));


function getAllNum(...args) {
    let result = 0
    for(let i = 0; i < args.length; i++){
        result += args[i]
    }
    let sum = result / args.length
return sum
}

console.log(getAllNum(123456789, 98765432))