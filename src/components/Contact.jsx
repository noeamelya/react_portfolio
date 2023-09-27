import React from 'react';

const Contact= () => {
  return (
    <div id="Contact" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500" >Contact Me</h1>
        <form action="" className="flex flex-col gap-2 lg:w-1/2 ">
            <div className="flex lg:flex-row flex-col gap-6">
                <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 text-white" placeholder="Enter your name " type="text" />
                <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 text-white" placeholder="Enter your email " type="text" />
            </div>
            <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 text-white" placeholder="Write your message" name="" id="" cols="30" rows="10"></textarea>
            <button className="neno-button shadow-x1 hover:shadow-fuchsia-800 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-500 rounded-lg py-1 px-2 relative overflow-hidden" type="submit">Submit</button>

        </form>

    </div>
  )
}

export default Contact;
