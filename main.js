var data = document.getElementById('input_text');

function addData(){
    
var string = data.value;
console.log(string);
var length = string.length;
var how_many_symble=0, how_many_letter =0, how_many_words=1, how_many_sentence=0,first_letter,last_letter;
var first_word="",first_sentence="",last_word="",last_sentence="";
var mid_letter="",mid_sentence="",mid_word="",small_letter=0,capital_letter=0, text_size=0;


// how many letter
for(let i=0; i<length; i++){
    
    //last letter
    last_letter = string.charAt(length-1);
    if(last_letter == "." || last_letter == "?" || last_letter == "!"){
        last_letter = string.charAt(length-2);
    }
    

    //how many words
    if(string.charAt(i)==" "){
        how_many_words ++;
        continue;
    }

    //how many setence
    if(string.charAt(i) == "." || string.charAt(i) == "?" || string.charAt(i) == "!"){
        how_many_sentence ++;
    }

    ////how many symble
    if(string.charAt(i)=="." || string.charAt(i)=="," || string.charAt(i)=="/" || string.charAt(i)=="?" || string.charAt(i)=="<" || string.charAt(i)==">" || string.charAt(i)=="[" || string.charAt(i)=="]" || string.charAt(i)=="{" || string.charAt(i)=="}" || string.charAt(i)=="|" || string.charAt(i)=="=" || string.charAt(i)=="-" || string.charAt(i)==")" || string.charAt(i)=="(" || string.charAt(i)=="_" || string.charAt(i)=="+" || string.charAt(i)=="*" || string.charAt(i)=="&" || string.charAt(i)=="^" || string.charAt(i)=="%" || string.charAt(i)=="$" || string.charAt(i)=="#" || string.charAt(i)=="@" || string.charAt(i)=="!" || string.charAt(i)=="`" || string.charAt(i)=="~" || string.charAt(i)=="'" || string.charAt(i)=='"'){
        how_many_symble ++;
        continue;
    }

    // how many letter
    how_many_letter ++;

    //first letter
    first_letter = string.charAt(0);
}
// first sentence
for(let i=0; i<length; i++){
    if(string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    first_sentence += string.charAt(i);
}


//first word
for(let i=0; i<length; i++){
    if(string.charAt(i) == " "){
        break;
    }
    first_word += string.charAt(i);
}


//last word
var count=0;
for(let i=length-1; i>=0; i--){
    
    if(string.charAt(i) == " "){
        break;
    }
    count++;
}
for(let i=length-count; i<length; i++){
    last_word += string.charAt(i);
}


//last sentence
var count2=0;
for(let i=length-2; i>=0; i--){
    if(string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    count2++;
}


//if last letter is not  a symble.
if(last_letter != "." || last_letter != "!" || last_letter != "?"){
    count2=0;
    for(let i=length-1; i>=0; i--){
        if(string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
            break;
        }
        count2++;
    }
}

for(let i=length-count2; i<length; i++){
    last_sentence += string.charAt(i);
}


//mid letter
mid_letter = string.charAt(length/2);


//mid word
var value = Math.floor(length/2);
var mw_val;
for(let i=value; i>=0; i--){
    if(string.charAt(i) == " " || string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    mw_val = i;
}
for(let i=mw_val; i<length; i++){
    if(string.charAt(i) == " " || string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    mid_word += string.charAt(i);
}


// mid sentence
var ms_val
for(let i=value; i>=0; i--){
    if(string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    ms_val = i;
}
for(let i=ms_val; i<length; i++){
    if(string.charAt(i) == "." || string.charAt(i) == "!" || string.charAt(i) == "?"){
        break;
    }
    mid_sentence += string.charAt(i);
}


// text size
text_size = length*1+" Byte";
// size.insertAdjacentHTML("beforeend",text_size);

// how many capital letter and small letter

for(let i=0; i<string.length; i++){
    if(string.charAt(i) >= 'A' && string.charAt(i) <='Z'){
        capital_letter++;
    }else if(string.charAt(i) >= 'a' && string.charAt(i) <= 'z'){
        small_letter++;
    }
}



// print value in html     

var htmlsize = '<p id="size">'+text_size+'</p>'
size.insertAdjacentHTML("beforeend", htmlsize);


var html2 = '<p id="tletter">'+how_many_letter+'</p>'
tletter.insertAdjacentHTML("beforeend", html2);


var html3 = '<p id="tword">'+how_many_words+'</p>'
tword.insertAdjacentHTML("beforeend", html3);


var html4 = '<p id="tsentence">'+how_many_sentence+'</p>'
tsentence.insertAdjacentHTML("beforeend", html4);


var html5 = '<p id="tsymble">'+how_many_symble+'</p>'
tsymble.insertAdjacentHTML("beforeend", html5);


var html6 = '<p id="fletter">'+first_letter+'</p>'
fletter.insertAdjacentHTML("beforeend", html6);


var html7 = '<p id="fword">'+first_word+'</p>'
fword.insertAdjacentHTML("beforeend", html7);



var html8 = '<p id="fsentence">'+first_sentence+'</p>'
fsentence.insertAdjacentHTML("beforeend", html8);



var html9 = '<p id="mletter">'+mid_letter+'</p>'
mletter.insertAdjacentHTML("beforeend", html9);


var html10 = '<p id="mword">'+mid_word+'</p>'
mword.insertAdjacentHTML("beforeend", html10);


var html11 = '<p id="msentence">'+mid_sentence+'</p>'
msentence.insertAdjacentHTML("beforeend", html11);



var html12 = '<p id="lletter">'+last_letter+'</p>'
lletter.insertAdjacentHTML("beforeend", html12);


var html13 = '<p id="lword">'+last_word+'</p>'
lword.insertAdjacentHTML("beforeend", html13);


var html14 = '<p id="lsentence">'+last_sentence+'</p>'
lsentence.insertAdjacentHTML("beforeend", html14);



var html15 = '<p id="clitter">'+capital_letter+'</p>'
clitter.insertAdjacentHTML("beforeend", html15);


var html16 = '<p id="sletter">'+small_letter+'</p>'
sletter.insertAdjacentHTML("beforeend", html16);

    // show.insertAdjacentHTML("beforeend",inputdata);
    
}
