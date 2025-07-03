import React from 'react'
import { useState } from 'react'

export default function FormApp() {

 const [formData,setFormData]=useState({name:'',email:'',message:''}); 
 const [submitted,setSubmitted]=useState(null);
 
 const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(formData);
    setFormData({name:'',email:'',message:''});
 }

 const handleChange=(e)=>{
 const { name,value } = e.target;
   console.log(name, value); // Add this
 setFormData(prev=>({...prev,[name]:value}))
 }

 return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Submit
          </button>
        </form>

        <pre className="bg-gray-50 p-4 mt-4 text-sm text-gray-700 rounded-lg">{JSON.stringify(formData, null, 2)}</pre>

        {submitted && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-md">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Message:</strong> {submitted.message}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}
