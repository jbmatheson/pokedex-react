import React, { ForwardedRef, forwardRef } from 'react'
import { useHref, useLinkClickHandler } from 'react-router-dom'

import { Link } from '@mui/material'

const RouterLink: React.FC<any> = forwardRef(
  (
    { onClick, replace = false, state, target, to, ...rest },
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const href = useHref(to)
    const handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    })

    return (
      <Link
        {...rest}
        href={href}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            handleClick(event)
          }
        }}
        ref={ref}
        target={target}
        sx={{ textDecoration: 'none' }}
      />
    )
  }
)

export default RouterLink
