import React, { useState } from 'react';

import BlurCircle from './BlurCircle';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DateSelect = ({ dateTime, id }) => {

    const navigate =useNavigate();

const [selectedDate, setSelectedDate] = useState(null);
const onBookHandler = () => {
  if (!selectedDate) {
    return toast("please select a date");
  }

navigate(`/movies/${id}/${selectedDate}`);
scrollTo(0, 0);

}
    // Navigate to the seat layout page with the selected date



  return (
    <div id="dateSelect" className="pt-30">
     <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border-primary/20 rounded-lg">
    
      <BlurCircle top="-100px" left="-100px" />
      <BlurCircle bottom="100px" right="0px" />

      <div>
        <p className="text-lg font-semibold">Choose Date</p>

        <div className="flex items-center gap-6 text-sm mt-5">
          <ChevronLeftIcon width={28} />

          <div className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
            {Object.keys(dateTime).map((date) => (
              <button onClick={() => setSelectedDate(date)}
                key={date}
                className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer bg-white/10 hover:bg-white/20 transition  ${selectedDate === date ? 'bg-primary text-black' : 'text-white border border-primary/70'}`}
              >
                <span>{new Date(date).getDate()}</span>
                <span>
                  {new Date(date).toLocaleDateString('en-us', {
                    month: 'short',
                  })}
                </span>
              </button>
            ))}
            </div>
       
          <ChevronRightIcon width={28} />
        </div>
      </div>

      <button onClick={onBookHandler} className="px-6 py-3 bg-primary text-black rounded-md font-medium hover:opacity-90 transition active:scale-95">
        Book Now
      </button>
    </div>
    </div>
  );
};

export default DateSelect;
