import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Data from '../../config/data.js'

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 15
      },
      h6: {
        fontFamily: "'Open Sans', sans-serif",
      },
      MuiButton: {
        label: {
          fontFamily: "'Open Sans', sans-serif",
        }
      }
    }
  }
})

const InfoComponent = () => {
    const [open, setOpen] = useState(false)

    const handleInfo = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    return(
      <ThemeProvider theme={theme}>
        <div className='infoComponent'> 
            <Tooltip className='infoComponent__help' title='Help' onClick={handleInfo}>
                <LiveHelpIcon />
            </Tooltip>  
            {open ?
            <div> 
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">{Data.help}</DialogTitle>
                <DialogContent >
                  <DialogContentText className='infoComponent__content'>
                  {Data.explaination}
                  </DialogContentText >
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    {Data.close}
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            : null}
        </div>
        </ThemeProvider>

    )
}

export default InfoComponent