
function updateText(){
   
    // console.log("working")
    let text = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = text
  }
  
  function makeBold(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');

  }
  
  function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');

  }
  
  function makeUnderline(elem){
     elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
  }
  
  function alignText(elem, alignType){
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;


  }