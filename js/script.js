

function focusPesquisa(){
  
  let pesquisa = barraPesquisa.itemPesquisa.value
  
  if(pesquisa == ""){
    barraPesquisa.itemPesquisa.focus()
    return false
  } 
}

function pesquisar(){
  let pesquisa = barraPesquisa.itePesquisa.value

}

function carousel(){
  const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");
  
  next.addEventListener("click", e => {
    carousel.scrollBy(width, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  
  prev.addEventListener("click", e => {
    carousel.scrollBy(-width, 0);
    if (carousel.scrollLeft - width <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
  
  let width = carousel.offsetWidth;
  window.addEventListener("resize", e => (width = carousel.offsetWidth));
}

/* Profile */

function NoDisplay(){
  const 
  UserProfile = document.getElementById("UserProfile"),
  MyAccount = document.getElementById("MyAccount"),
  btn1 = document.getElementById("MyAccountBtn"),
  btn2 = document.getElementById("UserProfileBtn");

  function AuxNoDisplay(){
    MyAccount.style.display = "none";
    UserProfile.style.display = "none";
  }

  btn1.addEventListener("click", e => {
    AuxNoDisplay();
    MyAccount.style.display = "block";
  });

  btn2.addEventListener("click", e => {
    AuxNoDisplay(); 
    UserProfile.style.display = "block";   
  });  

}

function ModifyButtons(){

  let
  /* buttons */
  NomeBtn = document.getElementById("NomeBtn"),
  EmailBtn = document.getElementById("EmailBtn"),
  AltoContraste = document.getElementById("AltoContraste"),

  Validador = document.getElementById("ValidadorMinhaConta");

  /* Inputs */
  Nome = document.getElementById("Nome");
  Email = document.getElementById("Email"),

  NomeBtn.addEventListener("click", e => {
    Nome.disabled = false
    Nome.focus()
    NomeBtn.disabled = true
  });

  EmailBtn.addEventListener("click", e => {
    Email.disabled = false
    Email.focus()
    EmailBtn.disabled = true
  });

  AltoContraste.addEventListener("change", e => {
    if(!AltoContraste.checked && !NomeBtn.disabled && !EmailBtn.disabled){
    Validador.style.display = "none";
  }
  });
    
  Validador.style.display = "block";
}

function CancelModify(){
  let
  Cancel = document.getElementById("cancel");

  Cancel.addEventListener("click", e => {
    location.reload();
  });

}

