import React from 'react'

export function SubHead({ children, text, ...rest }) {
  return (
    <h2 className="standard-padding no-margin medium sea" {...rest}>
      {text}
      {children}
    </h2>
  )
}
