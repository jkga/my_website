// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Header, Icon, Container, Image, Responsive, Transition } from 'semantic-ui-react'
import Logo from './assets/img/profile.png'
import Scroll from './assets/img/scroll.gif'
import bmcLogo from './assets/img/bmc-black-button.png'
import './style.css'
export default () => {
  const [isLogoVisible, setLogoVisibility] = useState(false)

  const bounce = (e) => {
    if(e.target.scrollTop === 0) {
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
        <Transition.Group animation='pulse' duration={1000}>
          {isLogoVisible && (
            <Image centered src={Logo} style={{width: '50px', minWidth: '250px', marginTop: '-5vh' }} className='header-main-image'/>
          )}
        </Transition.Group>
        <Container>
          <Header as="h1">John Kenneth Abella</Header>
          <Header.Subheader Icon style={{ opacity: 0.5 }}><Icon name='map marker alternate'/>Cabuyao, Laguna, Philippines</Header.Subheader>
        </Container>
        <Container style={{marginTop:10}}>
          <a href='https://buymeacoffee.com/jkga' target='_blank' rel="noopener noreferrer">
            <img height='36' style={{border: 0, height: 36}} src={bmcLogo} border='0' alt='buymeacoffee.com/jkga                ' />
          </a>
        </Container>
        <Header as='h1'>
          <Header.Subheader>
              I am <span style={{color: '#e91e63'}}>fullstack web developer&nbsp;</span>
              working on various applications and information systems.<br/>
              Thank you for spending your time visiting my humble website! Just keep scrolling, <br/>
              don't worry I have a lot of things to tell you
          </Header.Subheader>
        </Header>
        
        <Transition.Group animation='fly up' duration={1000}>
        {isLogoVisible && (<div className="scroll-section">
            <Image src={Scroll} centered width={50} style={{background: '#ccc', borderRadius: '20%'}}/>
            <p>keep scrolling</p>
          </div>)}
        </Transition.Group>

        <div className='bg-sprite x header-x-backgound'></div>
        <div className='bg-sprite arrow-forward header-arrow-forward-background'></div>
        <div className='bg-sprite half-circle deg45 header-half-circle-background'></div>
      </header>
    </Responsive>
  )
}