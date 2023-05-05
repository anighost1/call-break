import React,{useEffect} from 'react'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setTarget } from '@/slices/targetSlice'

function target() {

    // useEffect(()=>{
    //     targetCheck()
    // },[])

    const router = useRouter()
    const dispatch = useDispatch()
    const {target} = useSelector(state => state.target)

    const targetHandler = ()=>{
        if(target != ""){
            console.log(target)
            router.push('/game')
        }else{
            alert('Set a target first')
        }
    }

  return (
    <>
    <Head>
        <title>Set Target</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.main}>
        <h3>Set Target</h3>
        <input type="number" value={target} onChange={(e)=>{dispatch(setTarget(e.target.value))}} />
        <button className={styles.btn} onClick={targetHandler}>Start</button>
    </div>
    </>
  )
}

export default target