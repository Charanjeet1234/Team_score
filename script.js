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

function compareResultsAndRank() {
  const teams = [];

  // Retrieve scores from localStorage and push them into the teams array
  for (let i = 1; i <= 12; i++) {
    const teamScore = parseFloat(localStorage.getItem(`resultTeam${i}`)) || 0;
    teams.push({ teamNumber: i, score: teamScore });
  }

  // Sort teams in descending order based on score
  teams.sort((a, b) => b.score - a.score);
  console.log("Sorted Teams:", teams); // Debugging: Log sorted teams

  // Assign ranks based on sorted order
  let currentRank = 1;
  for (let i = 0; i < teams.length; i++) {
    const teamNumber = teams[i].teamNumber;
    const rank =
      i > 0 && teams[i].score === teams[i - 1].score ? currentRank : i + 1;
    console.log(`Team ${teamNumber}: Rank ${rank}`); // Debugging: Log rank for each team
    currentRank = rank + 1; // Increment rank for the next iteration
    localStorage.setItem(`team${teamNumber}Rank`, rank);
  }
}

function submitFormTeam1() {
  const teamBuildingT1 = document.getElementById("teamBuildingT1").value;
  localStorage.setItem("teamBuildingT1", teamBuildingT1) || 0;
  console.log("Form 1 submitted");
  updateResultPage();
  compareResultsAndRank();
}

function submitFormTeamSkit() {
  const skitTeam1 = document.getElementById("skitTeam1").value;
  localStorage.setItem("skitTeam1", skitTeam1) || 0;
  updateResultPage();
}

function submitFormTeamShakeIt() {
  const shakeItTeam1 = parseFloat(
    document.getElementById("shakeItTeam1").value
  );
  localStorage.setItem("shakeItTeam1", shakeItTeam1) || 0;
  updateResultPage();
}

function submitFormTeamQuizIt() {
  const quizTeam1 = parseFloat(document.getElementById("quizTeam1").value);
  localStorage.setItem("quizTeam1", quizTeam1) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormTeamcarbonfoot1() {
  const carbonTeam1 = parseFloat(document.getElementById("carbonTeam1").value);
  localStorage.setItem("carbonTeam1", carbonTeam1) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam1() {
  const team1teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT1")) || 0;
  const team1skitscore = parseFloat(localStorage.getItem("skitTeam1")) || 0;
  const team1shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam1")) || 0;
  const team1quizscore = parseFloat(localStorage.getItem("quizTeam1")) || 0;
  const team1Carbon = parseFloat(localStorage.getItem("carbonTeam1")) || 0;

  const resultTeam1 =
    team1teambuildingscore +
    team1skitscore +
    team1shakeitscore +
    team1quizscore +
    team1Carbon;
  document.getElementById("resultTeam1").value = resultTeam1;
  localStorage.setItem("resultTeam1", resultTeam1);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot2() {
  const carbonTeam2 = parseFloat(document.getElementById("carbonTeam2").value);
  localStorage.setItem("carbonTeam2", carbonTeam2) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam2() {
  const team2teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT2")) || 0;
  const team2skitscore = parseFloat(localStorage.getItem("skitTeam2")) || 0;
  const team2shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam2")) || 0;
  const team2quizscore = parseFloat(localStorage.getItem("quizTeam2")) || 0;
  const team2Carbon = parseFloat(localStorage.getItem("carbonTeam2")) || 0;
  const resultTeam2 =
    team2teambuildingscore +
    team2skitscore +
    team2shakeitscore +
    team2quizscore +
    team2Carbon;
  document.getElementById("resultTeam2").value = resultTeam2;
  localStorage.setItem("resultTeam2", resultTeam2);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot3() {
  const carbonTeam3 = parseFloat(document.getElementById("carbonTeam3").value);
  localStorage.setItem("carbonTeam3", carbonTeam3) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam3() {
  const team3teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT3")) || 0;
  const team3skitscore = parseFloat(localStorage.getItem("skitTeam3")) || 0;
  const team3shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam3")) || 0;
  const team3quizscore = parseFloat(localStorage.getItem("quizTeam3")) || 0;

  const team3Carbon = parseFloat(localStorage.getItem("carbonTeam3")) || 0;
  const resultTeam3 =
    team3teambuildingscore +
    team3skitscore +
    team3shakeitscore +
    team3quizscore +
    team3Carbon;
  document.getElementById("resultTeam3").value = resultTeam3;
  localStorage.setItem("resultTeam3", resultTeam3);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot4() {
  const carbonTeam4 = parseFloat(document.getElementById("carbonTeam4").value);
  localStorage.setItem("carbonTeam4", carbonTeam4) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam4() {
  const team4teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT4")) || 0;
  const team4skitscore = parseFloat(localStorage.getItem("skitTeam4")) || 0;
  const team4shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam4")) || 0;
  const team4quizscore = parseFloat(localStorage.getItem("quizTeam4")) || 0;
  const team4Carbon = parseFloat(localStorage.getItem("carbonTeam4")) || 0;
  const resultTeam4 =
    team4teambuildingscore +
    team4skitscore +
    team4shakeitscore +
    team4quizscore +
    team4Carbon;
  document.getElementById("resultTeam4").value = resultTeam4;
  localStorage.setItem("resultTeam4", resultTeam4);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot5() {
  const carbonTeam5 = parseFloat(document.getElementById("carbonTeam5").value);
  localStorage.setItem("carbonTeam5", carbonTeam5) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam5() {
  const team5teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT5")) || 0;
  const team5skitscore = parseFloat(localStorage.getItem("skitTeam5")) || 0;
  const team5shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam5")) || 0;
  const team5quizscore = parseFloat(localStorage.getItem("quizTeam5")) || 0;
  const team5Carbon = parseFloat(localStorage.getItem("carbonTeam5")) || 0;

  const resultTeam5 =
    team5teambuildingscore +
    team5skitscore +
    team5shakeitscore +
    team5quizscore +
    team5Carbon;
  document.getElementById("resultTeam5").value = resultTeam5;
  localStorage.setItem("resultTeam5", resultTeam5);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot6() {
  const carbonTeam6 = parseFloat(document.getElementById("carbonTeam6").value);
  localStorage.setItem("carbonTeam6", carbonTeam6) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam6() {
  const team6teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT6")) || 0;
  const team6skitscore = parseFloat(localStorage.getItem("skitTeam6")) || 0;
  const team6shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam6")) || 0;
  const team6quizscore = parseFloat(localStorage.getItem("quizTeam6")) || 0;
  const team6Carbon = parseFloat(localStorage.getItem("carbonTeam6")) || 0;
  const resultTeam6 =
    team6teambuildingscore +
    team6skitscore +
    team6shakeitscore +
    team6quizscore +
    team6Carbon;
  document.getElementById("resultTeam6").value = resultTeam6;
  localStorage.setItem("resultTeam6", resultTeam6);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot7() {
  const carbonTeam7 = parseFloat(document.getElementById("carbonTeam7").value);
  localStorage.setItem("carbonTeam7", carbonTeam7) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam7() {
  const team7teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT7")) || 0;
  const team7skitscore = parseFloat(localStorage.getItem("skitTeam7")) || 0;
  const team7shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam7")) || 0;
  const team7quizscore = parseFloat(localStorage.getItem("quizTeam7")) || 0;
  const team7Carbon = parseFloat(localStorage.getItem("carbonTeam7")) || 0;
  const resultTeam7 =
    team7teambuildingscore +
    team7skitscore +
    team7shakeitscore +
    team7quizscore +
    team7Carbon;
  document.getElementById("resultTeam7").value = resultTeam7;
  localStorage.setItem("resultTeam7", resultTeam7);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot8() {
  const carbonTeam8 = parseFloat(document.getElementById("carbonTeam8").value);
  localStorage.setItem("carbonTeam8", carbonTeam8) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam8() {
  const team8teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT8")) || 0;
  const team8skitscore = parseFloat(localStorage.getItem("skitTeam8")) || 0;
  const team8shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam8")) || 0;
  const team8quizscore = parseFloat(localStorage.getItem("quizTeam8")) || 0;
  const team8Carbon = parseFloat(localStorage.getItem("carbonTeam8")) || 0;
  const resultTeam8 =
    team8teambuildingscore +
    team8skitscore +
    team8shakeitscore +
    team8quizscore +
    team8Carbon;
  document.getElementById("resultTeam8").value = resultTeam8;
  localStorage.setItem("resultTeam8", resultTeam8);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot9() {
  const carbonTeam9 = parseFloat(document.getElementById("carbonTeam9").value);
  localStorage.setItem("carbonTeam9", carbonTeam9) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam9() {
  const team9teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT9")) || 0;
  const team9skitscore = parseFloat(localStorage.getItem("skitTeam9")) || 0;
  const team9shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam9")) || 0;
  const team9quizscore = parseFloat(localStorage.getItem("quizTeam9")) || 0;
  const team9Carbon = parseFloat(localStorage.getItem("carbonTeam9")) || 0;
  const resultTeam9 =
    team9teambuildingscore +
    team9skitscore +
    team9shakeitscore +
    team9quizscore +
    team9Carbon;
  document.getElementById("resultTeam9").value = resultTeam9;
  localStorage.setItem("resultTeam9", resultTeam9);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot10() {
  const carbonTeam10 = parseFloat(
    document.getElementById("carbonTeam10").value
  );
  localStorage.setItem("carbonTeam10", carbonTeam10) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam10() {
  const team10teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT10")) || 0;
  const team10skitscore = parseFloat(localStorage.getItem("skitTeam10")) || 0;
  const team10shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam10")) || 0;
  const team10quizscore = parseFloat(localStorage.getItem("quizTeam10")) || 0;
  const team10Carbon = parseFloat(localStorage.getItem("carbonTeam10")) || 0;
  const resultTeam10 =
    team10teambuildingscore +
    team10skitscore +
    team10shakeitscore +
    team10quizscore +
    team10Carbon;
  document.getElementById("resultTeam10").value = resultTeam10;
  localStorage.setItem("resultTeam10", resultTeam10);
  compareResultsAndRank();
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

function submitFormTeamcarbonfoot11() {
  const carbonTeam11 = parseFloat(
    document.getElementById("carbonTeam11").value
  );
  localStorage.setItem("carbonTeam11", carbonTeam11) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam11() {
  const team11teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT11")) || 0;
  const team11skitscore = parseFloat(localStorage.getItem("skitTeam11")) || 0;
  const team11shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam11")) || 0;
  const team11quizscore = parseFloat(localStorage.getItem("quizTeam11")) || 0;
  const team11Carbon = parseFloat(localStorage.getItem("carbonTeam11")) || 0;
  const resultTeam11 =
    team11teambuildingscore +
    team11skitscore +
    team11shakeitscore +
    team11quizscore +
    team11Carbon;
  document.getElementById("resultTeam11").value = resultTeam11;
  localStorage.setItem("resultTeam11", resultTeam11);
  compareResultsAndRank();
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

function submitFormTeamShakeIt12() {
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

function submitFormTeamcarbonfoot12() {
  const carbonTeam12 = parseFloat(
    document.getElementById("carbonTeam12").value
  );
  localStorage.setItem("carbonTeam12", carbonTeam12) || 0;
  // localStorage.setItem("result",result)
  updateResultPage();
}

function submitFormOverallTeam12() {
  const team12teambuildingscore =
    parseFloat(localStorage.getItem("teamBuildingT12")) || 0;
  const team12skitscore = parseFloat(localStorage.getItem("skitTeam12")) || 0;
  const team12shakeitscore =
    parseFloat(localStorage.getItem("shakeItTeam12")) || 0;
  const team12quizscore = parseFloat(localStorage.getItem("quizTeam12")) || 0;
  const team12Carbon = parseFloat(localStorage.getItem("carbonTeam12")) || 0;
  const resultTeam12 =
    team12teambuildingscore +
    team12skitscore +
    team12shakeitscore +
    team12quizscore +
    team12Carbon;
  document.getElementById("resultTeam12").value = resultTeam12;
  localStorage.setItem("resultTeam12", resultTeam12);
  compareResultsAndRank();
}

function updateResultPage() {
  // Use AJAX to update result.html without reloading
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert("Point Added successfully!"); // Successfully updated result.html
    }
  };

  xhr.open("GET", "index.html", true);
  xhr.send();
}
