import React from 'react'
import PropTypes from 'prop-types'


const TileComponent = (props) => {
    var tileNumber = props.value
    if (tileNumber > 0) {
        tileNumber = tileNumber
    } else {
        tileNumber = ''
    }
    return (
        <th
            className={'tileComponent'}
            onClick={props.move(tileNumber)}
        >
            {tileNumber}
        </th>
    )
}

TileComponent.propTypes = {
    numberProp: PropTypes.number,
    functionProp: PropTypes.func
}

export default TileComponent