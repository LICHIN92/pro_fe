//  import React from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"

// const userSchema = yup.object({
//     firstName: yup.string().required().min(1),
//     lastName: yup.string().required().min(3),
//     email:yup.string().required(),
//     password:yup.string().required().min(6)
//   })

// const Signup = () => {
//     const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(userSchema)})
//     const onSubmit = (data) => console.log(data)

//     return (
//         <div className=' flex justify-center items-center h-screen col flex-col'>
//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3 p-8 shadow-md'>
//                 <input  {...register("FirstName")} placeholder='First Name' className=' px-1.5 py-1 border rounded-md text-black'/>
//                 {/* {errors.firstName?.message && <p className=' text-red-500 text-sm'>{errors.firstName?.message}</p>} */}
//                 {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
//                 {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}

//                 <input  {...register("LastName")} placeholder='Last Name' className=' px-1.5 py-1 border rounded-md text-black'/>
//                 <input  {...register("Email")} placeholder='Email' className=' px-1.5 py-1 border rounded-md text-black'/>
//                 <input  {...register("Password")} placeholder='Password' type='password' className=' px-1.5 py-1 border rounded-md text-black'/>
//                 {/* <input type="file" {...register("file")} className=' px-1.5 py-1 border rounded-md text-gray-100'/> */}

//                 {/* {errors.exampleRequired && <span>This field is required</span>} */}

//                 <input type="submit" className=' rounded-md text-white bg-blue-500 hover:bg-blue-600'/>

//             </form>
//         </div>
//     )
// }

// export default Signup


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const userSchema = yup.object({
  firstName: yup.string().required().min(1),
  lastName: yup.string().required().min(1),
  email: yup.string().required(),
  password: yup.string().required().min(6)
});

const Signup = () => {
  const[formdata,setFormdata]=useState()

  useEffect(()=>{
    axios.post('http://localhost:3001/api/v1/user/signup',formdata)
    .then(res=>{
      alert(res.data)
    })
    // Signup
  },[formdata])

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema)
  });

  const onSubmit = (data) => {
    setFormdata(data)
    console.log(data);
  };

  return (
    <div className='flex justify-center items-center h-screen col flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3 p-8 shadow-md'>
        <h3 className=' text-center'>Sign Up</h3>

        <input {...register("firstName")} placeholder='First Name' className='px-1.5 py-1 border rounded-md text-black' />
        {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
        <input {...register("lastName")} placeholder='Last Name' className='px-1.5 py-1 border rounded-md text-black' />
        {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
        <input {...register("email")} placeholder='Email' className='px-1.5 py-1 border rounded-md text-black' />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        <input {...register("password")} placeholder='Password' type='password' className='px-1.5 py-1 border rounded-md text-black' />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
        <input type="submit" className='rounded-md text-white bg-blue-500 hover:bg-blue-600' />
      </form>
    </div>
  );
};

export default Signup;
