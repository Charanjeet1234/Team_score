function selectTeam(teamNumber) {
  // Hide all team forms
  for (let i = 1; i <= 12; i++) {
    const teamForms = document.getElementById(`team${i}Forms`);
    if (teamForms) {
      teamForms.style.display = "none";
    }
  }
  // Show the selected team form
  const selectedTeamForms = document.getElementById(`team${teamNumber}Forms`);
  if (selectedTeamForms) {
    selectedTeamForms.style.display = "block";
  }
}

function submitFormTeam1() {
  const teamBuildingT1 = document.getElementById("teamBuildingT1").value;
  localStorage.setItem("teamBuildingT1", teamBuildingT1);
  updateResultPage();
}

function submitFormTeamSkit() {
  const skitTeam1 = document.getElementById("skitTeam1").value;
  localStorage.setItem("skitTeam1", skitTeam1);
  updateResultPage();
}

function submitFormTeamShakeIt() {
  const shakeItTeam1 = parseFloat(
    document.getElementById("shakeItTeam1").value
  );
  localStorage.setItem("shakeItTeam1", shakeItTeam1);
  updateResultPage();
}

function submitFormTeamQuizIt() {
  const quizTeam1 = parseFloat(document.getElementById("quizTeam1").value);
  localStorage.setItem("quizTeam1", quizTeam1);
  updateResultPage();
}

// ////////////////////////////////////// Function for team 2 ////////////////////////////////////////

function submitFormTeam2() {
  const teamBuildingT2 = document.getElementById("teamBuildingT2").value;
  localStorage.setItem("teamBuildingT2", teamBuildingT2);
  updateResultPage();
}

function submitFormTeamSkit2() {
  const skitTeam2 = document.getElementById("skitTeam2").value;
  localStorage.setItem("skitTeam2", skitTeam2);
  updateResultPage();
}

function submitFormTeamShakeIt2() {
  const shakeItTeam2 = parseFloat(
    document.getElementById("shakeItTeam2").value
  );
  localStorage.setItem("shakeItTeam2", shakeItTeam2);
  updateResultPage();
}

function submitFormTeamQuizIt2() {
  const quizTeam2 = parseFloat(document.getElementById("quizTeam2").value);
  localStorage.setItem("quizTeam2", quizTeam2);
  updateResultPage();
}

// ////////////////////////////////////// Function for team 3 ////////////////////////////////////////

function submitFormTeam3() {
  const teamBuildingT3 = document.getElementById("teamBuildingT3").value;
  localStorage.setItem("teamBuildingT3", teamBuildingT3);
  updateResultPage();
}

function submitFormTeamSkit3() {
  const skitTeam3 = document.getElementById("skitTeam3").value;
  localStorage.setItem("skitTeam3", skitTeam3);
  updateResultPage();
}

function submitFormTeamShakeIt3() {
  const shakeItTeam3 = parseFloat(
    document.getElementById("shakeItTeam3").value
  );
  localStorage.setItem("shakeItTeam3", shakeItTeam3);
  updateResultPage();
}

function submitFormTeamQuizIt3() {
  const quizTeam3 = parseFloat(document.getElementById("quizTeam3").value);
  localStorage.setItem("quizTeam3", quizTeam3);
  updateResultPage();
}

// ////////////////////////////////////// Function for team 4 ////////////////////////////////////////

function submitFormTeam4() {
  const teamBuildingT4 = document.getElementById("teamBuildingT4").value;
  localStorage.setItem("teamBuildingT4", teamBuildingT4);
  updateResultPage();
}

function submitFormTeamSkit4() {
  const skitTeam4 = document.getElementById("skitTeam4").value;
  localStorage.setItem("skitTeam4", skitTeam4);
  updateResultPage();
}

function submitFormTeamShakeIt4() {
  const shakeItTeam4 = parseFloat(
    document.getElementById("shakeItTeam4").value
  );
  localStorage.setItem("shakeItTeam4", shakeItTeam4);
  updateResultPage();
}

function submitFormTeamQuizIt4() {
  const quizTeam4 = parseFloat(document.getElementById("quizTeam4").value);
  localStorage.setItem("quizTeam4", quizTeam4);
  updateResultPage();
}

// ////////////////////////////////////// Function for team 5 ////////////////////////////////////////

function submitFormTeam5() {
  const teamBuildingT5 = document.getElementById("teamBuildingT5").value;
  localStorage.setItem("teamBuildingT5", teamBuildingT5);
  updateResultPage();
}

function submitFormTeamSkit5() {
  const skitTeam5 = document.getElementById("skitTeam5").value;
  localStorage.setItem("skitTeam5", skitTeam5);
  updateResultPage();
}

function submitFormTeamShakeIt5() {
  const shakeItTeam5 = parseFloat(
    document.getElementById("shakeItTeam5").value
  );
  localStorage.setItem("shakeItTeam5", shakeItTeam5);
  updateResultPage();
}

function submitFormTeamQuizIt5() {
  const quizTeam5 = parseFloat(document.getElementById("quizTeam5").value);
  localStorage.setItem("quizTeam5", quizTeam5);
  updateResultPage();
}

//////////////////////////////////////// Function for team 6 ////////////////////////////////////////

function submitFormTeam6() {
  const teamBuildingT6 = document.getElementById("teamBuildingT6").value;
  localStorage.setItem("teamBuildingT6", teamBuildingT6);
  updateResultPage();
}

function submitFormTeamSkit6() {
  const skitTeam6 = document.getElementById("skitTeam6").value;
  localStorage.setItem("skitTeam6", skitTeam6);
  updateResultPage();
}

function submitFormTeamShakeIt6() {
  const shakeItTeam6 = parseFloat(
    document.getElementById("shakeItTeam6").value
  );
  localStorage.setItem("shakeItTeam6", shakeItTeam6);
  updateResultPage();
}

function submitFormTeamQuizIt6() {
  const quizTeam6 = parseFloat(document.getElementById("quizTeam6").value);
  localStorage.setItem("quizTeam6", quizTeam6);
  updateResultPage();
}

//////////////////////////////////////// Function for team 7 ////////////////////////////////////////

function submitFormTeam7() {
  const teamBuildingT7 = document.getElementById("teamBuildingT7").value;
  localStorage.setItem("teamBuildingT7", teamBuildingT7);
  updateResultPage();
}

function submitFormTeamSkit7() {
  const skitTeam7 = document.getElementById("skitTeam7").value;
  localStorage.setItem("skitTeam7", skitTeam7);
  updateResultPage();
}

function submitFormTeamShakeIt7() {
  const shakeItTeam7 = parseFloat(
    document.getElementById("shakeItTeam7").value
  );
  localStorage.setItem("shakeItTeam7", shakeItTeam7);
  updateResultPage();
}

function submitFormTeamQuizIt7() {
  const quizTeam7 = parseFloat(document.getElementById("quizTeam7").value);
  localStorage.setItem("quizTeam7", quizTeam7);
  updateResultPage();
}

//////////////////////////////////////// Function for team 8 ////////////////////////////////////////

function submitFormTeam8() {
  const teamBuildingT8 = document.getElementById("teamBuildingT8").value;
  localStorage.setItem("teamBuildingT8", teamBuildingT8);
  updateResultPage();
}

function submitFormTeamSkit8() {
  const skitTeam8 = document.getElementById("skitTeam8").value;
  localStorage.setItem("skitTeam8", skitTeam8);
  updateResultPage();
}

function submitFormTeamShakeIt8() {
  const shakeItTeam8 = parseFloat(
    document.getElementById("shakeItTeam8").value
  );
  localStorage.setItem("shakeItTeam8", shakeItTeam8);
  updateResultPage();
}

function submitFormTeamQuizIt8() {
  const quizTeam8 = parseFloat(document.getElementById("quizTeam8").value);
  localStorage.setItem("quizTeam8", quizTeam8);
  updateResultPage();
}

//////////////////////////////////////// Function for team 9 ////////////////////////////////////////

function submitFormTeam9() {
  const teamBuildingT9 = document.getElementById("teamBuildingT9").value;
  localStorage.setItem("teamBuildingT9", teamBuildingT9);
  updateResultPage();
}

function submitFormTeamSkit9() {
  const skitTeam9 = document.getElementById("skitTeam9").value;
  localStorage.setItem("skitTeam9", skitTeam9);
  updateResultPage();
}

function submitFormTeamShakeIt9() {
  const shakeItTeam9 = parseFloat(
    document.getElementById("shakeItTeam9").value
  );
  localStorage.setItem("shakeItTeam9", shakeItTeam9);
  updateResultPage();
}

function submitFormTeamQuizIt9() {
  const quizTeam9 = parseFloat(document.getElementById("quizTeam9").value);
  localStorage.setItem("quizTeam9", quizTeam9);
  updateResultPage();
}

//////////////////////////////////////// Function for team 10 ////////////////////////////////////////

function submitFormTeam10() {
  const teamBuildingT10 = document.getElementById("teamBuildingT10").value;
  localStorage.setItem("teamBuildingT10", teamBuildingT10);
  updateResultPage();
}

function submitFormTeamSkit10() {
  const skitTeam10 = document.getElementById("skitTeam10").value;
  localStorage.setItem("skitTeam10", skitTeam10);
  updateResultPage();
}

function submitFormTeamShakeIt10() {
  const shakeItTeam10 = parseFloat(
    document.getElementById("shakeItTeam10").value
  );
  localStorage.setItem("shakeItTeam10", shakeItTeam10);
  updateResultPage();
}

function submitFormTeamQuizIt10() {
  const quizTeam10 = parseFloat(document.getElementById("quizTeam10").value);
  localStorage.setItem("quizTeam10", quizTeam10);
  updateResultPage();
}

/////////////////////////////////////// Function for team 11 ////////////////////////////////////////

function submitFormTeam11() {
  const teamBuildingT11 = document.getElementById("teamBuildingT11").value;
  localStorage.setItem("teamBuildingT11", teamBuildingT11);
  updateResultPage();
}

function submitFormTeamSkit11() {
  const skitTeam11 = document.getElementById("skitTeam11").value;
  localStorage.setItem("skitTeam11", skitTeam11);
  updateResultPage();
}

function submitFormTeamShakeIt11() {
  const shakeItTeam11 = parseFloat(
    document.getElementById("shakeItTeam11").value
  );
  localStorage.setItem("shakeItTeam11", shakeItTeam11);
  updateResultPage();
}

function submitFormTeamQuizIt11() {
  const quizTeam11 = parseFloat(document.getElementById("quizTeam11").value);
  localStorage.setItem("quizTeam11", quizTeam11);
  updateResultPage();
}

/////////////////////////////////////// Function for team 11 ////////////////////////////////////////

function submitFormTeam12() {
  const teamBuildingT12 = document.getElementById("teamBuildingT12").value;
  localStorage.setItem("teamBuildingT12", teamBuildingT12);
  updateResultPage();
}

function submitFormTeamSkit12() {
  const skitTeam12 = document.getElementById("skitTeam12").value;
  localStorage.setItem("skitTeam12", skitTeam12);
  updateResultPage();
}

function submitFormTeamShakeIt11() {
  const shakeItTeam12 = parseFloat(
    document.getElementById("shakeItTeam12").value
  );
  localStorage.setItem("shakeItTeam12", shakeItTeam12);
  updateResultPage();
}

function submitFormTeamQuizIt12() {
  const quizTeam12 = parseFloat(document.getElementById("quizTeam12").value);
  localStorage.setItem("quizTeam12", quizTeam12);
  updateResultPage();
}

function updateResultPage() {
  // Use AJAX to update result.html without reloading
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
    //   alert("Point Added successfully!"); // Successfully updated result.html
    }
  };

  xhr.open("GET", "index.html", true);
  xhr.send();
}
