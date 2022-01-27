let storyText = document.getElementById('story-text')

let gameButtons = document.getElementById('game-buttons')

let availableActions
var room
var busy = false

function playGame() {
    room = world[[player.location_x,player.location_y]]
    if (player.isAlive() && !player.victory) {
        text += "<p>Choose An Action</p>"
        availableActions = room.availableActions()

        let innerHTML = ""
        availableActions.forEach(action => {

            innerHTML += `
    
            <button type="button" name="button" onClick="clickGameBtn('${action.name}')">${action.name}</button>
    
            `
    
          });
    
    
          gameBtns.innerHTML = innerHTML
    
      }

    room.modPlayer(player)

    if(player.victory) {
        alert("You Have Escaped The Oubliette...")
        gameButtons.innerHTML = ""
    }

    if(!busy) {
        render(text)
    }
}

function clickGameBtn(val) {
    busy = false
    if (val === "Move east") {
        player.moveEast()
    } else if (val === "Move west") {
        player.moveWest()
    } else if (val === "Move north") {
        player.moveNorth()
    } else if (val === "Move south") {
        player.moveSouth()
    } else if (val === "View Inventory") {
        player.printInventory()
        busy = true
    } else if (val === "Attack") {
        player.attack(room.enemy)
        busy = true
    } else if (val === "Flee") {
        player.flee()
    }

    play()
}

function render(text) {
    storyText.innerHTML = text
}

function addStoryText(text) {
    storyText.innerHTML += text
}

play()