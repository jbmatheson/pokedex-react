import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

interface ErrorToastProps {
  message: string
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  const [open, setOpen] = React.useState(true)
  const { t } = useTranslation(['common'])
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <>
      {show && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {t(`common:errors.${message}`)}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default ErrorToast
