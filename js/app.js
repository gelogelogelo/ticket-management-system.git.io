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

    let quill = new Quill('#editor', {
      theme: 'snow'
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


  // $('#myModal').modal(options)


  // Get the modal
let mymodal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("description").value;

img.onclick = function(){
  mymodal.style.display = "block";
  modalImg.src = this.src;
  document.getElementById("caption").innerHTML = captionText;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  mymodal.style.display = "none";
}
 

// quill js

