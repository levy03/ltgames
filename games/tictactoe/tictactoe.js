const gameBoard = document.getElementById('gameBoard');

class Tile {
    constructor(){
        this.properties = {
            'border': 'solid 1px orange',

        }

        this.element = document.createElement('div', this.properties);
        return this.element;
    }
}

for(i = 0; i < 9; i++){
    gameBoard.appendChild(new Tile());
}