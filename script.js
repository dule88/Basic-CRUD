const nameElement = document.querySelector(".inputName");
const years1Element = document.querySelector(".inputAge");
const buttonElement = document.querySelector(".button1");
const tableElement = document.querySelector(".table1");
const buttonUpdateElement = document.querySelector(".buttonUpdate");
const buttonDeleteElement = document.querySelector(".buttonDelete");



let editIdx = null;



const persons = [
  {
    firstName: 'Dusan',
    age: 34
  },
  {
    firstName: 'Aleksandar',
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


//Back of X button to get back to the table
buttonDeleteElement.addEventListener('click', () => {
	
  getBack();
 

});


//Updateing elements if needed to be changed info in the table
buttonUpdateElement.addEventListener('click', () => {
	
  if(nameElement.value != '' && years1Element.value > 0 && years1Element.value < 108 && years1Element.value !=''){
  	persons[editIdx].firstName = nameElement.value;
  	persons[editIdx].age = years1Element.value;
  	
    
  }
 	 getBack();
  
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
      <td>${person.age}</td>
      <td><button class='btn btn-warning change' onClick="changeElement(${idx})" data-bs-toggle="modal" data-bs-target="#addModal">Change</button></td>
      <td><button class='btn btn-danger delete' onClick="deleteElement(${idx})">Delete</button></td>
    </tr>
  `)

}


//function that adds elements of table 
const addElements = () => {
		
    if(nameElement.value != '' && years1Element.value > 0 && years1Element.value < 108 && years1Element.value !=''){
  
    persons.push({

      firstName: nameElement.value,
      age: years1Element.value

    });

    nameElement.value = '';
    years1Element.value = '';
  
  }
  
  nameElement.focus();

}


//function that delete elements of table 
const deleteElement = (idx) => {
	persons.splice(idx, 1);
  read();
  
}


//function that change elements of table 
const changeElement = (idx) => {
    	nameElement.value = persons[idx].firstName;
      years1Element.value = persons[idx].age;

      buttonElement.hidden = true;


      buttonUpdateElement.hidden = false;
      buttonDeleteElement.hidden = false;
    
		
  	

    editIdx = idx;
  
	
  
}


//Function that get you back from changing element without changing anything
const getBack = () => {

	buttonElement.hidden = false;
  buttonUpdateElement.hidden = true;
  buttonDeleteElement.hidden = false;
	
  nameElement.value = '';
  years1Element.value = '';
  
  nameElement.focus();
  
  editIdx = null;

}










