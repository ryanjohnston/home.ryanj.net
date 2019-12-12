import React from 'react'

export function List({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>
}

export function TextListItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>
}

export function SSHListItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>
}
