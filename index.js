function increment() {
    var x = document.getElementById("number");
    x.textContent = parseInt(x.textContent) + 1;
}

function decrement() {
    var x = document.getElementById("number");
    x.textContent = parseInt(x.textContent) - 1;
}

function multiply() {
    var x = document.getElementById("number");
    x.textContent = parseInt(x.textContent) * 2;
}
function toggleImage() {
    var x = document.getElementById("changeimage");
    if (x.src.match("love.jpg")) {
        x.src = "happy.jpg";
    } else {
        x.src = "love.jpg";
    }
    x.classList.toggle("flip-horizontal");
}

function menuclick() {
        var x = document.getElementsByClassName("menuitems")[0];
        x.classList.toggle("menuitemsinv");
   }
 result1 =[]  
 result2=[]
 function blinkFunction() {
    var a = Math.floor(Math.random() * 4) + 1;
    var color;
    switch (a) {
        case 1:
            color = "red";
            result1.push(color);
            break;
        case 2:
            color = "blue";
            result1.push(color);
            break;
        case 3:
            color = "green";
            result1.push(color);
            break;
        case 4:
            color = "yellow";
            result1.push(color);
            break;
    }
    var x = document.getElementById(color);
    x.classList.add("blink");
    setTimeout(function () {
        x.classList.remove("blink");
    },400);
}
 function check()
 {
    console.log(result1);
    console.log(result2);
    for (var i = 0; i < result1.length; i++) {
        if(result1[i]===result2[i])
        {
            continue;
        }
        else{
            return false;
        }
   }
   console.log("true");
   return true;
}
var j=0;
function red(){
    result2.push("red");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="level"+"-"+j;
            result2=[];
            j=0;
            blinkFunction();
            
        }
        else
        {
            document.getElementById("result").innerHTML="you lost";
        }
    }
}
function yellow()
{
    result2.push("yellow");
    j++;
    if(j===result1.length)
    {
        
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="level"+"-"+j;
            result2=[];
            j=0;
            blinkFunction();
            
        }
        else
        {
            document.getElementById("result").innerHTML="you lost";
        }
    }
}
function green()
{
    result2.push("green");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="level"+"-" +j;
            result2=[];
            j=0;
            blinkFunction();
           
        }
        else
        {
            document.getElementById("result").innerHTML="you lost";
        }
    }
}
function blue()
{
    result2.push("blue");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="level"+"-" +j;
            result2=[];
            j=0;
            blinkFunction();
           
        }
        else
        {
            document.getElementById("result").innerHTML="you lost";
        }
    }

}
function start()
{
    result1=[]
    result2=[]
    j=0;
    document.getElementById("result").innerHTML="level-0";
    blinkFunction();

  
}