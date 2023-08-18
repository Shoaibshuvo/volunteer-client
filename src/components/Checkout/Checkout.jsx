import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, img, title, description } = service;

  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const work = form.work.value;
    const description = form.description.value;
    const booking = { name, email, img, date, work, description };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };
  return (
    <>
      <div className="rounded-xl w-96 mx-auto mt-20 shadow-2xl bg-base-100">
        <div className="card-body">
          <p className="text-center font-bold text-3xl py-5">
            Register as a Volunteer
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                name="date"
                type="text"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Work</span>
              </label>
              <input
                name="work"
                type="text"
                defaultValue={title}
                placeholder="work"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description </span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                defaultValue={description}
                placeholder="description"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
