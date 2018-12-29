/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


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




showPage(1);
appendPageLinks();


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(pageNum){
   for (let i = 0; i < ul.children.length; i++){
      if(i + 1 > (pageNum * 10) - 10 && i < pageNum * 10){
         ul.children[i].style.display = '';
      }else{
         ul.children[i].style.display = 'none';
      }
   }
}




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(){
   const buttonList = document.createElement('ul');
   for (let i = 0; i < Math.ceil(ul.children.length/10); i++){
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
         showPage(e.target.textContent);
      }
   });
   
}






// Remember to delete the comments that came with this file, and replace them with your own code comments.