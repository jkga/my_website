import React from 'react'
import { Header, Icon, Container, Image, Responsive } from 'semantic-ui-react'
import RandomBars from '../random-bars'
import Motor from './assets/img/motor-2.jpg'
import './style.css'
export default () => {
  return (
    <Responsive>
      <header>
        <Header as='h1' icon textAlign='center'>
          <Image src={Motor} style={{width: 200}}/>
            <Header.Content>.dev/jkga</Header.Content>
            <Header.Subheader>
              Hola! I am <span style={{color: '#e91e63'}}>Ken</span>, a fullstack web developer
              working on various applications and information systems.<br/>
              Thank you for spending your time visiting my humble website! Just keep scrolling, <br/>
              don't worry I have a lot of things to tell you
          </Header.Subheader>
        </Header>
        <Container style={{margin: 10, opacity: 0.5}}>
            <Icon name='map marker alternate'/> Cabuyao, Laguna, Philippines
        </Container>
        <Container style={{margin:30}}>
          <a href='https://ko-fi.com/F2F71KUIX' target='_blank' rel="noopener noreferrer">
            <img height='36' style={{border: 0, height: 36}} src='https://cdn.ko-fi.com/cdn/kofi5.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' />
          </a>
        </Container>
        <Container textAlign='center'>
          <RandomBars></RandomBars>
        </Container>
        <div className='bg-sprite x header-x-backgound'></div>
        <div className='bg-sprite arrow-forward header-arrow-forward-background'></div>
        <div className='bg-sprite half-circle deg45 header-half-circle-background'></div>
      </header>
    </Responsive>
  )
}