let urlBar = window.location.href;
let username = urlBar.split("?");
personInfo = localStorage.getItem(username[1]);
personInfo = JSON.parse(personInfo);
document.getElementById("FirstName").value = personInfo.firstName;
document.getElementById("LastName").value = personInfo.lastName;
document.getElementById("Mail").value = personInfo.Email;
document.getElementById("UserName").value = personInfo.userName;
document.getElementById("Age").value = personInfo.age;
if (personInfo.gender == "Male") {
  document.getElementById("Male").checked = true;
} else {
  document.getElementById("Female").checked = true;
}
document.getElementById("Pass").value = personInfo.passWord;
document.getElementById("PassCheck").value = personInfo.passWord;
document.getElementById("Edit").addEventListener("click", edit);
document.getElementById("BtnSave").addEventListener("click", arrFunc);

function edit() {
  document.getElementById("FirstName").removeAttribute("disabled");
  document.getElementById("LastName").removeAttribute("disabled");
  document.getElementById("Mail").removeAttribute("disabled");
  document.getElementById("UserName").removeAttribute("disabled");
  document.getElementById("Age").removeAttribute("disabled");
  document.getElementById("Male").removeAttribute("disabled");
  document.getElementById("Female").removeAttribute("disabled");
  document.getElementById("Pass").removeAttribute("disabled");
  document.getElementById("PassCheck").removeAttribute("disabled");
  document.getElementById("BtnSave").classList.remove("d-none");
}
function arrFunc() {
  validation();
  if (validation()) {
    localStorage.removeItem(username[1]);
    let person = {
      firstName: "",
      lastName: "",
      Email: "",
      userName: "",
      age: "",
      gender: "",
      passWord: "",
      PassWordConfirm: "",
    };
    person.firstName = document.getElementById("FirstName").value;
    person.lastName = document.getElementById("LastName").value;
    person.Email = document.getElementById("Mail").value;
    person.userName = document.getElementById("UserName").value;
    person.age = document.getElementById("Age").value;
    {
      var checkgender = document.getElementById("Male");
      var checkgender2 = document.getElementById("Female");
      if (checkgender.checked) {
        document.getElementById("GenderHelp").classList.add("d-none");
        person.gender = document.getElementById("Male").value;
      } else if (checkgender2.checked) {
        document.getElementById("GenderHelp").classList.add("d-none");
        person.gender = document.getElementById("Female").value;
      } else {
        document.getElementById("GenderHelp").classList.remove("d-none");
      }
    }
    person.passWord = document.getElementById("Pass").value;
    person.PassWordConfirm = document.getElementById("PassCheck").value;
    localStorage.setItem(person.userName, JSON.stringify(person));
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Mail").value = "";
    document.getElementById("UserName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Male").checked = false;
    document.getElementById("Female").checked = false;
    document.getElementById("Pass").value = "";
    document.getElementById("PassCheck").value = "";
    validationCheck = false;
    setTimeout(() => {
      alert("Save Successfully");
      window.location = "../index/login.html";
    }, 100);
  }
}

