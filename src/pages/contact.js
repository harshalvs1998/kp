import React,{useState} from 'react'
import { useForm } from '@formcarry/react';
import './contact.css'

 

function MyFormcarry() {
  // Call the `useForm` hook in your function component
  const {state, submit} = useForm({
    id: '9Krsdm3Jlly'
  });
 
  // Success message
  if (state.submitted) {
    return <div className='retunm'>
   <div className="retun2">Thank you! We received your submission.</div></div>;
  }
  
 
  return (
    <>
    <form onSubmit={submit} className='container3'>
       <h1 className="ch1">contact with us </h1>
        <label htmlFor="email" className='em'>Email</label>
        <input id="email" type="email" name="email"/> 
        <label htmlFor="message" className='mes'>Message</label>
        <textarea id="message" name="message" className='tmes'/>
        <label htmlFor="subject" className='sub'>subject</label>
        <textarea id="subject" name="subject" className='tsub'/> 
        <label htmlFor="Requirement" className='req'>Requirement</label>
        <textarea id="Requirement" name="Requirement" className='treq'/> 
           <span className="chen">

             plz write your  requirement like given below then we can send budget
             <ul>
          <li>Traditional photography</li>
           <li>traditional videography</li>
           <li>candid photography</li>
           <li>cinematic videography</li>
           <li>drone videography</li>
           <li>crane videography</li>
           </ul>
           </span>
       
        
        <button type="submit" className='btn btn-secondary'>Send</button>
    </form>
    </>
  );
}

export default  MyFormcarry
