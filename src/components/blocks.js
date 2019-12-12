import React from 'react'

export function Icon({ title, image, link, children, ...rest }) {
  return <div {...rest}>{children}</div>
}

export function Tile({ children, ...rest }) {
  return <div {...rest}>{children}</div>
}

export function Section({ children, ...rest }) {
  return <section {...rest}>{children}</section>
}

export function Head({ children, text, ...rest }) {
  return <header {...rest}>{children}</header>
}

export function TextRegular({ children, ...rest }) {
  return <span {...rest}>{children}</span>
}
