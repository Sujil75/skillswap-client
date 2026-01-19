import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='w-[100%] flex justify-center'>
        <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#1455ce"
            ariaLabel="three-dots-loading"
            wrapperClass="custom-loader"
            visible={true}
        />
    </div>
  )
}

export default Loader