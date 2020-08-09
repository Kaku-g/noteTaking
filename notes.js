var adbtn =document.querySelector('#adbtn');
var txt =document.getElementById('Txt');
var notesDisplay =document.getElementById('notes');
shownotes();
adbtn.addEventListener('click',function(e){
    console.log(txt.value);
    let notes = localStorage.getItem('notes');
    if (notes==null){
         notesObj=[];
    }
    else{
          notesObj = JSON.parse(notes);
    }
    notesObj.push(txt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    txt.value="";
    shownotes();
    console.log(notesObj);


});


function shownotes(){
    let notes = localStorage.getItem('notes');
    if (notes==null){
         notesObj=[];
    }
    else{
          notesObj = JSON.parse(notes);
    }
    var html='';
    notesObj.forEach(function(element,index)  {
        if(element){
        html+='<div class="card mx-5 my-5" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">Note'+index+'</h5><p class="card-text">'+element+'</p><button id="'+index+'" onclick="deletenote(this.id)" class="btn btn-primary text-white">Delete Note</button></div></div>'
        }
    });
    if(notesObj.length!=0){
        notesDisplay.innerHTML= html;

    }
    else{
        notesDisplay.innerHTML= ' Please add notes from above section';
    }

}





 function deletenote(index){
     console.log(' delete button is pressed');
    let notes = localStorage.getItem('notes');
    if (notes==null){
         notesObj=[];
    }
    else{
          notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();

 }











   







