import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full bg-base-100">
      <div className="flex lg:flex-row-reverse md:flex-col sm:flex-col">
        <div className="my-auto lg:text-right md:text-center sm:text-center md:mx-auto sm:mx-auto mr-20">
          <h1 className="text-5xl font-bold md:mx-auto  ">
            Imagine if <br />
            <span className="text-primary">SnapChat</span>
            <br />
            had events.
          </h1>
          <p className="text-[#4F4F4F] lg:text-right mt-5">
            Easily host and share events with your friends <br /> across any
            social media.
          </p>
          <div className="lg:block my-10 md:hidden sm:hidden ">
            <Link
              to="/create"
              className="btn w-48 bg-gradient-to-r from-secondary to-accent border-none mb-20"
            >
              {" "}
              🎉 Create my event
            </Link>
          </div>
        </div>
        <div className="mx-auto lg:ml-48 my-20">
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T085554Z&X-Amz-Expires=86400&X-Amz-Signature=62a499939ddebed55046b9f95f0f64355a6578ccb8d92538402d8028efbe35c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt="event"
          />
        </div>
        <div className="lg:hidden md:mx-auto sm:mx-auto ">
          <Link
            to="/create"
            className="btn w-48 bg-gradient-to-r from-secondary to-accent border-none mb-20"
          >
            {" "}
            🎉 Create my event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
