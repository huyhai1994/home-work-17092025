const buttonAdd = document.getElementById("button-add");
const modal = document.body.querySelector(".modal");
const buttonClose = document.body.querySelector(".close");

buttonAdd.addEventListener('click',
  () => {
    modal.style.display = "block";
  }
)
buttonClose.addEventListener('click',
  () => {
    modal.style.display = "none";
  }
)

