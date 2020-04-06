import React from 'react'
import { Responsive } from 'semantic-ui-react'
import HeaderMenu from '../../components/main-menu'
import Header from '../../components/header'
import TechStack from '../../components/tech-stack-section'
import Feedback from '../../components/feedback-section'
import Interest from '../../components/interests-section'
import './style.css'

export default () => {
  return (
    <Responsive>
      <HeaderMenu></HeaderMenu>
      <Header></Header>
      <TechStack></TechStack>
      <Feedback></Feedback>
      <Interest></Interest>
    </Responsive>
  )
}