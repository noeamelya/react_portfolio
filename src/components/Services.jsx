import React from 'react';

const Services= () => {
  return (
    <div ide="Services" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-020">
            <h2 className="text-[20px] flex items-center justify-center font-semibold text-fuchsia-500 uppercase rounded-3xl h-36 w-40 border-2 border-fuchsia-500" >HTML5</h2>
            <h2 className="text-[20px] flex items-center justify-center font-semibold text-fuchsia-500 uppercase rounded-3xl h-36 w-40 border-2 border-fuchsia-500" >CSS3</h2>
            <h2 className="text-[20px] flex items-center justify-center font-semibold text-fuchsia-500 uppercase rounded-3xl h-36 w-40 border-2 border-fuchsia-500" >Javascript</h2>
            <h2 className="text-[20px] flex items-center justify-center font-semibold text-fuchsia-500 uppercase rounded-3xl h-36 w-40 border-2 border-fuchsia-500" >React</h2>
        </div>
</div>
  );
}
  
export default Services;
