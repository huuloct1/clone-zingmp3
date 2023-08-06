import React from 'react'
import icons from '../ultis/icons'
import loginLogo from '../assets/Login-Logo.png'

const { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } = icons

const Header = () => {
  return (
    <>
      <div className='left'>
        <div className='direction'>
          <button type='button' className='button-back'>
            <AiOutlineArrowLeft size={21} />
          </button>
          <button type='button' className='button-go-ahead'>
            <AiOutlineArrowRight size={21} />
          </button>
        </div>
        <div className='search'>
          <AiOutlineSearch size={24} />
          <input type='text' placeholder='Tim kiem...' />
        </div>
      </div>
      <div className='right'>
        <img src={loginLogo} />
      </div>
    </>
  )
}
export default Header
