import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'

const Signin = () => {
    const [formData,setFormData]=useState({})
    const UserSchema=yup.object({
        email:yup.string().required(),
        password:yup.string().required().min(6)
    })
    const { register,handleSubmit,formState:{errors} } = useForm({resolver:yupResolver(UserSchema)})
    const onsubmit=(data)=>{
        setFormData(data)
              console.log(data);
    }
    useEffect(()=>{
        try {
       const signin=axios.post("http://localhost:3001/api/v1/user/signin",formData)
       const data=signin.data
            
        } catch (error) {
            console.log((error));
        }
     

    },[formData])
    return (
        <div className=' flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col  gap-y-3 shadow-md py-4 p-8'>
                <h3 className=' text-center'>Sign In</h3>

                <input {...register("email", { required: true })} placeholder='Email' className='px-1.5 py-1 border rounded-md text-black' />
                <input {...register("password", { required: true })} type='password' placeholder='Password' className='px-1.5 py-1 border rounded-md text-black' />
                <input type="submit" className='rounded-md text-white bg-blue-500 hover:bg-blue-600 px-1.5 py-1'/>
            </form>

        </div>
    )
}

export default Signin


// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import axios from 'axios'

// const Signin = () => {
//     const [formData, setFormData] = useState({})
//     const UserSchema = yup.object({
//         email: yup.string().required(),
//         password: yup.string().required().min(6)
//     })
//     const { register, handleSubmit } = useForm({ resolver: yupResolver(UserSchema) })
//     const onSubmit = (data) => {
//         setFormData(data)
//         console.log(data);
//     }
//     useEffect(() => {
//         if (Object.keys(formData).length !== 0) {
//             axios.post("http://localhost:3001/api/v1/user/signin", formData)
//                 .then(res => {
//                     console.log(res.data);
//                     // Reset form after successful submission
//                     setFormData({});
//                 }).catch(err => {
//                     console.log(err);
//                 })
//         }
//     }, [formData])
//     return (
//         <div className=' flex justify-center items-center h-screen'>
//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3 shadow-md py-4 p-8'>
//                 <h3 className=' text-center'>Sign In</h3>

//                 <input {...register("email", { required: true })} placeholder='Email' className='px-1.5 py-1 border rounded-md text-black' />
//                 <input {...register("password", { required: true })} type='password' placeholder='Password' className='px-1.5 py-1 border rounded-md text-black' />
//                 <input type="submit" className='rounded-md text-white bg-blue-500 hover:bg-blue-600 px-1.5 py-1' />
//             </form>

//         </div>
//     )
// }

// export default Signin
