const rotateSign = () => {
    console.log('hello')
}

if (moment().format("dddd")==="Thursday" && moment().hour()>=10 && moment().hour()<17|| moment().format("dddd") ==="Friday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Monday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Tuesday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Wednesday" && moment().hour()>=10 && moment().hour()<17 || moment().format("dddd") ==="Saturday" && moment().hour()>=10 && moment().hour()<19 || moment().format("dddd") ==="Sunday" && moment().hour()>=10 && moment().hour()<19){
    console.log('we are open!');
    const openSign = document.createElement("img");
    openSign.setAttribute("src","assets/images/PikPng.com_open-sign-png_659101.png");
    openSign.setAttribute("width", "40%");
    // openSign.setAttribute("opacity", "0.5");
    document.querySelector("#currentStatus").append(openSign);
    openSign.setAttribute("id","openSign");
    openSign.addEventListener("mouseover", rotateSign());
}else{
    console.log('we are closed :(');
    const closedSign = document.createElement("img");
    closedSign.setAttribute("src","assets/images/PikPng.com_leaf-vinayagar-png_5052591.png");
    closedSign.setAttribute("width", "40%");
    // closedSign.setAttribute("opacity", "0.5");
    document.querySelector("#currentStatus").append(closedSign);
    closedSign.setAttribute("id", "closedSign");
    closedSign.addEventListener("mouseover", rotateSign());
}

