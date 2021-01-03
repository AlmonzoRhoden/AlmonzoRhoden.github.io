// ALmonzo's JavaScript

// Links user's button sumbit to page desired

// Box-1-Project-1
$('#testingBtn').on('click', function () {
    console.log('Covid-19');
    window.open('https://almonzorhoden.github.io/covid-19-app/', '_blank');
})

$('#testingGitBtn').on('click', function () {
    console.log('Covid-19 Github');
    window.open('https://github.com/AlmonzoRhoden/Covid-19_TestingApp','_blank');
});

//  Box-2-Project-2
$('#BookBtn').on('click', function () {
    console.log('Book');
    window.open('https://pacific-harbor-27397.herokuapp.com/home','_blank');
});

$('#BookGitBtn').on('click', function () {
    console.log('Book Github');
    window.open('https://github.com/AlmonzoRhoden/book-book', '_blank');
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
    window.open('https://almonzo-eat-the-burger.herokuapp.com/', '_blank');
});

$('#burgerGitBtn').on('click', function () {
    console.log('Burger Github');
    window.open('https://github.com/AlmonzoRhoden/burger', '_blank');
});

// Contact Me 
$('#submitBtn').on('click', function () {
    console.log('Submit');
    window.location.href = 'mailto:almonzorhoden@gmail.com';
});

// Setting volume level of bgm
var audio = document.getElementById("myaudio");
audio.volume = 0.2;
