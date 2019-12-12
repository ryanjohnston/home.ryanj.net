import React from 'react'

export function LinkNewWindow({ link, children, ...rest }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
