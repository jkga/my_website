import React, { useState } from 'react'
import { Menu, Icon, Label, Sticky, Container } from 'semantic-ui-react'
export default () => {
  const [activeItem, setActiveItem] = useState (null)

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Sticky style={{zIndex: 1000, width: '100%'}}>
      <Container>
        <Menu secondary style={{background: '#fff', padding: '20px'}}>
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
    </Sticky>
  )
}