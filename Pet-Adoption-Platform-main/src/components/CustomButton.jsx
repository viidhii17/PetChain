import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold hover:bg-opacity-80 hover:scale-105 text-[16px] leading-[26px] text-white min-h-[52px] px-9 rounded-[10px] ${styles}`}
      onClick={handleClick}
     
    >
      {title}
    </button>
  )
}

export default CustomButton