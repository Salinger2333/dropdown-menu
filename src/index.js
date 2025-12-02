import "./style.css";

function addDropDownMenu(text) {
  const more = document.querySelector(".more");
  let menu = document.querySelector(".dropdown-menu");
  if (!menu) {
    menu = document.createElement("div");
    menu.classList.add("dropdown-menu");
    more.append(menu);
  }
  const li = document.createElement("li");
  li.classList.add("menu-item");
  li.textContent = text;
  menu.append(li);

  more.addEventListener("click", (e) => {
    if (menu.classList.contains("visible")) {
      menu.classList.remove("visible");
    } else {
      menu.classList.add("visible");
    }
    e.stopImmediatePropagation();
  });
  window.addEventListener("click", (e) => {
    if (e.target !== more || !menu.contains(e.target)) {
      menu.classList.remove("visible");
    }
  });
}
addDropDownMenu("hiiii");
addDropDownMenu("this is a drop");
addDropDownMenu("3rd");

export { addDropDownMenu };
