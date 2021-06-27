import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core/service-worker'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid } from './components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sudoku</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
