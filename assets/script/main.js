// ALmonzo's JavaScript

// Links user's button sumbit to page desired
$('#plannerBtn').on('click', function () {
    console.log('Weather');
    window.open('https://almonzorhoden.github.io/day-planner/','_blank');
});

$('#plannerGitBtn').on('click', function () {
    console.log('Weather Github');
    window.open('https://github.com/AlmonzoRhoden/day-planner', '_blank');
});

$('#weatherBtn').on('click', function () {
    console.log('Weather');
    window.open('https://almonzorhoden.github.io/weather-dashboard/', '_blank');
});

$('#weatherGitBtn').on('click', function () {
    console.log('Weather Github');
    window.open('https://github.com/AlmonzoRhoden/weather-dashboard', '_blank');
});

$('#testingBtn').on('click', function () {
    console.log('Testing');
    window.open('https://almonzorhoden.github.io/Covid-19_TestingApp/', '_blank');
});

$('#testingGitBtn').on('click', function () {
    console.log('Testing Github');
    window.open('https://github.com/AlmonzoRhoden/Covid-19_TestingApp','_blank');
});

$('#submitBtn').on('click', function () {
    console.log('Submit');
    window.location.href = 'mailto:almonzorhode@gmail.com';
});