document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('regForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        saveFormData();
        nextPage();
    });
});

function saveFormData() {
    var name = document.forms['regForm']['name'].value;
    var skill = getSelectedSkill();
    var languages = document.forms['regForm']['languages'].value;
    var frameworks = document.forms['regForm']['frameworks'].value;
    var interests = document.forms['regForm']['interests'].value;

    setCookie('name', name, 7);
    setCookie('skill', skill, 7);
    setCookie('languages', languages, 7);
    setCookie('frameworks', frameworks, 7);
    setCookie('interests', interests, 7);
    console.log("cookies saved");
}

function nextPage() {
    window.location.href = 'projects.html';
}

function getSelectedSkill() {
    var skillRadios = document.forms['regForm']['skill'];
    for (var i = 0; i < skillRadios.length; i++) {
        if (skillRadios[i].checked) {
            return skillRadios[i].value;
        }
    }
    return ''; // No selection
}

function setCookie(name, value, daysToLive) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToLive*24*60*60*1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
