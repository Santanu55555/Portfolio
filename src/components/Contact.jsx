import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x1g2klh',
        'template_rot6434',
        form.current,
        'vHeViYdd2RQJ5G_cm'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Message successfully sent!')
        }
      )
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2" ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              required
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button   value="SEND" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
