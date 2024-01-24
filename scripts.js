import {app} from './script.js';
console.log("welcome",app)
import {getDatabase,ref,set,get,child,remove} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
const db=getDatabase();
console.log(ref(db));
//set(ref(db,"users"),{name:"pallavi",rollno:1,branch:"cse"})
let name,rate,sno,village,gwgt,commisionpercent;
let bags,cuttings,netweight,totalamt,hamali,commision,totalcuttings,amt;
let addbtn=document.getElementById("addbtn");
let readbtn=document.getElementById("readbtn");
let weightbridge;
let gumasta;
function addstudent(){
    name=document.getElementById('name').value;
    rate=document.getElementById('rate').value;
    sno=document.getElementById('sno').value;
    village=document.getElementById('vlg').value;
    gwgt=document.getElementById('gwgt').value;
    commisionpercent=document.getElementById('Commission').value;
    bags=gwgt/70;
    cuttings=bags*1.5;
    netweight=gwgt-cuttings;
    hamali=bags*8;
    totalamt=netweight*rate;
     commision=totalamt*commisionpercent/100;
     weightbridge=60;
     gumasta=60;
     totalcuttings=hamali+weightbridge+gumasta+commision;
    amt=totalamt-totalcuttings;
   let date= document.getElementById("demo").innerHTML;
    set(ref(db,"users/"+sno),{name:name,rate:"Rs"+rate,sno:sno,village:village,grossweight:gwgt+"kg",commisionpercent:commisionpercent+"%",bags:bags,cuttings:"Rs"+cuttings,netweight:netweight+"kg",hamali:"Rs"+hamali,weighbridge:"Rs"+weightbridge,gumasta:"Rs"+gumasta,amt:"Rs"+amt,commision:"Rs"+commision,totalamt:"Rs"+totalamt,totalcuttings:"Rs"+totalcuttings})
    document.write("<h1 align=center>"+"SSSV RICE MILL"+"</h1>");
    document.write("<h3 align=center>"+"JUVVIGUDEM"+"</h3>");
    document.write("<h4 align=center>"+date+"</h4>");
    document.write("<h4 align=left>"+"Sno: "+sno+"</h4>"+"<h4 align=right>"+"Rate: "+rate+" Rs"+"</h4>"+"<hr>");
    document.write("<table><h4 align=left>"+"Name: "+name+"</h4>");
    document.write("<h4 align=left>"+"Village Name: "+village+"</h4>");
    document.write("<h4 align=left>"+"Gross Weight: "+gwgt+" kgs"+"</h4>");
    document.write("<h4 align=left>"+"Bags: "+bags+"</h4>");
    document.write("<h4 align=left>"+"Cuttings: "+cuttings.toFixed(4)+"wt"+"</h4>");
    document.write("<h4 align=left>"+"Net Weight: "+netweight+" kgs"+"</h4>");
    document.write("<h4 align=left>"+"Rate: "+rate+" Rs"+"</h4>");
    document.write(`<h4 align=left>Total Amount: ${totalamt} Rs</h4></table>`);
    document.write("<table><h4 align=right>"+"Hamali        : "+hamali+" Rs"+"</h4>");
    document.write("<h4 align=right>"+"Weigh Bridge  : "+weightbridge +" Rs"+"</h4>");
    document.write("<h4 align=right>"+"Gumasta       : "+gumasta +" Rs"+"</h4>");
    document.write("<h4 align=right>"+"Commision     : "+commision +" Rs"+"</h4>");
    document.write("<h4 align=right>"+"Total Cuttings: "+totalcuttings +" Rs"+"</h4></table>");
    document.write("<h3 align=center>"+"Amount: "+amt +" Rs"+"</h3>");
}
function viewstudent(){

get(child(ref(db),"users")).then((snapshot)=>{
     let arr=Object.values(snapshot.val())
    // let cont=document.getElementById("cont")
    sno=document.getElementById('sno').value;
    //console.log(arr[0]);
    document.write("<h1 align=center>"+"SSSV RICE MILL"+"</h1>");
    document.write("<h3 align=center>"+"JUVVIGUDEM"+"</h3>");

       console.log("Name: "+arr[sno-1].name);
        console.log("Rate: Rs"+arr[sno-1].rate);


    })
   
}



addbtn.addEventListener("click",addstudent);
readbtn.addEventListener("click",viewstudent);



//arr.forEach(ele=>{
        //document.write("Name: "+ele.name+"  Rollno:"+ele.rollno+"  Branch:"+ele.branch+"<br><br><hr>");
      //  cont.innerHTML+=`Name: ${ele.name} &nbsp Rollno: ${ele.rollno} &nbsp  Branch: ${ele.branch} <br>`
      
