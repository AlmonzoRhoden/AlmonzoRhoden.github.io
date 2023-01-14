// ALmonzo's JavaScript

// Links user's button sumbit to page desired

// Box-1-Project-1
$('#testingBtn').on('click', function () {
    console.log('Covid-19');
    window.open('https://almonzorhoden.github.io/covid-19-app/', '_blank');
})

$('#testingGitBtn').on('click', function () {
    console.log('Covid-19 Github');
    window.open('https://github.com/AlmonzoRhoden/covid-19-app','_blank');
});

//  Box-2-Project-2
$('#BookBtn').on('click', function () {
    console.log('Book');
    window.open('https://almonzorhoden.github.io/day-planner/','_blank');
});

$('#BookGitBtn').on('click', function () {
    console.log('Book Github');
    window.open('https://github.com/AlmonzoRhoden/day-planner', '_blank');
});

//  Box-3-Project-3
$('#weatherBtn').on('click', function () {
    console.log('Weather');
    window.open('https://almonzorhoden.github.io/weather-dashboard/', '_blank');
});

$('#weatherGitBtn').on('click', function () {
    console.log('Weather Github');
    window.open('https://github.com/AlmonzoRhoden/weather-dashboard', '_blank');
});

//  Box-4-Project-4
$('#burgerBtn').on('click', function () {
    console.log('Burger');
    window.open('https://almonzorhoden.github.io/password-generator/', '_blank');
});

$('#burgerGitBtn').on('click', function () {
    console.log('Burger Github');
    window.open('https://github.com/AlmonzoRhoden/password-generator', '_blank');
});

// Contact Me 
$('#submitBtn').on('click', function () 
{
    console.log('Submit');
    window.location.href = 'mailto:almonzorhoden@gmail.com';
});

$('#GitBtn').on('click', function () {
    console.log('Github');
    window.open('https://github.com/AlmonzoRhoden', '_blank');
});

$('#LinkedInBtn').on('click', function () {
    console.log('LinkedIn');
    window.open('https://www.linkedin.com/in/almonzorhoden/', '_blank');
});

$('#SupportInBtn').on('click', function () {
    console.log('Coffee');
    window.open('https://www.buymeacoffee.com/AlmonzoRhoden', '_blank');
});


// Setting volume level of bgm
var audio = document.getElementById("myaudio");
audio.volume = 0.2;

//Jquery Javascript code

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  

//Jquery Javascript code1

$(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideToggle("slow");
    });
  });
  
  //Jquery Javascript code2

$(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });
  
   //Jquery Javascript code2

$(document).ready(function(){
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip4").click(function(){
      $("#panel4").slideToggle("slow");
    });
  });
