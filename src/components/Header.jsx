import React from 'react'
import { Link, NavLink } from 'react-router-dom';

// ================ HEADER DATA ============
const headerData = [
    {
        path:'/',
        name:'home',
    },
    {
        path:'/statics',
        name:'statics',
    },
    {
        path:'/jobs',
        name:'applied jobs',
    },
    {
        path:'/blog',
        name:'blog',
    },
]

const Header = () => {
    const li = headerData.map((item)=><li><NavLink to={`${item.path}`} className={({isActive})=>isActive?'active':'default'}>{item.name}</NavLink></li>)
  return (
    <div className='w-full my-3'>
      <div className='flex items-center justify-between container mx-auto w-[90%]'>
        <h1 className='text-2xl font-semibold'>SimplyHired</h1>
        <ul className='flex gap-3 capitalize md:text-lg md:gap-5'>{li}</ul>
        <button className='gradient'>Start Applying</button>
      </div>
    </div>
  );
}

export default Header