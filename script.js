console.log("js is linked successfully");
//to get the form and name input
const form=document.getElementById("survey-form");
const nameInput=document.getElementById("name");
//listen to form submission
form.addEventListener("submit",function(event) {//tells js to run code when you click submit
    event.preventDefault();//stops the form from refreshing the page
//check if the name is empty
if(nameInput.value.trim()=="") {
    alert("Please enter your name");
}else{
    alert("Thank you for filling the form,"+nameInput.value+"!");
}
});

/*
let name=" John ";
console.log(name);
console.log(name.trim());
let onlySpace=" ";
console.log(onlySpace.trim())*/