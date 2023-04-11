import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/solid'
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
  const [showNav, setShowNav] = useState(false);

    const li = headerData.map((item)=><li><NavLink to={`${item.path}`} className={({isActive})=>isActive?'active':'default'}>{item.name}</NavLink></li>)
  return (
    <div className="w-full my-3 sticky top-0 z-10 bg-white/20 backdrop-blur-lg py-2">
      <div className="flex items-center justify-between my-container">
        <h1 className="text-2xl font-semibold">SimplyHired</h1>
        <ul className="gap-3 capitalize md:text-lg md:gap-5 hidden md:flex">
          {li}
        </ul>
        <div className="flex items-center">
          <button className="gradient hidden md:block">Start Applying</button>

          <Bars3BottomRightIcon
            className="w-8 cursor-pointer hover:text-blue-600 md:hidden"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>

      {/* =================Mobile Responsive================  */}
      <div
        className={`fixed ${
          showNav ? "top-12" : "-top-80"
        } left-0 w-full z-30 bg-white/80 backdrop-blur-lg text-center p-4 duration-300 shadow-md`}
      >
        <ul className="space-y-4 font-semibold uppercase">
          <span className="space-y-4" onClick={() => setShowNav(!showNav)}>
            {li}
          </span>

          <button className="gradient">Start Applying</button>
        </ul>
      </div>
    </div>
  );
}

export default Header