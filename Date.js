function clock()
{
 var date=new Date();
 var hh=date.getHours();``
 var mm=date.getSeconds();
 var ss=date.getMinutes();
 var day=date.getDay();
 var dd=date.getDate();
 var mo=date.getMonth();
 var yy=date.getFullYear();
 var am_pm="AM"
 if(hh>=12)
 {
    am_pm="pm"
    if(hh>=13){
        hh-=12;
    }
 }  
 if(hh==0)
 {
    hh=12;
 } 
 var fullTime= `${hh}:${mm}:${ss}:${am_pm}`
 document.getElementById("Time").innerHTML=fullTime;
 if(mo==0)
 {
    mo="january"
 }
 else if(mo==1)
 {
    mo="february"
 }
 else if(mo==3)
 {
    mo="March"
 }
 else if(mo==4)
 {
    mo="April"
 }
 else if(mo==5)
 {
    mo="May"
}
else if(mo==6)
{
    mo="June"
}
else if(mo==7)
{
    mo="Julay"
}
else if(mo==8)
{
    mo="August"
}
else if(mo==9)
{
    mo="September"
}
else if(mo==10)
{
    mo="October"
}
else if(mo==11)
{
    mo="November"
}
else if(mo==12)
{
    mo="December"
}
var fulldate=`${dd}/${mo}/${yy}`
document.getElementById("Date").innerHTML=fulldate;
switch(day)
{
    case 0:
        day="Sunday"
        document.body.style.backgroundImage="url(c.jpg)"
        break;
        case 1:
            day="Monday"
            document.body.style.backgroundImage="url(D.jpeg)"
            break; 
            case 2:
                day="Tuesday"
                document.body.style.backgroundImage="url(E.jpg)"
                break;
                case 3:
                    day="Wednesday"
                    document.body.style.backgroundImage="url(F.jpeg)"
                   break; 
                   case 4:
                    day="Thursday"
                    document.body.style.backgroundImage="url(G.jpeg)"
                     break; 
                     case 5:
                        day="Friday"
                     document.body.style.backgroundImage="url(H.jpeg)"
                     break;
                     case 6:
                        day="Saturday"
                        document.body.style.backgroundImage="url(I.jpeg)"
                         break;
}
document.getElementById("Day").innerHTML=day;
document.getElementById("sec").innerHTML=ss;
var updatethetime=setTimeout(clock,1000)
if(hh==7)
{
    document.getElementById("message").innerHTML="Good morning"
}
else if(hh==12){
    document.getElementById("message").innerHTML="Good Afternoon"
}
else {
    document.getElementById("message").innerHTML="Good Night"
}
}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6&&hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bgVid").src="AS(3).mp4"
    }
    else if(hh>12&&hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgVid").src="AS(1).mp4"
        document.getElementById("bgVid").style.bottom="-100px"
        document.getElementById("bgVid").style.width="100%"

    }
    else if(hh>16&&hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgVid").src="EV.mp4"
        document.getElementById("bgVid").style.bottom="-100px"
        document.getElementById("bgVid").style.width="100%"
    }
    else 
    {
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("GreetMessage").style.color="white"
        document.getElementById("bgVid").src="AS(2).mp4"
        document.getElementById("bgVid").style.bottom="-100px"
        document.getElementById("bgVid").style.width="100%"
    }
}
greet()
function closeWind()
    {
        document.getElementById("greet").style.display="none"
    }
var a=setTimeout(closeWind,5000)