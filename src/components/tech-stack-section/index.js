import React from 'react'
import { Header, Container, Image, Divider } from 'semantic-ui-react'
import Techs from './assets/img/techs.png'
import RandomBars from '../random-bars'
export default () => {
  return (
    <Container>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Tech-Stacks</Header.Content>
      </Header>
      <Container centered style={{height: 35}}><RandomBars/></Container>
      <Divider horizontal>Tools / Markup / <span style={{color: '#e91e63'}}>Programming Languages</span></Divider>
      <Container textAlign="center">
        <Image src={Techs} style={{width: '40%', marginTop: '15%', marginBottom: '15%', minWidth: 300}} centered/>
      </Container>
    </Container>
  )
}