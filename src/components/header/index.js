// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Header, Icon, Container, Image, Responsive, Transition } from 'semantic-ui-react'
import RandomBars from '../random-bars'
import Logo from './assets/img/logo.png'
import './style.css'
export default () => {
  const [isLogoVisible, setLogoVisibility] = useState(false)

  const bounce = (e) => {
    if(e.target.scrollTop == 0) {
      setLogoVisibility(res => false)
      setTimeout(() => setLogoVisibility(res => !res),100)  
    } else {
      setLogoVisibility(true)
    }
  }

  useEffect(() => {
    // animate bounce effect on scroll
    setLogoVisibility(isLogoVisible => !isLogoVisible)
    window.document.body.addEventListener('scroll', bounce, false)
  }, [])

  return (
    <Responsive>
      <header>
        <Header as='h1' icon>
          <Transition.Group animation='bounce' duration={1000}>
          {isLogoVisible && (
              <Image centered src={Logo} style={{width: '40%', minWidth: '200px', marginBottom: '5vh' }} className='header-main-image'/>
            )}
          </Transition.Group>
          <Header.Subheader>
              <b>Hola!</b>I am <span style={{color: '#e91e63'}}>Ken</span>, a fullstack web developer
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