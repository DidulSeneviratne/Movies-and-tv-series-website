//get values of textfields, textareas and selectarea and assign to the variables and validates it full fill or not
document.getElementById ("full").style.display = "none";
function view(){
    let fname = document.forms["query-form"]["fname"].value;
    if (fname == "") {
      alert("First-Name must be filled out");
      return false;
    }
    let lname = document.forms["query-form"]["lname"].value;
    if (lname == "") {
      alert("Last-Name must be filled out");
      return false;
    }
    //validate the e-mail whether it is correct or wrong
    let email = document.forms["query-form"]["e-mail"].value;
    if (email == "") {
      alert("E-mail must be filled out");
      return false;
    }else if(email.includes("@")==false){
        alert("Enter valid email");
        return false;
    }else if(email.includes(".")==false){
        alert("Enter valid email");
        return false;
    }
    let querytype = document.forms["query-form"]["query-type"].value;
    if (querytype == "") {
      alert("Query-Type must be filled out");
      return false;
    }
    let querydetail = document.forms["query-form"]["query-detail"].value;
    if (querydetail == "") {
      alert("Query-Detail must be filled out");
      return false;
    }
    //if all are fill display the hidden one
    if(fname != "" && lname != "" && email != "" && querytype != "" && querydetail != ""){
        document.getElementById ("full").style.display = "block";
        document.getElementById("first").innerHTML=fname;
        document.getElementById("last").innerHTML=lname;
        document.getElementById("mail").innerHTML=email;
        document.getElementById("tquery").innerHTML=querytype;
        document.getElementById("dquery").innerHTML=querydetail;
    } 
}
//sumbit the query to form action mail and go back to first view of the page
function submit(){
    document.getElementById("query-form").submit();
    alert("Successfully submitted!");
    document.getElementById("full").style.display = "none";
    document.forms["query-form"]["fname"].innerHTML = "";
    

}
//back to the normal view
function edit(){
    document.getElementById ("full").style.display = "none";

}


