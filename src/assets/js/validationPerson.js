function validation() {
  let validationCheck = false;
  let gen;
  let i = 0;
  //firstname check
  {
    var FirstNameCheck = document.getElementById("FirstName").value;
    FirstNameCheck = /\d/.test(FirstNameCheck);
    if (FirstNameCheck || document.getElementById("FirstName").value == "") {
      document.getElementById("FirstNameHelp").classList.remove("d-none");
    } else {
      document.getElementById("FirstNameHelp").classList.add("d-none");
      i++;
    }
  }
  //lastname check
  {
    var LastNameCheck = document.getElementById("LastName").value;
    LastNameCheck = /\d/.test(LastNameCheck);
    if (LastNameCheck || document.getElementById("LastName").value == "") {
      document.getElementById("LastNameHelp").classList.remove("d-none");
    } else {
      document.getElementById("LastNameHelp").classList.add("d-none");
      i++;
    }
  }
  //Email check
  {
    var emailCheck = document.getElementById("Mail").value;
    let char =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailCheck = char.test(emailCheck);
    if (!emailCheck || document.getElementById("Mail").value == "") {
      document.getElementById("MailHelp").classList.remove("d-none");
    } else {
      document.getElementById("MailHelp").classList.add("d-none");
      i++;
    }
  }
  //username check
  {
    if (localStorage.length == 0) {
      if (document.getElementById("UserName").value == "") {
        document.getElementById("UserNameHelp").classList.add("d-none");
        document.getElementById("UserNameHelp2").classList.remove("d-none");
      } else {
        document.getElementById("UserNameHelp2").classList.add("d-none");
        document.getElementById("UserNameHelp").classList.add("d-none");
        i++;
      }
    } else {
      for (let j = 0; j <= localStorage.length; j++) {
        let checkUser = document.getElementById("UserName").value;
        checkUser = localStorage.getItem(checkUser);
        checkUser = JSON.parse(checkUser);
        if (checkUser!=null) {
          document.getElementById("UserNameHelp2").classList.add("d-none");
          document.getElementById("UserNameHelp").classList.remove("d-none");
        } else if (document.getElementById("UserName").value == "") {
          document.getElementById("UserNameHelp").classList.add("d-none");
          document.getElementById("UserNameHelp2").classList.remove("d-none");
        } else {
          document.getElementById("UserNameHelp2").classList.add("d-none");
          document.getElementById("UserNameHelp").classList.add("d-none");
          i++;
          break;
        }
      }
    }
  }
  //Age check
  {
    var ageCheck = document.getElementById("Age").value;
    ageCheck2 = parseInt(ageCheck);
    if (
      ageCheck2 <= 10 ||
      ageCheck2 >= 60 ||
      document.getElementById("Age").value == "" ||
      isNaN(ageCheck2)
    ) {
      document.getElementById("AgeHelp").classList.remove("d-none");
    } else {
      document.getElementById("AgeHelp").classList.add("d-none");
      i++;
    }
  }
  //Gender Check
  {
    var checkgender = document.getElementById("Male");
    var checkgender2 = document.getElementById("Female");

    if (checkgender.checked) {
      document.getElementById("GenderHelp").classList.add("d-none");
      gen = document.getElementById("Male").value;
      i++;
    } else if (checkgender2.checked) {
      document.getElementById("GenderHelp").classList.add("d-none");
      gen = document.getElementById("Female").value;
      i++;
    } else {
      document.getElementById("GenderHelp").classList.remove("d-none");
    }
  }
  //password check
  {
    var passwordCheck = document.getElementById("Pass").value;
    var passwordConfrim = document.getElementById("PassCheck").value;
    if (
      document.getElementById("Pass").value == "" ||
      document.getElementById("PassCheck").value == ""
    ) {
      document.getElementById("passwordHelp").classList.add("d-none");
      document.getElementById("passwordHelp2").classList.remove("d-none");
    } else if (passwordConfrim != passwordCheck) {
      document.getElementById("passwordHelp2").classList.add("d-none");
      document.getElementById("passwordHelp").classList.remove("d-none");
    } else {
      document.getElementById("passwordHelp").classList.add("d-none");
      document.getElementById("passwordHelp2").classList.add("d-none");
      i++;
    }
  }
  //check all item
  {
    if (i == 7) {
      validationCheck = true;
      return true;
    }
  }
}
