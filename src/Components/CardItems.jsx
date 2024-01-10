import React from 'react'
import bitmap from '../assets/Bitmap.png'
import mapIcon from '../assets/003-pin.svg'
import twitter from '../assets/004-twitter.svg'
import office from '../assets/001-office-building.svg'
import linkIcon from '../assets/002-url.svg'
import {format,parseISO} from 'date-fns'


const CardItems = ({githubUser}) => {
  return (
    <div className='flex lg:[45%] md:[60%] w-full flex-col bg-white dark:bg-[#1E2A47]  rounded p-6 shadow' >
        <div className='flex gap-5 w-full'>
        <span className='w-[20%]'>
            {
                githubUser?.avatar_url ?  <img src={githubUser?.avatar_url} alt="bitmap" className='rounded-full ' /> :
                <img src={bitmap} alt="bitmap" className='rounded-full ' />
            }
        </span>
            <div className='w-full flex gap-2 justify-between items-start'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[24px] text-black dark:text-[#FFFFFF] font-bold font-spaceMono m-0 p-0'>
                        {githubUser?.login === null ? "The Octocat": githubUser?.login}
                    </h1>
                    <h4 className='text-[14px] text-primaryBlue font-spaceMono m-0 p-0'>@{githubUser?.login}</h4>
                </div>
                <h4 className='text-[13px] text-gray-100 m-0 font-spaceMono mt-2'>

                    {/* Joined {format(parseISO(githubUser?.created_at),'d MMM yyyy')} */}
                {/* Joined {githubUser?.created_at} */}
                </h4>
            </div>
        </div>
        <div className='justify-end flex'>
            <p className='text-gray-200 dark:text-[#FFFFFF] text-[13px] font-spaceMono font-normal w-[80%] p-0 m-0'>
                { 
                githubUser?.bio === null ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.": githubUser?.bio   
                }   
            </p>
        </div>
        <div className='flex flex-col gap-4 mt-8 lg:w-[80%] w-full self-end'>
            <div className='flex justify-between bg-[#F6F8FF] dark:bg-[#141D2F] p-2 '>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-[13px] text-gray-200 dark:text-[#FFFFFF]'>Repo</h4>
                    <p className='font-bold font-spaceMono text-[15px] text-black dark:text-[#FFFFFF]'>
                        {githubUser?.public_repos === null ? '0' : githubUser?.public_repos}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-[13px] text-gray-200 dark:text-[#FFFFFF] '>Following</h4>
                    <p className='font-bold font-spaceMono text-[15px] text-black dark:text-[#FFFFFF]'>
                        {githubUser?.following === null ? '0' : githubUser?.following}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-[13px] text-gray-200 dark:text-[#FFFFFF]'>Followers</h4>
                    <p className='font-bold font-spaceMono text-[15px] text-black dark:text-[#FFFFFF]'>
                        {githubUser?.followers === null ? '0' : githubUser?.followers}</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 grid-cols-1 mt-5'>
                <div className='flex gap-2 items-center'>
                    <span><img src={mapIcon} alt="" /></span>
                    <p className='text-gray-200 dark:text-[#FFFFFF] text-bold font-spaceMono text-[13px]'>
                        {githubUser?.location === null ? 'Not available' : githubUser?.location }</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <span><img src={twitter} alt="" /></span>
                    <p className='text-gray-200 dark:text-[#FFFFFF] text-bold font-spaceMono text-[13px]'>
                        {
                            githubUser?.twitter_username === null ? 'Not available' : githubUser?.twitter_username
                        }
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <span><img src={linkIcon} alt="" /></span>
                    <p className='text-gray-200 dark:text-[#FFFFFF] text-bold font-spaceMono text-[13px]'>
                        {githubUser?.blog === "" ? 'Not available' : githubUser?.blog}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <span><img src={office} alt="" /></span>
                    <p className='text-gray-200 dark:text-[#FFFFFF] text-bold font-spaceMono text-[13px]'>
                        @{githubUser?.company}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardItems