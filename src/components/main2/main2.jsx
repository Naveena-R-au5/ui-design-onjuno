import React from 'react'
import sequoia from '../../img/sequoia.png'
import poly from '../../img/poly.png'
import cons from '../../img/cons.png'
import style from './main2.module.css'

const Main2=()=>{
    return(
      <div className={style.main}>
          <div className={style.heading}>
              BACKED BY THE BEST
          </div>
          <div className={style.company}>
              <img className={style.img} src={sequoia} alt='pic'/>
              <img className={style.img} src={poly} alt='pic'/>
              <img className={style.img} src={cons} alt='pic'/>
          </div>
      </div>
    )
}
export default Main2;