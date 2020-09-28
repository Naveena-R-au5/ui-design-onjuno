import React from 'react'
import Navbar from '../navbar/navbar'
import dashboard from '../../img/dashboard.png'
import usa from '../../img/usa.png'
import style from './main.module.css'
import Button from 'react-bootstrap/esm/Button'


const Main=()=>{
    return(
        <div>
            <Navbar/>
            <div className={style.main}>
                <div className={style.content}>
                    <h1 className={style.h1}>The Most Powerful Checking Account</h1>
                    <h5 className={style.label}>Our checking account gives you higher returns than a savings account with no hidden fees.</h5>
                    <div className={style.div}>
                    <i class="fa fa-envelope-o" aria-hidden="true" style={{fontSize:'30px',color:'blue',marginTop:'5px'}}></i>
                        <input type='email' className={style.input}  placeholder="Enter Email adress" required/>
                        <Button  className={style.join}>Join now</Button>
                    </div>
                    <h6 className={style.flag}><img src={usa} alt='img'/> 277 spots left for Priority Access</h6>
                    <div className={style.extra}>
                        <h3 className={style.fdio}>FDIO</h3>
                        <h6 className={style.text}>Banking Services Provided By Evolve Bank & Trust; Member FDIC</h6>
                    </div>
                </div>
                <div className={style.dashboard}>
                    <img  className={style.img} src={dashboard} alt='pic'></img>
                </div>
            </div>
        </div>
    )
}
export default Main;