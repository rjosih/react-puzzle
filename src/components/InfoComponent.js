import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import Text from '../config/explaination.js'


const InfoComponent = () => {
    const [open, setOpen] = useState(false)
    const explaination = Text.explaination

    const handleInfo = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className='infoComponent'> 
            <Tooltip className='help' title='Help' onClick={handleInfo}>
                <LiveHelpIcon />
            </Tooltip>  
            {open ?
            <div> 
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">{'Problem statement'}</DialogTitle>
                <DialogContent >
                  <DialogContentText>
                  {explaination}
                  </DialogContentText >
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Stäng
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            : null}
        </div>

    )
}

export default InfoComponent