function myFunction() {
    document.getElementById("header").style.display = "block";
  }
  function closeup(){
    document.getElementById("header").style.display = "none";
      
  }
  // Open and Close navbar modal
   document.getElementById("popModal").addEventListener( "mouseover", function () {
    document.querySelector(".departmental-selection").style.display="flex"
  
  })
  
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".departmental-selection").style.display="none"
    
  })
  // Departmental Tabs
  function showThistabs(activatedtabs, contentTabs) {
      var navtabs=document.querySelectorAll(".navs-tabs")
      var tabContent=document.querySelectorAll(".navigation-department-container")
      var i=0
    
    while (i < navtabs.length) {
      navtabs[i].classList.remove("activate");
      tabContent[i].classList.remove("showThis");
      i++;
          }
        activatedtabs.classList.add('activate')
        document.getElementById(contentTabs).classList.add('showThis')
  }
  
  
  function showInfo(activatedinfo, infocontent) {
    let departmentTab = document.querySelectorAll(".department-tabs");
  let deparmntpic = document.querySelectorAll(".departmental-leader-profile")
    let i = 0;
    while (i < departmentTab.length) {
      departmentTab[i].classList.remove("activates");
  for (let i = 0; i < deparmntpic.length; i++) {
    
  deparmntpic[i].classList.remove("uploaded")
      
  }
      i++;
    }
    activatedinfo.classList.add("activates");
    document.getElementById(infocontent).classList.add("uploaded");
  }



              // OPen Navbar
function myFunction() {
    document.getElementById("header").style.display = "block";
  }
  function closeup(){
    document.getElementById("header").style.display = "none";
      
  }