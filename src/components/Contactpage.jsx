import React from 'react'
import { useForm } from "react-hook-form"


function Contactpage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content ">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold mb-4 ">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* USERNAME */}
            <div className='mt-4 space-y-2'>
                <span className='font-semibold'>Name</span>
                <br/>
                <input type='text' placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("name",{ required: true})} />
            <br/>
                {errors.name && <span className='text-sm text-red-500' >This field is required</span>}                
 
            </div>
               {/* EMAIL */}
            <div className='mt-4 space-y-2'>
                <span className='font-semibold'>Email</span>
                <br/>
                <input  type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                {...register("email",{ required: true})} />
                <br/>
                {errors.email && <span className='text-sm text-red-500' >This field is required</span>}                
            </div>
            {/* MESSAGE */}
            <div className='mt-4 space-y-2'>
                <span className='font-semibold'>Message</span>
                <br/>
                <input type='text' placeholder='Type your message' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                {...register("message",{ required: true})} />
                </div>

        <button className="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contactpage
