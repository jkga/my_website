import React from 'react'
import { Header, Container, Image, Divider } from 'semantic-ui-react'
import Techs from './assets/img/techs.png'
export default () => {
  return (
    <Container>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Tech-Stacks</Header.Content>
      </Header>
      <Divider horizontal>Tools / Markup / <span style={{color: '#e91e63'}}>Programming Languages</span></Divider>
      <Container textAlign="center">
        <Image src={Techs} style={{width: '50%', marginTop: '15%', marginBottom: '30%', minWidth: 350}} centered/>
      </Container>
    </Container>
  )
}