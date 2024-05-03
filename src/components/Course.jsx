import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4'>
            <div className='pt-28 justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>
                    We're delighted to have you{" "} 
                    <span className='text-pink-500'> Here! :)</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus officiis at dolore quisquam rem eaque sit necessitatibus, deserunt doloremque, quia hic laborum dignissimos, temporibus adipisci dolorem dolorum. Perferendis, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime quidem nihil, beatae repudiandae quis corrupti est ducimus eligendi culpa.
                </p>
                <Link to="/">
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
              {
               list.map((item) => (
                  <Cards key={item.id} item={item} />
               ))
              }
            </div>
      </div>
    </div>
    </>
  )
}

export default Course
