import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };

    return (
        <div>
        <h1 className="py-3 text-center text-right">Make A Admin</h1>
    
    <div className="border border-info w-50 p-5 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} >
           
           
            <input 

               defaultValue="" 
               {...register("email") } 
               type="email" 
               class="form-control"
               placeholder="Email" 
               
               />
               <br/>
            <input 

               defaultValue="" 
               {...register("password") } 
               type="password" 
               class="form-control"
               placeholder="Password"
               
               />
            
            <br/>
           
            
            <input type="submit"  className="btn btn-danger px-4" />
        </form>
        </div>
    </div>
    );
};

export default MakeAdmin;