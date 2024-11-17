import { Sidebar } from "flowbite-react"
import { HiUser, HiArrowSmRight } from "react-icons/hi"
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    console.log('tabFromUrl:', tabFromUrl);
    if (tabFromUrl) setTab(tabFromUrl)
  }, [location.search])
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item 
              active={tab === 'profile'}
              icon={HiUser} 
              label={'User'} 
              labelColor='dark' 
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to='/sign-out'>
            <Sidebar.Item 
              active={tab === 'sign-out'}
              icon={HiArrowSmRight}
              className='cursor-pointer'
            >
              Sign Out
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
