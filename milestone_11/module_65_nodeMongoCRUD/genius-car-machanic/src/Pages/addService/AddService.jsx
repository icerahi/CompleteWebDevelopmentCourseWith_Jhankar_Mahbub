import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios'
const AddService = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://thawing-hollows-80540.herokuapp.com/services',data)
    .then(res =>{
        if(res.data.insertedId){
            
            alert('added successfully!!')
            reset()
        }
    })

  };

  return (
    <div className="add-service">
      <h2>Please add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
         <input placeholder="Price" type="number" {...register("price")} />
         <input placeholder="Time" type="number" {...register("price")} />
        <input placeholder="img url" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
