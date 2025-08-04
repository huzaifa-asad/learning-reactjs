import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind CSS</h1>
      <Cards username="Huzaifazz" btnText="click me" imgSource="https://avatars.githubusercontent.com/u/193378515?v=4"/>
      <Cards username="Huzaifa" btnText="visit me" imgSource="https://media.licdn.com/dms/image/v2/D4D03AQFCm8Ea69Gc0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719328902998?e=1756944000&v=beta&t=pLGrEU_EisnsYPbFpcbm6zhYBfmEItGILZ9JDsZj1ek"/>

    </>
  )
}

export default App
