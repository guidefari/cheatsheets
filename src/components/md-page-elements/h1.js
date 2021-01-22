import { Heading } from '@chakra-ui/react'
import React from 'react'

export const H1 = props => {
  return (
    <Heading as="h1" fontSize="4xl" {...props}>
      {props.children}
    </Heading>
  )
}
