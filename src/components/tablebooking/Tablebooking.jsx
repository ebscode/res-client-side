import Aos from 'aos';
import React, { useEffect } from 'react';

const Tablebooking = () => {
    useEffect(()=>{

        Aos.init({duration: 1000});
    
    
    },[])
    return (
        <div data-aos="zoom-in-up">
          <section class="bg-white  dark:bg-[#1D232A]">
    <div class="  lg:max-w-4xl    px-6 py-16 mx-auto text-center">
        <h1 class="text-3xl font-bold mb-7 text-orange-500    dark:text-gray-100">Table Booking
</h1>


<div className='flex flex-col lg:flex-row gap-3'>
    
<div>
<div className="form-control">
  <div className="input-group">
    <select type='date' className="select w-60  select-bordered">
      <option disabled selected>4 people</option>
      <option>3 people</option>
      <option>5 people</option>
    </select>

  </div>
</div>
</div>


<div>

<div className="form-control">
  <div className="input-group">
  <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  </div>
</div>





</div>


<div>
<div className="form-control">
  <div className="input-group">
    <select type='date' className="select w-60  select-bordered">
      <option disabled selected>7.30 pm</option>
      <option>8.00 pm</option>
      <option>9.00 pm</option>
    </select>

  </div>
</div>
</div>

<div>

<div className="form-control">
  <div className="input-group">
  <button 
className='btn btn-accent text-white bg-orange-500 ml-3 hover:bg-orange-400 border-orange-400'>find table</button>
  </div>
</div>







</div>

</div>


    </div>
    
</section>
    
    
    </div>

       
    );
};

export default Tablebooking;




