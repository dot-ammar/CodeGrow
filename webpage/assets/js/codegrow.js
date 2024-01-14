document.addEventListener('DOMContentLoaded', function() {

  if (window.location.pathname.includes('projects.html')) {
    var name = getCookie('name');
    var skill = getCookie('skill');
    var languages = getCookie('languages');
    var frameworks = getCookie('frameworks');
    var interests = getCookie('interests');
    var apiKey = getCookie('apiKey');
    generateProjectTemplate(skill, languages, frameworks, interests, apiKey)
    .then((projectTemplate1) => {
      console.log(projectTemplate1)
      document.getElementById('description1').innerHTML = resposne1;
    });
  }



  if (window.location.pathname.includes('assesment.html')) {
    document.getElementById('regForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        saveFormData();
        nextPage();
    });
  } 

});


function parseProjectTemplate(projectTemplate) {

  var lines = projectTemplate.split('\n');

  var project = {};
  for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var key = line.split(':')[0];
      var value = line.split(':')[1];
      project[key] = value;
  }

  return project;


}
function saveFormData() {
  var name = document.forms['regForm']['name'].value;
  var skill = getSelectedSkill();
  var languages = document.forms['regForm']['languages'].value;
  var frameworks = document.forms['regForm']['frameworks'].value;
  var interests = document.forms['regForm']['interests'].value;
  var apiKey = document.forms['regForm']['apiKey'].value;

  setCookie('name', name, 7);
  setCookie('skill', skill, 7);
  setCookie('languages', languages, 7);
  setCookie('frameworks', frameworks, 7);
  setCookie('interests', interests, 7);
  setCookie('apiKey', apiKey, 7);

  console.log("cookies saved");
}


async function generateProjectTemplate(experience, languages, frameworks, interests, apiKey) {
  const prompt = `Generate a programming project for a ${experience} programmer. Languages: ${languages}. Frameworks: ${frameworks}. Interests: ${interests}.`;
  const instruction = "Respond in the format of 'Title:', 'Description:', and 'Tools and Requirements:' for every prompt.";

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": instruction },
               { "role": "user", "content": prompt }]
};


  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(data)
      });
      const responseData = await response.json();
        
      if (responseData && responseData.choices && responseData.choices.length > 0) {
          const messages = responseData.choices[0].message;
          return messages ? messages.content : null;
      } else {
          return null;
      }
      } catch (error) {
          console.error('Error:', error);
          return null;
      }
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

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value, daysToLive) {
  var date = new Date();
  date.setTime(date.getTime() + (daysToLive*24*60*60*1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


