
let workmy = parseInt(prompt("Enter to your example: "));

if(workmy===1){

    let string1 = prompt("Enter text 1: ");
    let string2 = prompt("Enter text 2: ");
    
    
    function compareString(string1,string2){
        if(string1.length>string2.length){
            console.log(1);
            alert("text 1 > text 2");
        }
        else if(string1.length<string2.length){
            console.log(-1);
            alert("text 1 < text 2");
        }
        else if(string1.length===string2.length){
            console.log(0);
            alert("text 1 = text 2");
        }
    }
    compareString(string1,string2);
}
else if(workmy===2){
let text = prompt("Enter to your text: ");

function Registr(text){
    let UpToStr=text.substring(0,1);
    let newtext = UpToStr.toUpperCase() + text.substring(1,text.length);
    alert(newtext);
}
Registr(text);
    
}
else if(workmy===3){
    // const glassnye = 'а, е, ё, и, о, у, ы, э, ю, я';
    let texg = prompt("Enter your text: ");
    function Find(texg){
        const glassnye = 'а, е, ё, и, о, у, ы, э, ю, я';
        let arrg = glassnye.split(', ')
        let con = 0;
        for(let i = 0; i<=texg.length;i++){
            for(let j = 0; j<=arrg.length;j++){

                if(texg[i] === arrg[j]){
                    let cons = con++;
                    if(cons>0){
                        console.log(cons);
                        console.log("");
                    }
                    console.log(texg[i]);
                }
            }
        }
        // console.log(arrg);
    }
    Find(texg);
}
else {
    alert("This to work you haven't!");
}