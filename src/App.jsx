// import React, {} from 'react' 
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import MyWorks from './components/MyWorks.jsx'
import Lists from './components/Lists.tsx'
import Footer from './components/Footer.jsx'
import ScrollVelocity from './components/ScrollVelocity.tsx'

function App() {

  return (
    <div className='dark:bg-neutral transition-all duration-1000'>
      <Header />
      <Title />
      <MyWorks />
      <Lists />
      <ScrollVelocity />
      <Footer />
    </div>
  );
}

export default App;
