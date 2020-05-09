import React, { Component } from 'react'

class Tile extends Component {
    render() {
        var tileNumber = this.props.value
        if(tileNumber > 0) {
            tileNumber = tileNumber
        } else {
            tileNumber = ''
        }
        return (
            <th 
            className={'tile'} 
            onClick={this.props.move(tileNumber)}
            >
                {tileNumber}
            </th>
        )
    }
}

export default Tile