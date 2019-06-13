function getDateTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(getTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function getDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
}

function getDate() {
    var dt = new Date();
    document.getElementById("date").innerHTML = dt.toLocaleDateString();
}

function getDate2() {
    var dt = new Date();
    document.getElementById("date2").innerHTML = dt.toLocaleDateString();
}


function addPanel (title, who, where) { 

        //Create div for panel-info, panel-heading, panel-body, addInfo
        var panel_info = document.createElement("div");
        panel_info.className ="panel panel-info";
        var panel_heading = document.createElement("div");
        panel_heading.className="panel-heading";
        var panel_body = document.createElement("div");
        panel_body.className ="panel_body";
        var addInfo = document.createElement("div");
        addInfo.className="addInfo";

        //Build string for panel-body
        var strongWho = document.createElement("STRONG");
        strongWho.innerHTML = "Who: ";
        var strongWhere = document.createElement("STRONG");
        strongWhere.innerHTML = "Where: "
        var who = document.createTextNode(who + ", ");
        var where = document.createTextNode(where);
        addInfo.appendChild(strongWho);
        addInfo.appendChild(who);
        addInfo.appendChild(strongWhere);
        addInfo.appendChild(where);

        //Append childs to build one panel
        panel_body.appendChild(addInfo);
        var panel_title = document.createElement("h3");
        panel_title.className="panel-title";
        panel_title.innerHTML=title;
        panel_heading.appendChild(panel_title);
        panel_info.appendChild(panel_heading);
        panel_info.appendChild(panel_body);
        document.getElementById("schedule").appendChild(panel_info);
  }
