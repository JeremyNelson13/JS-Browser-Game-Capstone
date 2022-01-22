//This file will handle the World/Overworld

map = [
    ['','','','',''],
    ['','DungeonHallway','LeaveDungeonHallway',''],
    ['','DungeonHallway','',''],
    ['GuardsRoom','DungeonHallway','StartingCell','DungeonHallway','CestusRoom'],
    ['','','DungeonHallway','',''],
]

const world = {}

const startPosition = [0,0]

function tileLoader() {
    let row = map.length
    let col = map[0].length

    let y;
    for (y = 0; y < row; y++){
        let x;
        for (x = 0; x < col; x++){
            let tileName = map[y][x]

            let room
            if (tileName === "StartingCell"){
                startPosition[0] = x
                startPosition[1] = y
                room = new StartingCell(x,y)
            }else if (tileName === ''){
                room = null
            }else if (tileName === "DungeonHallway") {
                room = new DungeonHallway(x,y)
            }else if (tileName === "LeaveDungeonHallway") {
                room = new LeaveDungeonHallway(x,y)
            }else if (tileName === "CestusRoom") {
                room = new CestusRoom(x,y)
            }else if (tileName === "GuardsRoom") {
                room = new GuardsRoom(x,y)
                room.enemy = new Guard()
            }
        world[[x,y]] = room

        }
    }
}

function tileExists(x,y) {
    return world[[x,y]]
}

loadTiles();