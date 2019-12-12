import React from 'react'

export function TileImage({ image, description, ...rest }) {
  return <img src={image} alt={description} {...rest} />
}
