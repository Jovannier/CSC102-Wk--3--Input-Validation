function checkCreds(){
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("fname").value;
    console.log("The first name was inputted as " + firstName);
    //working on inputting last name
    lastName = document.getElementById("lname").value;
    console.log("The last name was inputted as " + lastName);
    //working on inputting zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);
    //working on both first and last name
    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);
    //working on inputting full name
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");
    //working on inputting zipcode
    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //things to check for... fullNameLength is less than 20 characters,
    // zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
    } else {
        alert("User credinetals passed, welcome to the site, " + fullName);
    }
}