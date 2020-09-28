import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import c1 from '../../img/c1.png'
import c2 from '../../img/c2.png'
import c3 from '../../img/c3.png'
import style from './card.module.css'
import Button from 'react-bootstrap/Button'


const Cards=()=>{
    const lines = ["Charcoal Black Metal Card","2.15%1 Bonus Rate Checking Account","5% Cash back on brands you love","Free Cash Withdrawals","Phone & Chat Support"]
    const line2 =['Free Debit Card',"1.65%2 Bonus Rate Checking Account",'4% Cash back on brands you love','Free Cash Withdrawals','Phone & Chat Support']
    const line3 =['Free Debit Card','1.15%3 Bonus Rate Checking Account','3% Cash back on brands you love','Free Cash Withdrawals','Phone & Chat Support']
    const [tog,setTog] =useState(false)
    const [tog2,setTog2] =useState(false)
    const [tog3,setTog3] =useState(false)
    const toggle=()=>{
        setTog(!tog)
    }
    const toggle2=()=>{
      setTog2(!tog2)
  }
  const toggle3=()=>{
    setTog3(!tog3)
}

    return(
        <div className={style.main}>

            {/*------- 1st card ---------  */}
      
            {tog? <Card className={style.card}>
            <Card.Img className={style.c1}  variant="top" src={c1} onClick={()=>toggle()}/>
    <><Card.Body className={style.body1}>
    <h5 className={style.h}>METAL</h5>
    <h1 className={style.h2}>2.15%</h1>
    <h5 className={style.h3}><mark className={style.mark}>5%</mark> cash back</h5>
  </Card.Body>
  <Card.Body className={style.body2}>
      <div className={style.number}>
      <h5 className={style.n}>2223/<mark className={style.size}>2500 spots</mark></h5>
      <p className={style.s} >277 spots lefts</p>
      </div>
      <div className={style.div}><div className={style.div2}></div></div>
      <Button className={style.button}>Sign up now</Button>
  </Card.Body>
  <Card.Body className={style.body2}>
      <h4 className={style.head}>INCLUDES</h4>
      {lines?lines.map(l=>{return(
          <h5 className={style.line}><i class="fa fa-check" aria-hidden="true" style={{color:'green',padding:'5px'}}></i>{l}</h5>
      )}):''}
      <p>Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
  </Card.Body>
  <Card.Body className={style.body1}>
    <h5 className={style.f}><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;$11.99/m Membership Fee</h5>
    <h1 className={style.f1}>Free for 6 months</h1>
    <h5 className={style.f2}>~$72 Savings</h5>
  </Card.Body>
  </>
  
</Card>
:<Card className={style.cards}>
   <Card.Img className={style.cc}  variant="top" src={c1} onClick={()=>toggle()}/>
   <h5 className={style.h}>METAL</h5>
  </Card>}

{/* -------2nd card --------- */}

{tog2?<Card className={style.card2}>
        <Card.Img className={style.c1} variant="top" onClick={()=>toggle2()} src={c2} />
  <Card.Body className={style.body22}>
    <h5 className={style.h}>PREMIUM</h5>
    <h1 className={style.h22}>1.65%</h1>
    <h5 className={style.h3}><mark className={style.mark2}>4%</mark> cash back</h5>
  </Card.Body>
   <Card.Body className={style.body2}>
      <div className={style.number}>
      <h5 className={style.s}>2000 spots</h5>
      <p className={style.s} >2000 spots lefts</p>
      </div>
      <div className={style.div}></div>
      <Button className={style.button2} disabled>Up Next</Button>
  </Card.Body> 
  <Card.Body className={style.body2}>
      <h4 className={style.head}>INCLUDES</h4>
      {line2?line2.map(l=>{return(
          <h5 className={style.line}><i class="fa fa-check" aria-hidden="true" style={{color:'grey',padding:'5px'}}></i>{l}</h5>
      )}):''}
      <p>Fund your account with a minimum opening deposit of $500. 2 additional free ATM withdrawals per month from out of network ATMs.</p>
  </Card.Body>
  <Card.Body className={style.body13}>
    <h5 className={style.f22}><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;$6.99/m Membership Fee</h5>
    <h1 className={style.f12}>Coming soon</h1>
  </Card.Body>
</Card>:<Card className={style.cards}>
  <Card.Img className={style.cc}  variant="top" src={c2} onClick={()=>toggle2()}/>
  <h5 className={style.h}>PREMIUM</h5>
  </Card>}

{/* --------card3--------- */}


{tog3?<Card className={style.card2}>
        <Card.Img className={style.c1} variant="top" onClick={()=>toggle3()} src={c3} />
  <Card.Body className={style.body22}>
    <h5 className={style.h}>BASIC</h5>
    <h1 className={style.h22}>1.15%</h1>
    <h5 className={style.h3}><mark className={style.mark2}>3%</mark> cash back</h5>
  </Card.Body>
   <Card.Body className={style.body2}>
      <div className={style.number}>
      <h5 className={style.s}>1000 spots</h5>
      <p className={style.s} >1000 spots lefts</p>
      </div>
      <div className={style.div}></div>
      <Button className={style.button2} disabled>Coming soon</Button>
  </Card.Body> 
  <Card.Body className={style.body2}>
      <h4 className={style.head}>INCLUDES</h4>
      {line2?line2.map(l=>{return(
          <h5 className={style.line}><i class="fa fa-check" aria-hidden="true" style={{color:'grey',padding:'5px'}}></i>{l}</h5>
      )}):''}
      <p className={style.p}>Fund your account with a minimum opening deposit of $0.</p>
  </Card.Body>
  <Card.Body className={style.body13}>
    <h5 className={style.f22}><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;&nbsp;No Membership Fee</h5>
    <h1 className={style.f12}>Free Forever</h1>
  </Card.Body>
</Card>:<Card className={style.cards}>
  <Card.Img className={style.cc}  variant="top" src={c3} onClick={()=>toggle3()}/>
  <h5 className={style.h}>BASIC</h5>
  </Card>}

</div>
    )
}
export default Cards;