const buttonAdd = document.getElementById("button-add");
const modal = document.getElementById("modal");
const buttonClose = document.body.querySelector(".close");
const tableBody = document.body.querySelector(".table-body");
const submitButton = document.body.querySelector('.submit-button');
const formModal = document.body.querySelector('.modal-form');

const data = [
  {name: 'Banana', price: "0.99"},
  {name: 'Apple', price: "1.99"},
  {name: 'Orange', price: "1.49"},
  {name: 'Grapes', price: "2.99"},
  {name: 'Mango', price: "1.79"},
  {name: 'Pineapple', price: "3.49"},
  {name: 'Strawberry', price: "2.59"},
  {name: 'Blueberry', price: "2.89"},
  {name: 'Watermelon', price: "4.99"},
  {name: 'Peach', price: "1.59"},
  {name: 'Kiwi', price: "1.29"},
  {name: 'Pear', price: "1.39"},
  {name: 'Plum', price: "1.19"},
]
buttonAdd.addEventListener('click',
  () => {
    openModal();
  }
)
buttonClose.addEventListener('click',
  () => {
    closeModal();
  }
)

formModal.addEventListener('submit',
  (e) => {
    e.preventDefault();
    let formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData);
    const newData = {name: formProps?.name, price: formProps?.price}
    if (!formProps?.name || !formProps?.price) throw new Error('Bad request!!! ');
    renderOneElement(newData);
    closeModal();
  }
)

renderElements(data);


function renderElements(data) {
  data.forEach(
    d => {
      createTableData(d)
    }
  )
}

function renderOneElement(item) {
  createTableData(item);
}

function createTableData(d) {
  const tableRow = document.createElement('tr');
  const tableData1 = document.createElement('td');
  const tableData2 = document.createElement('td');
  tableData1.innerText = d.name;
  tableData2.innerText = d.price;
  tableRow.append(tableData1);
  tableRow.append(tableData2);
  tableBody.append(tableRow);
}

function closeModal() {
  modal.style.display = 'none'; // hoisting
}

function openModal() {
  modal.style.display = "block";
}
