const STORAGE_KEY = "users";
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");

// Error elements
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");

// Modal elements
const deleteModal = document.getElementById("deleteModal");
const modalText = document.getElementById("modalText");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let deleteIndex = null;

//  table
function renderTable() {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.classList.add("fade-in");   //for animation
    row.innerHTML = `
      <td data-label="Name">${user.name}</td>
      <td data-label="Age">${user.age}</td>
      <td data-label="Email">${user.email}</td>
      <td data-label="Action">
        <button class="editBtn">Edit</button>
        <button class="removeBtn">Delete</button>
      </td>
    `;

    // Edit button
    row.querySelector(".editBtn").addEventListener("click", () => {
      startEdit(index, row, user);
    });

    // after clicking delete button modal popup
    row.querySelector(".removeBtn").addEventListener("click", () => {
      deleteIndex = index;
      modalText.textContent = `Are you sure you want to delete "${user.name}"?`;
      deleteModal.style.display = "block";
    });

    tableBody.appendChild(row);
  });
}

// Add user
addBtn.addEventListener("click", () => {
  clearErrors();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const email = emailInput.value.trim();

  let hasError = false;

  if (!/^[A-Za-z\s]{5,}$/.test(name)) {
    nameError.textContent = "Name must be at least 5 letters.";
    hasError = true;
  }
  if (!/^[1-9][0-9]?$/.test(age)) {
    ageError.textContent = "Age must be between 1 and 99.";
    hasError = true;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Invalid email format.";
    hasError = true;
  }

  if (hasError) return;

  // check repeated data
  const isDuplicate = users.some(
    (user) =>
      user.name.toLowerCase() === name.toLowerCase() &&
      user.age === age &&
      user.email.toLowerCase() === email.toLowerCase()
  );
  if (isDuplicate) {
    alert("This user is already listed!");
    return;
  }

  users.push({ name, age, email });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  renderTable();

  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
});

// Edit user
function startEdit(index, row, user) {
  row.innerHTML = "";

  const nameField = document.createElement("input");
  nameField.type = "text";
  nameField.value = user.name;

  const ageField = document.createElement("input");
  ageField.type = "number";
  ageField.value = user.age;

  const emailField = document.createElement("input");
  emailField.type = "email";
  emailField.value = user.email;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "saveBtn";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.className = "cancelBtn";

  row.appendChild(document.createElement("td")).appendChild(nameField);
  row.appendChild(document.createElement("td")).appendChild(ageField);
  row.appendChild(document.createElement("td")).appendChild(emailField);

  const actionCell = document.createElement("td");
  actionCell.appendChild(saveBtn);
  actionCell.appendChild(cancelBtn);
  row.appendChild(actionCell);

  saveBtn.addEventListener("click", () => {
    const newName = nameField.value.trim();
    const newAge = ageField.value.trim();
    const newEmail = emailField.value.trim();

    if (!/^[A-Za-z\s]{5,}$/.test(newName) ||
        !/^[1-9][0-9]?$/.test(newAge) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      alert("Invalid input! Check name, age, and email.");
      return;
    }

    users[index] = { name: newName, age: newAge, email: newEmail };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    renderTable();
  });

  cancelBtn.addEventListener("click", renderTable);
}

// Modal delete actions
confirmDelete.addEventListener("click", () => {
  if (deleteIndex !== null) {
    users.splice(deleteIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    renderTable();
    deleteIndex = null;
  }
  deleteModal.style.display = "none";
});

cancelDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
});

// Close modal on clicking outside
window.addEventListener("click", (e) => {
  if (e.target === deleteModal) deleteModal.style.display = "none";
});

// Clear inline errors
function clearErrors() {
  nameError.textContent = "";
  ageError.textContent = "";
  emailError.textContent = "";
}

// Initial render
renderTable();
