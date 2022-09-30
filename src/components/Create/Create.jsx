import React from "react";

const Create = () => {
  return (
    <div className="card w-96 mx-auto my-20 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">Create Event</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Event Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Event Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Event Location</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mx-auto my-5">Create Event</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
