import type { NextPage } from 'next'
import { alignCenter, mainContainer } from '../styles/main.css'

const Home: NextPage = () => {
  return (
    <main className={alignCenter}>
      <div className={mainContainer}>
        Hello World
      </div>
    </main>
  )
}

export default Home
