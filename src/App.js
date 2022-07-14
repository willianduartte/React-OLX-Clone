import React from 'react'
import './App.css'

import { connect } from 'react-redux'
import { MainRoutes } from './routes/MainRoutes'

import { Template } from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

const App = props => {
  return (
    <div>
      <Template>
        <Header />
        <MainRoutes />
        <Footer />
      </Template>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispachToProps = dispath => {
  return {}
}

export default connect(mapStateToProps, mapDispachToProps)(App)
