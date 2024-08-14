import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col border-grey-100 border-2 shadow-md rounded-md items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-black p-8 pt-7 bg-[white] rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[black] bg-[#9593d2] px-3 py-3 w-full h-full rouned-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox