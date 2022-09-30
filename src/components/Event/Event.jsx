import React from "react";

const Event = () => {
  return (
    <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse my-20 md:justify-center md:items-center ">
      <div className="md:text-start my-20">
        <h1 className="text-4xl font-bold">Birthday Bash</h1>
        <p className="text-[#828282]">
          Hosted by <span className="font-bold"> Elysia</span>
        </p>
        <div>
          icon. 18 August 6:00PM
          <p>to 19 August 1:00PM UTC+10</p>{" "}
        </div>
        <div>
          incon Street name
          <p>Suburb, State, Postcode</p>
        </div>
        <div></div>
      </div>
      <div className="">
        <img
          className="w-96"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T085604Z&X-Amz-Expires=86400&X-Amz-Signature=dbd3d7abf99f595d001776b8b403647bdfb2cd329d87364b5904d4787412ecd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="birthday"
        />
      </div>
    </div>
  );
};

export default Event;
