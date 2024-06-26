// import React, {} from 'react' 
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import MyWorks from './components/MyWorks.jsx'
import Lists from './components/Lists.tsx'
import Footer from './components/Footer.jsx'
import Certificate from './components/MyCertificate.jsx'
import ScrollVelocity from './components/ScrollVelocity.tsx'
import Loading from './components/Loader/Loader.tsx'
import { useEffect, useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
    }, [])
    if (loading) {
        return <Loading/>
    }

  return (
    <div className='dark:bg-neutral transition-all duration-1000'>
      <Header />
      <Title />
      <MyWorks />
      <Lists />
      <Certificate />
      <Footer />
      <ScrollVelocity />
      <SpeedInsights />

    </div>
  );
}

export default App;
