import React from 'react'
import { Footer, Navbar } from '../../components'

const Barcode = () => {
  return (
    <>
      <Navbar />
      <main className='container-fluid w-100 h-100 justify-content-center align-items-center'>
        <h2 className='text-center'>
          Scan this barcode to proccess the payment
        </h2>
        <img src='' alt='barcode' />
        <div className='d-flex justify-content-between'>
          <button className='btn btn-purple text-white'>Link to Gopay App</button>
          <button className='btn btn-danger'>Cancel</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Barcode
