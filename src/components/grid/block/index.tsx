import React, { FC } from 'react'

interface IProps {
  colIndex: Number
  rowIndex: Number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div>
      |{rowIndex} {colIndex}|
    </div>
  )
}

export default Block
