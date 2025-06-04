const students = [];
let editIndex = -1; 

const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody"); 
const averageDisplay = document.getElementById("averageDisplay");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("lastName");
  const gradeInput = document.getElementById("grade");

  const name = nameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const grade = parseFloat(gradeInput.value);

  if (!name || !lastName || isNaN(grade) || grade < 1 || grade > 7) {
    alert("Error al ingresar los datos. Todos los campos deben estar completados y la nota debe estar entre 1 y 7.");
    return;
  }

  if (editIndex === -1) {
    const student = { name, lastName, grade };
    students.push(student);
    addStudentToTable(student);
  } else {
    students[editIndex].name = name;
    students[editIndex].lastName = lastName;
    students[editIndex].grade = grade;
    updateTable();
    editIndex = -1;
  }

  updateAverage();
  form.reset();
});

function addStudentToTable(student) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade.toFixed(1)}</td>
    <td>
      <button class="edit">Editar</button>
      <button class="delete">Eliminar</button>
    </td>
  `;

  const rowIndex = students.indexOf(student);

  row.querySelector(".delete").addEventListener("click", function () {
    deleteStudent(student, row);
  });

  row.querySelector(".edit").addEventListener("click", function () {
    loadStudentIntoForm(student, rowIndex);
  });

  tableBody.appendChild(row);
}

function deleteStudent(student, row) {
  const index = students.indexOf(student);
  if (index > -1) {
    students.splice(index, 1);
    row.remove();
    updateAverage(); 
  }
}

function loadStudentIntoForm(student, index) {
  document.getElementById("name").value = student.name;
  document.getElementById("lastName").value = student.lastName;
  document.getElementById("grade").value = student.grade;
  editIndex = index;
}

function loadStudentIntoForm(student, index) {
  document.getElementById("Mostrar")
  const estudiantes=document("Total Estudiantes");
  let total= estudiantes.length;
  let debenExamen= 0;
  let eximidos= 0;
  
  
  estudiantes.forEach(est=> {
  const nota= parseFloat(est.getAttribute("nota"));
  if (nota> 5.0 && 6.0) {
    debenExamen++;
    } else if (nota>= 6.0);
    eximidos++;
  });

}
function updateTable() {
  tableBody.innerHTML = "";
  students.forEach(student => {
    addStudentToTable(student);
  });
}

function updateAverage() {
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  const average = students.length ? total / students.length : 0;
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

