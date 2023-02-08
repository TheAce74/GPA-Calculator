window.onload = () => {
  alert("Thanks for using this GPA Calculator\n\nMade with 💖 by The Ace😎");
};

const more = document.querySelector(".more");
const grade = document.getElementsByClassName("grade");
const credit = document.getElementsByClassName("credit");
const grid = document.querySelector(".grid");
const course = document.getElementsByClassName("course");
const screen = document.getElementById("screen");

let i = 0;
let CU = 0;
let GP = 0;
let TQP = 0;
let TCU = 0;

more.addEventListener("click", () => {
  if (
    course[i] !== " " &&
    credit[i].value !== "selectCredit" &&
    grade[i].value !== "selectGrade"
  ) {
    if (course[i].value.length === 7) {
      //previous courses
      course[i].disabled = "true";
      credit[i].disabled = "true";
      grade[i].disabled = "true";

      //new course fields
      let div1 = document.createElement("div");
      let input1 = document.createElement("input");
      input1.type = "text";
      input1.placeholder = "Enter Course";
      input1.name = "course";
      input1.className = "course";
      div1.appendChild(input1);
      div1.className = "card";
      grid.appendChild(div1);

      //new credit fields
      let div2 = document.createElement("div");
      let input2 = document.createElement("select");
      let cred0 = document.createElement("option");
      cred0.textContent = "Credit";
      cred0.value = "selectCredit";
      cred0.selected = "true";
      cred0.disabled = "true";
      let cred1 = document.createElement("option");
      cred1.textContent = "1";
      cred1.value = "1";
      let cred2 = document.createElement("option");
      cred2.textContent = "2";
      cred2.value = "2";
      let cred3 = document.createElement("option");
      cred3.textContent = "3";
      cred3.value = "3";
      let cred4 = document.createElement("option");
      cred4.textContent = "4";
      cred4.value = "4";
      input2.name = "credit";
      input2.className = "credit";
      input2.appendChild(cred0);
      input2.appendChild(cred1);
      input2.appendChild(cred2);
      input2.appendChild(cred3);
      input2.appendChild(cred4);
      div2.appendChild(input2);
      div2.className = "card";
      grid.appendChild(div2);

      //new grade fields
      let div3 = document.createElement("div");
      let input3 = document.createElement("select");
      let grad0 = document.createElement("option");
      grad0.textContent = "Grade";
      grad0.value = "selectGrade";
      grad0.selected = "true";
      grad0.disabled = "true";
      let grad1 = document.createElement("option");
      grad1.textContent = "A";
      grad1.value = "5";
      let grad2 = document.createElement("option");
      grad2.textContent = "B";
      grad2.value = "4";
      let grad3 = document.createElement("option");
      grad3.textContent = "C";
      grad3.value = "3";
      let grad4 = document.createElement("option");
      grad4.textContent = "D";
      grad4.value = "2";
      let grad5 = document.createElement("option");
      grad5.textContent = "E";
      grad5.value = "1";
      let grad6 = document.createElement("option");
      grad6.textContent = "F";
      grad6.value = "0";
      input3.name = "grade";
      input3.className = "grade";
      input3.appendChild(grad0);
      input3.appendChild(grad1);
      input3.appendChild(grad2);
      input3.appendChild(grad3);
      input3.appendChild(grad4);
      input3.appendChild(grad5);
      input3.appendChild(grad6);
      div3.appendChild(input3);
      div3.className = "card";
      grid.appendChild(div3);

      function getGPA() {
        CU = Number(credit[i].value);
        GP = Number(grade[i].value);
        let QP = CU * GP;
        TQP += QP;
        TCU += CU;
        let GPA = TQP / TCU;
        screen.value = GPA.toFixed(2);
      }
      getGPA();
      //iterating through the available fields
      i++;
    } else {
      alert("Course name must be 7 characters long");
    }
  } else {
    alert("You must indicate the full details of a course📋");
  }
});
