import React from 'react'

export function Icon({ title, image, link, children, ...rest }) {
  return (
    <div className="center-text">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-margin standard-padding"
      >
        <img src={image} alt={title} className="center-text center-margin" />
      </a>
      <span className="center-text regular white no-margin block">{title}</span>
      {children}
    </div>
  )
}

export function Tile({ image, title, description, children, ...rest }) {
  return (
    <div className="blue-border center-text standard-padding">
      <h3 className="medium sea standard-padding no-margin">{title}</h3>
      <img src={image} alt={description} className="server-image" />
      {children}
    </div>
  )
}

export function Section({ children, ...rest }) {
  return (
    <section className="section" {...rest}>
      {children}
    </section>
  )
}

export function Head({ children, text, ...rest }) {
  return (
    <header className="App-header" {...rest}>
      <h1 className="x-large red standard-padding no-margin">{text}</h1>
      {children}
    </header>
  )
}
