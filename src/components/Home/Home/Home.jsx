import React from "react";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <h1 className="text-center uppercase font-semibold text-3xl">
        I grow By helping people in need.
      </h1>
      {/* search  */}
      <div className="text-center mt-4">
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
      </div>

      {/* services */}
      <Services></Services>
      
    </>
  );
};

export default Home;
