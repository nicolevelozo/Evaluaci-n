const students= [];

const form = document.getElementById("studentForm");
const tabletBody = document.querySelector("#studentTable tbody");
const averageDisplay = document.getElementById("averageDisplay");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput= document.getElementById("name");
  const lastNameInput= document.getElementById("lastName");
  const gradeInput= document.getElementById("grade");

  const name = nameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const grade = parseFloat(gradeInput.value);



  if(!name || !lastName || isNaN(grade) || grade < 1 || grade> 7){
    alert("Error al Ingresar los datos todos los campos deben estar Completados")
    return; 
  }
  
  const student={ name,lastName,grade };
   students.push(student)
   addStudentToTable(student);
   updateAverage();
  form.reset();
});
 
  function addStudentToTable(student) {
    const row=document.createElement("tr");
    row.innerHTML=`
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade.toFixed(1)}</td>
   `;
    tabletBody.appendChild(row);
  }
 
  function updateAverage() {
    const total = students.reduce((sum, s) => sum + s.grade, 0);
    const average = total / students.length;
    averageDisplay.textContent = `Promedio: ${average.toFixed(2)}`;
}

document.getElementById("name").oninvalid = function () {
  this.setCustomValidity("Por favor ingresa el nombre.");
};
document.getElementById("name").oninput = function () {
  this.setCustomValidity("");
};

document.getElementById("lastName").oninvalid = function () {
  this.setCustomValidity("Por favor ingresa el apellido.");
};
document.getElementById("lastName").oninput = function () {
  this.setCustomValidity("");
};

document.getElementById("grade").oninvalid = function () {
  this.setCustomValidity("La nota debe estar entre 1.0 y 7.0.");
};
document.getElementById("grade").oninput = function () {
  this.setCustomValidity("");
};