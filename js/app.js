// Sidebar hamburger function

$(document).ready(function(){
    // expand sidebar
    $('.menu-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "hidden");
    
        
    });

    // remove sidebar or close
    $('.close-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "visible");
        
    });

});


// Dropdown button

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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

  

  function Dropdown() {
    document.getElementById("myDropdown-status").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-status')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-status");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  $('#myModal').modal(options)