import React from 'react'
import { Button } from 'primereact/button'
import './NotFound.css'
function NotFound() {
    function goToHome() {
        window.location.href = '/'  // Redirect to home page when button is clicked  
  
    }
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>صفحة غير موجودة</h2>
      <Button onClick={goToHome}>العودة للصفحة الرئيسية</Button>  
    </div>
  )
}

export default NotFound
