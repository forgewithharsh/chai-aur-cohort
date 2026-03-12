const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    alert("Mat kar lala!");
    return;
  }

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  li.textContent = value;
  ul.appendChild(li);

  delBtn.classList.add("delete");
  delBtn.textContent = "Delete";
  li.appendChild(delBtn);

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
});
