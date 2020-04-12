import React, { useState, useEffect } from 'react'
import { Menu, Icon, Label, Container, Image } from 'semantic-ui-react'
import Logo from '../header/assets/img/logo-green.png'
import './style.css'
export default () => {
  const [activeItem, setActiveItem] = useState (null)
  const [isMenuElevated, setMenuElevation] = useState(false)

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const showLogo = (e) => {
    setMenuElevation(e.target.scrollTop > (e.target.scrollHeight * 0.10) ? true : false) 
  }

  useEffect(() => {
    window.document.body.addEventListener('scroll', showLogo, false)
    return window.document.body.removeEventListener('scroll', showLogo, true)
  }, [])

  return (
      <Container style={{minHeight: '100px'}} className='main-menu-container'>
        <Menu secondary style={{padding: '20px'}} className={isMenuElevated ? 'main-menu elevated': 'main-menu-container'}>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Image as='a' href='/' src={Logo} width={100} style={{opacity: isMenuElevated ? 100 : 0, display: isMenuElevated ? 'block' : 'none' }} className='logo'/>
            </Menu.Item>

            { !isMenuElevated ?
              <Menu.Item
                name='home' as='a' href='https://github.com/jkga'
                active={true}>
                <Icon name='terminal' size='large'/> Home
              </Menu.Item> : undefined }
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='github' as='a' href='https://github.com/jkga'
              active={activeItem === 'github'}>
              <Icon name='github' size='large'/> Github
            </Menu.Item>
            <Menu.Item
              name='LinkedIn'
              active={activeItem === 'messages'}
              onClick={handleItemClick}
              as='a'
              href='https://www.linkedin.com/in/kennethabella/'>
              <Icon name='linkedin alternate' size='large'/> LinkedIn
            </Menu.Item>
            <Menu.Item>
              <Label as='a' color='black' tag>
                &nbsp;Social
              </Label>
            </Menu.Item>
          </Menu.Menu>
        </Menu>  
      </Container>
  )
}