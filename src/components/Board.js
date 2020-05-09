import React, { Component } from 'react'
import Tile from './Tile'
import Three from '../config/3x3.js'
import Four from '../config/4x4.js'
import SIZE from '../config/config.js'
import './Board.css'

const _ = require('underscore')

var GAMESIZE = SIZE.SIZE
var tilesArray = Four.array

if (GAMESIZE === 3) {
    tilesArray = Three.array
}

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: tilesArray,
            empty: [GAMESIZE - 1, GAMESIZE - 1],
            isWin: false,
        }
    }

    shuffleTheBoard = () => {
        var isWin = this.state.isWin
        var shuffledTiles = this.state.tiles
        if (isWin) {
            var state = {
                isWin: false
            }
            this.setState(state)
        } else {
            for (let i = 0; i < shuffledTiles.length; i++) {
                shuffledTiles = _.shuffle(shuffledTiles)
                shuffledTiles[i] = _.shuffle(shuffledTiles[i])
            }
            var state = {
                tiles: shuffledTiles,
                empty: this.findPosition(0, shuffledTiles)
            }
            this.setState(state)
        }
    }

    cheater = () => {

    }

    findPosition = (tileNumber, tilesTable) => {
        var emptyTilePosition = [0, 0]
        tilesTable.forEach((tileColumns, row) => {
            var column = tileColumns.findIndex(value => value === tileNumber)
            if (column > - 1) {
                emptyTilePosition = [row, column]
            }
        })
        return emptyTilePosition
    }

    swapTiles = (clickedTile, position) => {
        var emptyTile = this.state.empty
        var isMovableCondition = (position[0] === emptyTile[0] && (position[1] === emptyTile[1] + 1 || position[1] === emptyTile[1] - 1))
        var isMovableCondition2 = (position[1] === emptyTile[1] && (position[0] === emptyTile[0] + 1 || position[0] === emptyTile[0] - 1))

        if (isMovableCondition || isMovableCondition2) {
            const tilesTable = this.state.tiles
            tilesTable[position[0]][position[1]] = 0
            tilesTable[emptyTile[0]][emptyTile[1]] = clickedTile

            var state = {
                tiles: tilesTable,
                empty: position
            }
            this.setState(state)
        }
    }

    moveTile = (clickedTile) => () => {
        const isWin = this.state.isWin
        if (isWin) {
            return
        } else {
            if (typeof clickedTile === 'number') {
                var tilesTable = this.state.tiles
                const positionOfTile = this.findPosition(clickedTile, tilesTable)
                this.swapTiles(clickedTile, positionOfTile)
                this.checkWin()
            }
        }
    }

    checkWin = () => {
        var currentState = this.state.tiles
        var winState = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 0]
        ]
        if (GAMESIZE === 3) {
            winState = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 0]
            ]
        }

        if (_.isEqual(winState, currentState)) {
            var state = {
                isWin: true
            }
            this.setState(state)
        }
    }

    render() {
        var isWin = this.state.isWin
        var tilesTable = this.state.tiles
        var yAxis = tilesTable.map(y => {
            const xAxis = y.map((tileNumber, idx) =>
                <Tile key={idx} value={tileNumber} move={this.moveTile} />
            )
            return (
                <div>
                    <tr key={y}>
                        {xAxis}
                    </tr>
                </div>
            )
        })
        return (
            <div className={'board_wrapper'}>
                <h1>
                    {isWin ? 'Woho du äger' : 'Du suger'}
                </h1>
                <table className={'table is-fullwidth'}>
                    <tbody className={'board'}>
                        {yAxis}
                    </tbody>
                    <tfoot>
                        <button onClick={this.shuffleTheBoard}>
                            {isWin ? 'Starta om' : 'Shuffla'}
                        </button>
                        <br />
                        {isWin ? 'Nu har du vunnit så alla knapparna är inaktiverade, du måste starta om!!!' : ''}
                        <button onClick={this.cheater}>
                            Fuska för du suger
                        </button>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Board