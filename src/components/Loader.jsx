import React from 'react'
import { ThreeDots } from 'react-loader-spinner';

const Loader = props => {
  const {color, size} = props

  return (
    <div className='w-[100%] flex justify-center'>
        <ThreeDots
            height={size}
            width={size}
            radius="9"
            color={color}
            ariaLabel="three-dots-loading"
            wrapperClass="custom-loader"
            visible={true}
        />
    </div>
  )
}

export default Loader