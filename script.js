

// function Calculator() {
//     let num1 = document.getElementById("firstName").value;
//     let num2 = document.getElementById("secondName").value;
//     let select = document.getElementById("select").value;
//     if (select == "+") {
//         var res = parseInt(num1) + parseInt(num2);
//     } else if (select == "-") {
//         var res = parseInt(num1) - parseInt(num2);
//     } else if (select == "*") {
//         var res = parseInt(num1) * parseInt(num2);
//     } else if (select == "/") {
//         var res = parseInt(num1) / parseInt(num2);
//     }
//     document.getElementById("result").value = res;



// }




function calculate(){
    const num1=document.getElementById("firstnumber").value ;
    const num2=document.getElementById("secondnumber").value ;
    const selector =document.getElementById("selector").value ;
    if( selector== "+"){
        var res=parseInt(num1 ) + parseInt(num2);

    }else if(selector=="-" ){
        var res=parseInt(num1 ) - parseInt(num2);

    }
    else if(selector== "*"){
        var res=parseInt(num1 ) * parseInt(num2);

    }
    else if(selector== "/" ){
        var res=parseInt(num1 ) / parseInt(num2);

    }
    document.getElementById("result").value=res;
    


}