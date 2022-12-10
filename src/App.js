import './App.css';
import { useState } from 'react'

function App() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('')

  let x = setInterval(function () {

    let now = new Date()
    let year=2022
    let month = now.getMonth()
    if(month===0)
    {
        year = now.getFullYear()+1;
    }


    let comingDate = new Date(`${month+1} 31, ${year} 13:12:00`)
    // let now = new Date()
    let selisih = comingDate.getTime() - now.getTime()

    setDays(Math.floor(selisih / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    setMinutes(Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)))
    setSeconds(Math.floor(selisih % (1000 * 60) / 1000))

    if (selisih < 0) {
      clearInterval(x)
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }


  }, 1000)

  const formhandler = (e) => {
    setEmail(e.target.value)
    if (e.target.value === '') {
      setAlert("* This is required field")
    }else if(!/^\S+@\S+\.\S+$/.test(e.target.value)){
      setAlert("Email Must Contain @ and .")
    }else{
      setAlert("")
    }

  }

  const reset = () => {
    setEmail("")
  }

  return (
    <>
      <div class="page">
        <div class="countdown-col col">
          <div class="time middle">
            <span><div id="days">{days}</div> Days</span>
            <span><div id="hours">{hours}</div> Hours</span>
            <span><div id="minutes">{minutes}</div> Minutes</span>
            <span><div id="seconds">{seconds}</div> Seconds</span>
          </div>
        </div>
        <div class="newsletter-col col">
          <div class="newslatter middle">
            <h1>Nature's Glance</h1>
            <h2>We Will Coming Soon</h2>
            <h4>Subscribe to get notification when we start</h4>
            <form>
              <input type="text" value={email} placeholder="Enter Your Email" onChange={formhandler} />
              <span style={{color:"red" , fontSize:"13px"}}>{alert}</span>
              <button type="button" class="newslatter-button" onClick={reset}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
