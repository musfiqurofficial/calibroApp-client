import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const SRFFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const srfForm = {
      srfNo: data.srfno,
      customerName: data.customername,
      address: data.address,
      contactPerson: data.contactperson,
      phoneNo: data.phoneno,
      mobileNo: data.mobileno,
      email: data.email,
    };
    fetch("https://demo-create-server.vercel.app/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(srfForm),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(`${data.srfno} is added!`);
        reset();
      });
  };

  return (
    <div className="w-10/12 mx-auto text-center">
      <div>
        <h4 className="text-2xl font-bold mb-6 text-lime-700">
          Service Request Form
        </h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <div className="form-control">
            <label className="input-group rounded-none input-sm p-0">
              <span className="bg-lime-600 text-white rounded-none">SRFNo</span>
              <input
                type="text"
                {...register("srfno", { required: true })}
                placeholder=""
                className="input rounded-none mb-3 input-bordered input-sm w-full max-w-xs"
                value={10}
              />
            </label>
          </div>

          <input
            type="text"
            {...register("customername", { required: true })}
            placeholder="Customer Name"
            className="input rounded-none mb-3 input-bordered border-lime-600 input-sm w-full max-w-xs col-span-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            {...register("address", { required: true })}
            placeholder="address"
            className="input rounded-none mb-3 input-bordered border-lime-600 input-sm w-full max-w-xs"
          />
          <input
            type="text"
            {...register("contactperson", { required: true })}
            placeholder="Contact Person"
            className="input rounded-none mb-3 input-bordered border-lime-600 input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-3">
          <div>
            <input
              type="text"
              {...register("phoneno", { required: true })}
              placeholder="Phone No"
              className="input rounded-none input-bordered border-lime-600 input-sm w-full max-w-xs border-b-0"
            />
            <input
              type="text"
              {...register("mobileno", { required: true })}
              placeholder="Mobile No"
              className="input rounded-none mb-3 input-bordered border-lime-600 input-sm w-full max-w-xs"
            />
          </div>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email ID"
            className="input rounded-none mb-3 input-bordered border-lime-600 input-lg w-full max-w-xs"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-400 hover:bg-amber-600 text-sm text-white mt-5 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SRFFrom;
