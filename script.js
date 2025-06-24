// Toggle sections
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// To-Do List
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    renderTasks();
  }
}
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
renderTasks();

// Product List
const products = [
  { name: "Phone", category: "electronics", price: 500 },
  { name: "T-Shirt", category: "clothing", price: 20 },
  { name: "Laptop", category: "electronics", price: 1000 },
];
let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
      </div>`;
  });
}

function filterProducts() {
  const filter = document.getElementById("categoryFilter").value;
  filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);
  sortProducts();
}

function sortProducts() {
  const sortOption = document.getElementById("sortOption").value;
  let sorted = [...filteredProducts];
  if (sortOption === "priceAsc") sorted.sort((a, b) => a.price - b.price);
  else sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

displayProducts(products);