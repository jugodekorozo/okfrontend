import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import confused from '../../assests/img/confused.jpg'

const NotFoundPage = () => {
  const [visible, setVisible] = useState(true)
  const [leftTime, setLeftTime] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      if (leftTime > 0) setLeftTime(leftTime - 1)
      if (leftTime === 0) setVisible(false)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [leftTime])

  return (
    <>
      <div>HOLA MUNDO ESTOY EN EL NOT FOUND PAGE</div>
      <img src={confused} alt='Travolta' />
      <div>
        <span>Left time: {leftTime}</span>
      </div>
      <button onClick={() => setVisible(false)}>Home</button>
      {!visible && <Navigate replace to='/' />}
    </>
  )
}
export default NotFoundPage
