import React, { useState } from 'react'
import { Menu, Icon, Label, Sticky } from 'semantic-ui-react'
export default () => {
  const [activeItem, setActiveItem] = useState ('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Sticky style={{padding: 30}}>
      <Menu secondary style={{float: 'right'}}>
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
          href='https://www.linkedin.com/in/kennethabella/'
        >
          <Icon name='linkedin alternate' size='large'/> LinkedIn
        </Menu.Item>
        <Menu.Item>
          <Label as='a' color='black' tag>
            &nbsp;Social
          </Label>
        </Menu.Item>
      </Menu>     
    </Sticky>
  )
}