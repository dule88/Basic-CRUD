const nameElement = document.querySelector(".inputName");
const lastName1Element = document.querySelector(".inputLastName");
const years1Element = document.querySelector(".inputAge");
const buttonElement = document.querySelector(".button1");
const tableElement = document.querySelector(".table1");




const persons = [
  {
    firstName: 'Dusan',
    lastName: 'Dimitrijevic',
    age: 34
  },
  {
    firstName: 'Aleksandar',
    lastName: 'Rasic',
    age: 34
  },
  
];
  
//Elements printed on page load
window.addEventListener("load", () => {
  
  read();
  
});


//Adding new elements in the tablew
buttonElement.addEventListener("click", () => {

  addElements();
  
  read();
  
  
  });








//function that iterates elements of table 
const read = () => {
	tableElement.innerHTML = '';
	persons.forEach((person, idx) => 
  tableElement.innerHTML += `
 
    <tr>
      <th scope="row">${idx + 1}</th>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.age}</td>
      <td><button class='btn btn-warning change'>Change</button></td>
      <td><button class='btn btn-danger delete' onClick="deleteElement(${idx})">Delete</button></td>
    </tr>
  `)

}
//function that adds elements of table 
const addElements = () => {
		
    if(nameElement.value != '' &&  lastName1Element.value != '' && years1Element.value > 0 && years1Element.value !=''){
  
    persons.push({

      firstName: nameElement.value,
      lastName: lastName1Element.value,
      age: years1Element.value

    });

    nameElement.value = '';
    lastName1Element.value = '';
    years1Element.value = '';
  
  }
  
  nameElement.focus();

}
//function that delete elements of table 
const deleteElement = (idx) => {
	persons.splice(idx, 1);
  read();
	
  
}









