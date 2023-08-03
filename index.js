  let container=document.querySelector(".container");
  let menuIcon=document.getElementById("MenuIcon");
  console.log(container);
  let icon=document.getElementById("icon")

    let sideMenu=document.getElementById("SideMenu");
    console.log(sideMenu);
  menuIcon.addEventListener("click",function(){
        menuIcon.classList.toggle("active");
        sideMenu.classList.toggle("active");
        icon.classList.toggle("fa-circle-arrow-left");

        container.classList.toggle("active")
  });

// let dropdown=document.querySelector(".dropdown");
//   let list=document.querySelector(".list");
//   let active=true;
//   list.addEventListener("click",function(){
//     dropdown.classList.toggle("active");
//  })


 function toggleDropdown(dropdownId,faId){
  var dropdown = document.getElementById(dropdownId);
  var icon=document.getElementById(faId);
  console.log(icon);
  console.log(dropdown);
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        icon.classList.toggle("fa-arrow-down")
 }
 



