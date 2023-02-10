function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');   
        break;
      }
    }
  }
}


function myFunctionAAA() {
  document.getElementById("myDropdownAAA").classList.toggle("showAAA");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtnAAA')) {

  let dropdownsAAA = document.getElementsByClassName("dropdown-contentAAA");
  for (i = 0; i < dropdownsAAA.length; i++) {
    let openDropdownAAA = dropdownsAAA[i];
    if (openDropdownAAA.classList.contains('showAAA')) {
      openDropdownAAA.classList.remove('showAAA');
    }
  }
}
}





