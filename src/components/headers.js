import React from 'react'

export function PageHead({ children, ...rest }) {
  return <h1 {...rest}>{children}</h1>
}

export function SubHead({ children, ...rest }) {
  return <h2 {...rest}>{children}</h2>
}

export function TileHead({ children, ...rest }) {
  return <h3 {...rest}>{children}</h3>
}
