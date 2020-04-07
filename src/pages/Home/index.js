import React, {Suspense} from 'react'
import { Responsive } from 'semantic-ui-react'
import Header from '../../components/header'
import './style.css'

const HeaderMenu = React.lazy(() => import('../../components/main-menu'));
const TechStack = React.lazy(() => import('../../components/tech-stack-section'));
const Feedback = React.lazy(() => import('../../components/feedback-section'));
const Interest = React.lazy(() => import('../../components/interests-section'));

export default () => {
  return (
    <Responsive>
      <Suspense fallback={<div>...</div>}>
        <HeaderMenu></HeaderMenu>
        <Header></Header>
        <TechStack></TechStack>
        <Feedback></Feedback>
        <Interest></Interest>
      </Suspense>
    </Responsive>
  )
}