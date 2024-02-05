function selectTeam(teamNumber) {
    // Hide all team forms
    for (let i = 1; i <= 12; i++) {
      const teamForms = document.getElementById(`team${i}Forms`);
      if (teamForms) {
        teamForms.style.display = 'none';
      }
    }
  
    // Show the selected team form
    const selectedTeamForms = document.getElementById(`team${teamNumber}Forms`);
    if (selectedTeamForms) {
      selectedTeamForms.style.display = 'block';
    }
  }
  
  function submitFormTeam1() {
    const teamBuildingT1 = document.getElementById('teamBuildingT1').value;
    localStorage.setItem('teamBuildingT1', teamBuildingT1);
    updateResultPage();
  }

  function submitFormTeamSkit()
  {
    const skitTeam1 = document.getElementById('skitTeam1').value;
    localStorage.setItem('skitTeam1', skitTeam1);
    updateResultPage();
  }

  function submitFormTeamShakeIt()
  {
    const shakeItTeam1 = parseFloat(document.getElementById('shakeItTeam1').value);
    localStorage.setItem('shakeItTeam1', shakeItTeam1);
    updateResultPage();
  }
  
  function submitFormTeamQuizIt()
  {
    const quizTeam1 = parseFloat(document.getElementById('quizTeam1').value);
    localStorage.setItem('quizTeam1', quizTeam1);
    updateResultPage();
  }


function updateResultPage() {
    // Use AJAX to update result.html without reloading
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert("Point Added successfully!")  // Successfully updated result.html
        }
    };

    xhr.open('GET', 'index.html', true);
    xhr.send();
}

  
  