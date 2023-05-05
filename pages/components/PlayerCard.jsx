import { assignPlayer1, assignPlayer2, assignPlayer3, assignPlayer4 } from '@/slices/playerSlice'
import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'

function playerCard(props) {

    const players = useSelector(state => state.players)
    const dispatch = useDispatch()

    const actionSelector = (e)=>{
        switch(props.pNumber){
            case 1:
                return assignPlayer1(e.target.value)
                break;
            case 2:
                return assignPlayer2(e.target.value)
                break;
            case 3:
                return assignPlayer3(e.target.value)
                break;
            case 4:
                return assignPlayer4(e.target.value)
                break;
        }
    }

    const valueSelector = ()=>{
        switch(props.pNumber){
            case 1:
                return players.player1
                break;
            case 2:
                return players.player2
                break;
            case 3:
                return players.player3
                break;
            case 4:
                return players.player4
                break;
        }
    }
    
  return (
    <div className={styles.pcContainer}>
        <h4>{props.player}</h4>
        <input type="text" value={valueSelector()} onChange={(e)=>{dispatch(actionSelector(e))}}/>
    </div>
  )
}

export default playerCard