import React from "react";
import { FaCalendar, FaGreaterThan, FaSearchLocation } from "react-icons/fa";

const Event = () => {
  return (
    <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
      <div className="md:mx-auto sm:mx-auto md:ml-48 sm:ml-40 my-20">
        <h1 className="text-4xl font-bold">Birthday Bash</h1>
        <p className="text-[#828282]">
          Hosted by <span className="font-bold"> Elysia</span>
        </p>
        {/*  event date*/}
        <div className="flex flex-row mt-10">
          <div className="bg-white p-2 border h-1/2 rounded">
            <FaCalendar className="text-secondary text-2xl " />
          </div>

          <div className="ml-5">
            <h2 className="text-[#240D57] font-bold text-2xl">
              18 August 6:00PM
            </h2>
            <p>
              to{" "}
              <span className="text-[#4F4F4F] text-2xl font-bold">
                19 August 1:00PM
              </span>{" "}
              <span className="text-2xl">UTC+10</span>
            </p>{" "}
          </div>
          <div className="mt-5 ml-10 text-2xl text-[#4F4F4F]">
            <FaGreaterThan />
          </div>
        </div>
        {/* location */}
        <div className="flex flex-row ">
          <div className="flex mt-10">
            <div className="bg-white p-2 border h-1/2 rounded">
              <FaSearchLocation className="text-secondary text-2xl " />
            </div>

            <div className="ml-5">
              <h2 className="text-[#240D57] font-bold text-2xl">Street name</h2>
              <p className="text-[#4F4F4F] text-2xl">Suburb, State, Postcode</p>
            </div>
          </div>
          <div className="mt-14 ml-28 text-2xl text-[#4F4F4F]">
            <FaGreaterThan />
          </div>
        </div>
      </div>

      <div className="my-20 md:mx-auto sm:mx-auto md:ml-48 sm:ml-40">
        <img
          className="w-96 border-r-4"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T085604Z&X-Amz-Expires=86400&X-Amz-Signature=dbd3d7abf99f595d001776b8b403647bdfb2cd329d87364b5904d4787412ecd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="birthday"
        />
      </div>
    </div>
  );
};

export default Event;
