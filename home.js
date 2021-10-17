//fire localStorage() setup for first time use
// 
//local storage code
/*
const use = "localS"; //"localS || "fire"
function setup(){
    localStorage.setItem("clocksystema", '{"password":"a","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksystemb", '{"password":"b","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksystemc", '{"password":"c","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksystemd", '{"password":"d","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksysteme", '{"password":"e","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksystemf", '{"password":"f","lastaction":"clockout","clockins":[],"clockouts":[]}')
    localStorage.setItem("clocksystemg", '{"password":"g","lastaction":"clockout","clockins":[],"clockouts":[]}')
    //administer
    localStorage.setItem("clocksystemZZ", '{"password":"A","lastaction":"null"}')
}
//
function login(){
    let user = document.getElementById("username")
    let password = document.getElementById("password")
    if(user.value != "ZZ"){
        let time = new Date();
        let year = time.getFullYear();
        let mounth = time.getMonth() + 1; //getMouth returns 0-11
        let day = time.getDate();
        let hour = time.getHours() + 1;//getHours returns 0-23
        let minutes = time.getMinutes();//getMinutes() retuns 0-59
        let dat = localStorage.getItem("clocksystem" + user.value)
        let obj = JSON.parse(dat)
        if(password.value === obj.password){
            if(obj.lastaction === "clockout"){
                //stores time
                obj.clockins.push(year + ":" + mounth + ":" + day + ":"+ hour + ":" + minutes)
                obj.lastaction = "clockin";
                //stringifies obj to json than saves it
                let json = JSON.stringify(obj)
                localStorage.setItem("clocksystem" + user.value,json)
            } else {
                //stores time
                obj.clockouts.push(year + ":" + mounth + ":" + day + ":"+ hour + ":" + minutes)
                obj.lastaction = "clockout";
                //stringifies obj to json than saves it
                let json = JSON.stringify(obj)
                localStorage.setItem("clocksystem" + user.value,json)
            }
            loginchange()
        } else {
            alert("incorect password")
        }
    } else {
        let dat = localStorage.getItem("clocksystemZZ")
        let obj = JSON.parse(dat)
        if(password.value === obj.password){
            document.getElementById("login_page").style.display = "none";
            document.getElementById("adminpages").style.display = "block";
            displayLoginData()
        } else {
            alert("incorect password")
        }
    }
    password.value = null;
}
function tologinpage(){
    document.getElementById("adminpages").style.display = "none";
    document.getElementById("login_page").style.display = "block";
}
function loginchange(){
    let username = document.getElementById("username")
    let button = document.getElementById("mainbutton")
    let dat = localStorage.getItem("clocksystem" + username.value)
    let obj = JSON.parse(dat)
    if(obj.lastaction === "clockin"){
        button.innerHTML = "clockOut";
    } else if(obj.lastaction === "clockout") {
        button.innerHTML = "clockIn";
    } else {
        button.innerHTML = "login";
    }
}
//!!!!!!!--Work_On--!!!!!!!!!
function displayLoginData(){
    let table = document.getElementById("adminpages_logintable")
    let dat = localStorage.getItem("clocksystem" + document.getElementById("adminpages_username"))
    let obj = JSON.parse(dat)
    for(let i = 0; i <= obj.clockins.length; i++){
        table.innerHTML += "<tr><td>" + day + "</td><td>" + mounth + "</td><td>" + year +"</td><td>" + time + "</td><td>" + action + "</td></tr>";
    }
}

*/



