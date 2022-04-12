//function show_hide() {
// document.getElementById("p-p11");
  //  if (document.getElementById("p-p11").style.display == "none") {
  //      document.getElementById("p-p11").style.display = "block";
  //  } else {
  //      document.getElementById("p-p11").style.display = "none";
  //  }
 // }
 
  let btn =  document.getElementsByClassName('btn-quiz');        
  let div = document.getElementById('pp11');

  btn.addEventListener('click', () =>{
  if(div.style.display === 'none'){
      div.style.display = 'block';
  }else{
      div.style.display = 'none';
  }
  })



