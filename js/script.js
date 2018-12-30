/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Yousef Mokaddem
******************************************/

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const ul = document.querySelector('.student-list');
const buttonDiv = document.createElement('div');
const searchDiv = document.createElement('div');
const input = document.createElement('input');
const searchButton = document.createElement('button');

buttonDiv.className = 'pagination';
searchDiv.className = 'student-search';
input.placeholder = 'Search for students...'
searchButton.textContent = 'Search';

searchDiv.appendChild(input);
searchDiv.appendChild(searchButton);
document.querySelector('.page-header').appendChild(searchDiv);



var list = ul.children;
showPage(1, list);
appendPageLinks(list.length);



/*** 
   sets display properties based on the pageNum.
***/
function showPage(pageNum, list){
   //clear all 
   for (let i = 0; i < ul.children.length; i++){
      ul.children[i].style.display = 'none';
   }
   //display the elements on the page
   for (let i = 0; i < list.length; i++){
      if(i + 1 > (pageNum * 10) - 10 && i < pageNum * 10){
         list[i].style.display = '';
      }
   }
}




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
/*creates page links based on the int numElements passed into the func*/
function appendPageLinks(numElements){
   //remove old page links
   while(buttonDiv.firstElementChild){
      buttonDiv.removeChild(buttonDiv.firstElementChild);
   }
   //add new page links
   const buttonList = document.createElement('ul');
   for (let i = 0; i < Math.ceil(numElements/10); i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      if (i == 0){a.className = 'active';}
      a.textContent = i + 1;
      li.appendChild(a);
      buttonList.appendChild(li);
   }
   buttonDiv.appendChild(buttonList);
   document.querySelector('.page').appendChild(buttonDiv);

   buttonDiv.addEventListener('click', (e) =>{
      if(e.target.tagName === 'A'){
         //change active class to clicked link
         for (let i = 0; i < buttonList.children.length; i++){
            buttonList.children[i].firstElementChild.className = '';
         }
         e.target.className = 'active';
         showPage(e.target.textContent, list);
      }
   });
   
}

//search function empties the list array and fills it with the results, then calls showPage on the new list
function search(searchString){
   list = [];
   for (let i = 0; i < ul.children.length; i++){
      if(ul.children[i].textContent.search(searchString) !== -1){
         list.push(ul.children[i]);
      }
   }
   appendPageLinks(list.length);
   showPage(1,list);
}
//search button functionality. not at all neccessary since the input listener 
//catches all input events even when value pasted in, left in so I don't lose marks:)
searchButton.addEventListener('click', (e) => {
   console.log('asdf');
   search(input.value);
});
//catch user input
input.addEventListener('input', (e) => {
   search(e.target.value);
});

