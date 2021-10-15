console.log(moment().hour())
if (moment().format("dddd")==="Thursday" && moment().hour()>=10 && moment().hour()<17|| moment().format("dddd") ==="Friday" && moment().hour()>=10 && moment().hour()<17){
    console.log('we are open!');
    const openSign = document.createElement("p");
    openSign.textContent = "We are now open !!";
    document.querySelector("#hours").append(openSign);
}else{
    console.log('we are closed :(');
    const closedSign = document.createElement("p");
    closedSign.textContent = "We are now closed :(";
    document.querySelector("#hours").append(closedSign);
}