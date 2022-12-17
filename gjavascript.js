
const add = document.getElementById('addlogo');

const addingbox = (text = "")=>{
  const note = document.createElement('div');
  note.classList.add('box');
  const data =  `<div class="input">
   <div class = "test">
    <div class="svlogo">
      <span class="save" ><ion-icon name="save-outline"></ion-icon></span>
      <span class="del"><ion-icon  name="close-circle-outline"></ion-icon>
      </span>
    </div>
  </div>
  <div class = "main">
   <textarea rows="10" cols="40"></textarea>

  </div>`;

  note.insertAdjacentHTML('afterbegin', data);

  document.body.appendChild(note);
  let del = note.querySelector('.del');
  let save = note.querySelector('.save');
  // dletng the page
  del.addEventListener('click', ()=>{
    note.remove();
  })

};
add.addEventListener('click',() => addingbox() );
