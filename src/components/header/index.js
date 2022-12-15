// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Header, Icon, Image, Responsive, Transition, Grid, Button } from 'semantic-ui-react'
import Logo from './assets/img/profile.png'
import LogoHalf from './assets/img/profile-half.png'
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
      <header style={{minWidth: '100%'}}>
        <Grid stackable className='header-grid'>
          {/*<Grid.Column textAlign='center' className='m-hidden'>
              <Transition.Group animation='pulse' duration={1000}>
                {isLogoVisible && (
                  <Image centered src={Logo} style={{width: '50px', minWidth: '250px'}} className='header-main-image'/>
                )}
              </Transition.Group>
            </Grid.Column>*/}
          
          <Grid.Column textAlign='center' verticalAlign='center' className='sm-text-centered'>
            <Header style={{fontSize: '2.8em'}}>John Kenneth Abella</Header>
            <Header.Subheader Icon style={{ opacity: 0.5 }}><Icon name='map marker alternate'/>Cabuyao, Laguna, Philippines</Header.Subheader>
            <Header.Subheader>
              I am <span style={{color: '#e91e63'}}>fullstack web developer&nbsp;</span>
              working on various applications and information systems.<br/>
              Thank you for spending your time visiting my humble website! Just keep scrolling, <br/>
              don't worry I have a lot of things to tell you
            </Header.Subheader><br/>
            
            <Transition.Group animation='pulse' duration={1000}>
              {isLogoVisible && <Button color='teal' style={{background:'#63976E', borderRadius: 30}} size='large' onClick={()=> window.location = 'https://www.linkedin.com/in/kennethabella/'}>
                  <Grid relaxed>
                    <Grid.Column width={5} textAlign='right' verticalAlign='center' className='text-centered'>
                      <Image right src={Logo} style={{width: '100px'}}/>
                    </Grid.Column>
                    <Grid.Column width={11}  textAlign='left' verticalAlign='center' className='text-left' style={{paddingLeft: 0}}>
                      <div style={{paddingTop: '8px', marginLeft: '-20px'}}>CONTACT ME</div>
                    </Grid.Column>
                  </Grid>
                </Button>
              }
            </Transition.Group>
          </Grid.Column>
        </Grid>
      </header>
    </Responsive>
  )
}