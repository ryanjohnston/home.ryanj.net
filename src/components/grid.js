import React from 'react'

export function SmallGrid({ children, ...rest }) {
  return <span className="grid grid-gap grid-columns-small grid-rows-small">{children}</span>
}

export function RegularGrid({ children, ...rest }) {
  return <span className="grid grid-gap grid-columns grid-rows">{children}</span>
}
