import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const PageNotFound: React.FunctionComponent = () => {
  const { t } = useTranslation(['common'])

  return (
    <Box
    // height="80vh"
    // display="flex"
    // alignItems="center"
    // justifyContent="center"
    // direction="column"
    >
      <div>404</div>

      <div>{t('common:errors.page-not-found')}</div>
    </Box>
  )
}

export default PageNotFound
