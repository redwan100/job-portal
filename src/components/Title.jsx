import React from 'react'

const Title = ({title,desc}) => {
  return (
    <div className='space-y-3'>
      <h1 className="text-center text-3xl font-semibold">{title}</h1>
      <p className='text-center text-gray-600 text-sm sm:text-base'>
        {desc}
      </p>
    </div>
  );
}

export default Title