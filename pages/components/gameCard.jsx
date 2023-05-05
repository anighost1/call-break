import React from 'react'
import styles from '@/styles/Home.module.css'

function gameCard(props) {

    const callAssign = (e)=>{
        props.assign(e.target.value)
    }
  return (
    <div className={styles.pcContainer}>
        <h4>{props.player}</h4>
        <input type="number" onChange={callAssign} />
    </div>
  )
}

export default gameCard