// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Header, Icon, Image, Responsive, Transition, Grid, Button, Container } from 'semantic-ui-react'
import Logo from './assets/img/profile.png'
import LogoHalf from './assets/img/profile-half.png'
import Name from './assets/img/name.png'
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
      <header style={{minWidth: '100%', height: 'auto'}}>
        <Grid stackable style={{marginBottom: '5em'}}>
          <Grid.Column>
            <Container style={{paddingLeft: '15%', paddingRight: '15%', textAlign: 'left'}}>
              <Transition.Group animation='pulse' duration={2000}>
                {isLogoVisible && <Image src={Name} centered style={{width: 350}}/> }
              </Transition.Group>
              <Header style={{fontSize: '2.8em'}} textAlign='center'>John Kenneth Abella</Header>
              <Header.Subheader style={{ opacity: 0.5, textAlign: 'center' }}><Icon name='map marker alternate'/>Cabuyao, Laguna, Philippines</Header.Subheader>
              <br/>
              <p style={{textAlign: 'justify'}}>
                I am a <span style={{color: '#e91e63'}}>fullstack web developer&nbsp;</span>
                working on various applications and information systems.
                I am actively collaborates on free and open-source projects by various organizations and 
                independent teams such as Google Developers Group &#40;GDGPH&#41;, TrackerCLI, 
                and many more. Prior to my engagement with SEARCA, I was an IT 
                Instructor/Coordinator at the Philippine Women&#39;s University Calamba and a former 
                trainee at the University of the Philippines Los Baños - Information Technology Center
              </p>

              <Container textAlign='center'>
                <Transition.Group animation='pulse' duration={1000}>
                  {isLogoVisible && <Button size="huge" color='teal' style={{background:'#63976E', borderRadius: 30}} onClick={()=> window.location = 'https://www.linkedin.com/in/kennethabella/'}>
                  CONTACT ME
                    </Button>
                  }
                </Transition.Group>
              </Container>

            </Container>
          </Grid.Column>


        </Grid>
      </header>
    </Responsive>
  )
}