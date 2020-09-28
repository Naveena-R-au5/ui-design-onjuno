import React from 'react'
import svg from '../../img/21.svg'
import style from './main3.module.css'

const Main3=()=>{
    return(
       <div className={style.main}>
           <div className={style.content}>
               <h4 className={style.h}>Start saving for a rainy day fund</h4>
               <h2 className={style.h1}>Use Our Checking Account to Achieve Your Financial Goals</h2>
               <h5 className={style.p}>With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our banking partner Evolve Bank and Trust. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</h5>
           </div>
           <div className={style.imgs}>
               <img className={style.img} src={svg} alt='img'></img>
           </div>
       </div>
    )
}
export default Main3;