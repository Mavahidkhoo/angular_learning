// let myList = [];
alert();
document.getElementById("#BtnSave").addEventListener("click", func22);
function func22(){
  alert("kiiif")
};
// document.getElementById("BtnShow").addEventListener("click", showFunc);
// document.getElementById("BtnGoLogin").addEventListener("click", function () {
//   location.href = "../index/login.html";
// });

// //save
// function arrFunc() {
  
//   if (validation()) {
//     let person = {
//       firstName: "",
//       lastName: "",
//       Email: "",
//       userName: "",
//       age: "",
//       gender: "",
//       passWord: "",
//       PassWordConfirm: "",
//     };
//     person.firstName = document.getElementById("FirstName").value;
//     person.lastName = document.getElementById("LastName").value;
//     person.Email = document.getElementById("Mail").value;
//     person.userName = document.getElementById("UserName").value;
//     person.age = document.getElementById("Age").value;
//     {
//       var checkgender = document.getElementById("Male");
//       var checkgender2 = document.getElementById("Female");
//       if (checkgender.checked) {
//         document.getElementById("GenderHelp").classList.add("d-none");
//         person.gender = document.getElementById("Male").value;
//       } else if (checkgender2.checked) {
//         document.getElementById("GenderHelp").classList.add("d-none");
//         person.gender = document.getElementById("Female").value;
//       } else {
//         document.getElementById("GenderHelp").classList.remove("d-none");
//       }
//     }
//     person.passWord = document.getElementById("Pass").value;
//     person.PassWordConfirm = document.getElementById("PassCheck").value;
//     myList.push(person);
//     localStorage.setItem(person.userName, JSON.stringify(person));
//     document.getElementById("FirstName").value = "";
//     document.getElementById("LastName").value = "";
//     document.getElementById("Mail").value = "";
//     document.getElementById("UserName").value = "";
//     document.getElementById("Age").value = "";
//     document.getElementById("Male").checked=false;
//     document.getElementById("Female").checked=false;
//     document.getElementById("Pass").value = "";
//     document.getElementById("PassCheck").value = "";
//     validationCheck = false;
//     setTimeout(() => {
//       alert("Save Successfully");
//     }, 100);
//   }
// }
// //show
// function showFunc() {
//   document.getElementById("ArrShow").innerHTML = "";
//   console.log(myList);
//   for (let i = 0; i <= myList.length; i++) {
//     $("#ArrShow").append(
//       `
//       <div>
//       Name: <span class="mr-2 text-primary">${myList[i].firstName}</span>
//       Family: <span class="mr-2 text-primary">${myList[i].lastName}</span>
//      Email: <span class="mr-2 text-primary">${myList[i].Email}</span>
//       UserName: <span class="mr-2 text-primary">${myList[i].userName}</span>
//       Age: <span class="mr-2 text-primary">${myList[i].age}</span>
//       Gender: <span class="mr-2 text-primary">${myList[i].gender}</span>
//       <hr>
//       </div>`
//     );
//   }
// }