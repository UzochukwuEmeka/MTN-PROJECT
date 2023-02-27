// For tabs in the News section

function openCity(evt, Newsname) {
    var i, tabContent, tablinks;
  
    tabContent = document.getElementsByClassName("_tabs-body");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("_tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        " active",
        " inactive"
      );
    }
  
    document.getElementById(Newsname).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("ShowallTabs").click();
  function openAll() {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }
  