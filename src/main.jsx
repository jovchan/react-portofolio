import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './index.css'
import Title from './components/Title.jsx'
import MyWorks from './components/MyWorks.jsx'
import Lists from './components/Lists.tsx'
import Footer from './components/Footer.jsx'
// import ListPorto from './components/MyWorksList.tsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Title />
    <MyWorks />
    <Lists />
    <Footer />
    {/* <ListPorto /> */}

  </React.StrictMode>,
)
