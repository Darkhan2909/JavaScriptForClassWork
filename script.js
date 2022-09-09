let string = 'Scriptonit - "Cepi" \\ Maks Korj - "Maloletka"';
document.write('<pre>');
document.write(string);
document.write('<pre>');
console.log(string);
document.write(`${string}`);










let array = ['1','2','3'];
let newArray = array;
console.log(array);
newArray.push('4');
console.log(array);
console.log(newArray);




let strings = 'Moya stroka';
console.log(strings);

let newStrings = strings;
console.log(strings);

newStrings += 'ne izmemilos!';
console.log(newStrings);




// let array = ['1','2','3'];
// let newArray = [...array];
// console.log(array);
// newArray.push('4');
// console.log(array);
// console.log(newArray);







let str = "slovo";
let UpeStr = str.toUpperCase();
console.log(UpeStr);


let lowStr = UpeStr.toLocaleLowerCase();
console.log(lowStr)




let text = 'sit amet consectetur adipisicing elit. Quae, asperiores iusto excepturi obcaecati repellendus animi repudiandae magnam corrupti accusantium, dignissimos suscipit veritatis ab voluptatibus accusamus impedit molestias autem nam totam!'
console.log(text.substring(5));




// let text = 'sit amet consectetur adipisicing elit. Quae, asperiores iusto excepturi obcaecati repellendus animi repudiandae magnam corrupti accusantium, dignissimos suscipit veritatis ab voluptatibus accusamus impedit molestias autem nam totam!'
console.log(text.substring(5,9));




// let text = 'sit amet consectetur adipisicing elit. Quae, asperiores iusto excepturi obcaecati repellendus animi repudiandae magnam corrupti accusantium, dignissimos suscipit veritatis ab voluptatibus accusamus impedit molestias autem nam totam!'
console.log(text.slice(-4));



// let text = 'sit amet consectetur adipisicing elit. Quae, asperiores iusto excepturi obcaecati repellendus animi repudiandae magnam corrupti accusantium, dignissimos suscipit veritatis ab voluptatibus accusamus impedit molestias autem nam totam!'
console.log(text.split(' '));








let texts = 'sit, amet, consectetur, adipisicing, elit,. Quae,, asperiores, iusto, excepturi, obcaecati, repellendus animi repudiandae magnam corrupti accusantium, dignissimos suscipit veritatis ab voluptatibus accusamus impedit molestias autem nam totam!'
console.log(texts.split(', '));









let stringnew = '    + 7 (777) 7777- 77 -77    ';
let cleanString = stringnew.trim();
console.log(stringnew);
console.log(cleanString);

let stringtext = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
console.log(stringtext.repeat(5));
console.log(stringtext.repeat(1));