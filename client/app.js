function create(){
   
    const numb = document.getElementById("nbm")
    console.log(numb.value)
   
    if(numb.length >= 16){
        const dummyTxt = number;

const joy = dummyTxt.match(/.{1,4}/g);
console.log(joy.join(' '));
    }
    else{
        console.log("err")
    }


  
}


function nazw(){
    const name = document.getElementById("surn").value
    document.getElementById("name").innerHTML = name
    console.log(name)

 
}
function date(){
    const dates = document.getElementById("dates").value
    const date = new Date(dates);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const yeare = year[0] 
var twoDigitYear = year.toString().substr(-2);
console.log(yeare)


const withSlashes = [month, twoDigitYear].join('/');
console.log(withSlashes)
document.getElementById("data").innerHTML = withSlashes


}

function img(id){
   
    console.log(id)
    if(id==1){
        document.getElementById("karta").style.backgroundImage ="url('R.jfif')"
    }
    else if(id==2){
        document.getElementById("karta").style.backgroundImage ="url('th.jfif')"
    }
    

else{
    document.getElementById("karta").style.backgroundImage ="url('pobierz.jfif')"
    

}
}
