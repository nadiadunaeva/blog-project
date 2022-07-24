/* Explore more articles dropdown */

window.onload=function() {
    document.getElementById("add_block_1").style.display="none";
    document.getElementById("add_block_2").style.display="none";
    document.getElementById("add_block_3").style.display="none";
    document.getElementById("toggle").onclick=function() {
      var divs = this.getAttribute("data-divs").split(",");
     
      for(var i = 0,len = divs.length;i < len;i++){
        var e = document.getElementById(divs[i]).style;
        console.log(e.display)
        e.display = (e.display == "") ? "none" : "";
      }
      return false;
    }
  }  
/* Filer By dropdown */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

