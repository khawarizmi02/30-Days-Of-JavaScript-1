const getFName = document.querySelector('#fname');
const getLName = document.querySelector('#lname');
const getCountryName = document.querySelector('#country');
const getScore = document.querySelector('#score');
const addButton = document.querySelector('#add-player');
const leaderboard = document.querySelector('#leaderboard');

const scoreboardList = [];
let condition = true;

addButton.addEventListener(
  'click',
  function addButtonEvent(stateCondition = true) {
    // console.log(stateCondition);

    if (stateCondition) {
      scoreboardList.push({
        fname: getFName.value,
        lname: getLName.value,
        country: getCountryName.value,
        score: parseInt(getScore.value),
      });

      scoreboardList.sort((a, b) => {
        if (a.score < b.score) return 1;
        if (a.score > b.score) return -1;
      });

      let rowId = scoreboardList.length - 1;
      leaderboard.innerHTML += `<div id=${rowId}>

  ${scoreboardList[rowId].fname} ${scoreboardList[rowId].lname} ${scoreboardList[rowId].country} ${scoreboardList[rowId].score}
  <button id="delete" class="delete" data-row-id=${rowId}>delete</button>  
  <button id="add-five" class="add-five" data-row-id=${rowId}>+5</button> 
  <button id="minus-five" class="minus-five" data-row-id=${rowId}>-5</button> 

    </div>`;
    }
    const addFiveButton = document.querySelectorAll('.add-five');
    addFiveButton.forEach((button) => {
      button.addEventListener('click', function () {
        const rowId = button.dataset.rowId;
        scoreboardList[rowId].score += 5;
        console.log(scoreboardList[rowId].score);

        updateScoreBoard();
        condition = false;
        console.log(condition);
        addButtonEvent(condition);
      });
    });

    const minusFiveButton = document.querySelectorAll('.minus-five');
    minusFiveButton.forEach((button) => {
      button.addEventListener('click', function () {
        const rowId = button.dataset.rowId;
        scoreboardList[rowId].score -= 5;
        console.log(scoreboardList[rowId].score);

        updateScoreBoard();
        condition = false;
        console.log(condition);
        addButtonEvent(condition);
      });
    });

    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach((button) => {
      button.addEventListener('click', function () {
        const rowId = button.dataset.rowId;
        scoreboardList.splice(rowId,1)

        updateScoreBoard();
        condition = false;
        console.log(condition);
        addButtonEvent(condition);
      });
    });
  }
);

function updateScoreBoard() {
  leaderboard.innerHTML = '';

  scoreboardList.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
  });

  scoreboardList.forEach((player, index) => {
    leaderboard.innerHTML += `<div id=${index}>

  ${scoreboardList[index].fname} ${scoreboardList[index].lname} ${scoreboardList[index].country} ${scoreboardList[index].score}
  <button id="delete" class="delete" data-row-id=${index}>delete</button>  
  <button id="add-five" class="add-five" data-row-id=${index}>+5</button> 
  <button id="minus-five" class="minus-five" data-row-id=${index}>-5</button> 

    </div>`;

    return console.log(true);
  });
}
