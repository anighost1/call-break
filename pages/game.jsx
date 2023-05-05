import React,{useState} from 'react'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import GameCard from './components/gameCard'

function game() {

    const players = useSelector(state => state.players)
    const [makeCall , setMakeCall] = useState(true)
    const [p1Box, setP1Box] = useState("")
    const [p2Box, setP2Box] = useState("")
    const [p3Box, setP3Box] = useState("")
    const [p4Box, setP4Box] = useState("")

    const assignP1 = (data)=>{
        setP1Box(data)
    }
    const assignP2 = (data)=>{
        setP2Box(data)
    }
    const assignP3 = (data)=>{
        setP3Box(data)
    }
    const assignP4 = (data)=>{
        setP4Box(data)
    }


  return (
    <>
    <Head>
        <title>Call Break</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.main}>
        <h3>{makeCall?'Make Call':'Insert Score'}</h3>
        <div className={styles.cards}>
            <GameCard player = {players.player1} assign={assignP1}/>
            <GameCard player = {players.player2} assign={assignP2}/>
            <GameCard player = {players.player3} assign={assignP3}/>
            <GameCard player = {players.player4} assign={assignP4}/>
        </div>
        <p>{p1Box}</p>
        <p>{p2Box}</p>
        <p>{p3Box}</p>
        <p>{p4Box}</p>
    </div>
    </>
  )
}

export default game