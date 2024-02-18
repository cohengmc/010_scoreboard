let homeScoreEl = document.querySelector("#homeScore")
let awayScoreEl = document.querySelector("#awayScore")
let homeScore = 0
let awayScore = 0
let gameStarted = false

function newGame() {
    homeScore = 0
    awayScore = 0
    gameStarted = true
    scoreUpdate()
}

function scoreUpdate() {
    if (homeScore < 10) {
        homeScoreEl.textContent = "0" + homeScore
    } else {
        homeScoreEl.textContent = homeScore
    }

    if (awayScore < 10) {
        awayScoreEl.textContent = "0" + awayScore
    } else {
        awayScoreEl.textContent = awayScore
    }

}

function addOneHome(tag) {
    if (gameStarted) {
        homeScore++
        scoreUpdate()
    }
}

function addTwoHome(tag) {
    if (gameStarted) {
        homeScore += 2
        scoreUpdate()
    }
}

function addThreeHome(tag) {
    if (gameStarted) {
        homeScore += 3
        scoreUpdate()
    }
}

function addOneAway(tag) {
    if (gameStarted) {
        awayScore++
        scoreUpdate()
    }
}

function addTwoAway(tag) {
    if (gameStarted) {
        awayScore += 2
        scoreUpdate()
    }
}

function addThreeAway(tag) {
    if (gameStarted) {
        awayScore += 3
        scoreUpdate()
    }
}