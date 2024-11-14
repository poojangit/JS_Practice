var str = "morning hi"

function LastCharToUpper(str) {
    let ch = str.split('');
    for (let i = 0; i < ch.length; i++) {
        // if ((i === 0 && ch[i] !== ' ') || (ch[i] !== ' ' && (i === ch.length - 1 || ch[i + 1] === ' '))) {
        if ((i === ch.length - 1 || ch[i + 1] === ' ') && ch[i] !== ' ') {
            if (ch[i] >= 'a' && ch[i] <= 'z') {
                ch[i] = String.fromCharCode(ch[i].charCodeAt(0) - 32);
            } else if (ch[i] >= 'A' && ch[i] <= 'Z') {
                ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 32);
            }
        }
    }
    return ch.join('');
}
console.log(LastCharToUpper(str));