if (moment().format("dddd")==="Thursday" && moment().hour()>=10 && moment().hour()<17|| moment().format("dddd") ==="Friday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Monday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Tuesday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Wednesday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Saturday" && moment().hour()>=10 && moment().hour()<19 || moment().format("dddd") ==="Sunday" && moment().hour()>=10 && moment().hour()<19){
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

