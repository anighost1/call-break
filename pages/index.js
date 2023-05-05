import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PlayerCard from './components/PlayerCard'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleClick = ()=>{
        if(players.player1 != "" && players.player2 != "" && players.player3 != "" && players.player4 != ""){
            console.log(players) 
            router.push('/target')
        }else{
            router.push('/')
            alert("Name for all the players are needed")
        }
    }

  return (
    <>
      <Head>
        <title>Call Break</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Call Break</h1>
        <div className={styles.cards}>
            <PlayerCard player={"Player 1"} pNumber={1}/>
            <PlayerCard player={"Player 2"} pNumber={2}/>
            <PlayerCard player={"Player 3"} pNumber={3}/>
            <PlayerCard player={"Player 4"} pNumber={4}/>
        </div>
            <button className={styles.btn} onClick={handleClick}>Next</button>
      </main>
    </>
  )
}
