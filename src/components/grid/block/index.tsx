import React, { FC } from 'react'
import { Container } from './styles'

interface IProps {
  colIndex: Number
  rowIndex: Number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div>
      <Container>00</Container>
    </div>
  )
}

export default Block
