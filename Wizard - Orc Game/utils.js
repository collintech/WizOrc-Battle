function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    )
}

const getPercentage = (remainingHealth, maximumHealth) =>
    (100 * remainingHealth) / maximumHealth

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }


/*

===========================
    DISABLING  A BUTTON
===========================
document.getElementById("idOfButton").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
} */