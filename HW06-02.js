let firstName = prompt("What is your name?");
let gender = prompt("What is your gender?", "male/female");

if (gender === "male" || gender === "female") {
  if (gender === "male") {
    alert("ברוך הבא " + " " + firstName);
  } else {
    alert("ברוכה הבאה" + " " + firstName);
  }
} else {
  alert("Please enter your gender correctly!");
}
let email = prompt("What is your email?");
let subscribe = confirm("Would you like to subscribe to our newsletter?");
if (subscribe === true) {
  alert("Thank you for subscribing, your email was registered");
} else {
  alert("Your lost 😒!!");
}
let age = Number(prompt("What is your age?"));
if (!Number.isNaN(age)) {
  if (age >= 120) {
    alert("Hope you are in heaven 🙉");
  } else {
    if (age >= 95) {
      alert("keep strong and healthy");
    } else {
      if (age >= 70) {
        alert("Eat drink and be merry for tomorrow you may die ");
      } else {
        if (age >= 45) {
          alert("even if work is arduous the reward is guaranteed to come!");
        } else {
          if (age >= 20) {
            alert("what color is your bugatti, come on break the matrix");
          } else {
            if (age > 0) {
              alert("you shouldn't be online get off !!!");
            } else {
              if (age <= 0) {
                alert("you are yet to be born");
              }
            }
          }
        }
      }
    }
  }
} else {
  alert("enter a numeric character");
}
