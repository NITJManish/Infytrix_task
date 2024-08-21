import React from 'react'
import './home.css'
import toast from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

const Home = () => {

  return (
  <>
    <div className='loader'></div>
    <button onClick={notify}>Make me a toast</button>
    </>
  )
}

export default Home
