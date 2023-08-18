import React from "react";

const BookingData = ({ booking, handleDelete }) => {
  const { _id, img, date, work } = booking;
  
  return (
    <>
      <div className="grid  grid-cols-3 lg:grid-cols-5 p-2 items-center  bg-base-100 shadow-xl gap-2">
        <figure className="lg:col-span-2">
          <img
            src={img}
            alt="Shoes"
            className="rounded"
          />
        </figure>
        <div className="lg:col-span-2">
          <h2 className="font-bold">{work}</h2>
          <p className="font-semibold">{date}</p>
        </div>
        <div className="">
            <button className="btn btn-primary" onClick={()=> handleDelete(_id)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default BookingData;
