import React from "react";

const Contact = () => {
  return (
    <div className="wrapper py-10 h-full ">
      <div className="grid bg-white justify-center items-center mt-10 gap-5 p-16 w-1/2 mx-auto rounded-md">
        <div
          className="relative img flex flex-col justify-center items-center  h-36"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl text-center text-white font-medium z-[2]">
            Contact Us
          </h2>
          <p className="text-white z-[2]">Feel free to drop us a line below</p>
        </div>

        <form className=" w-full lg:w-[30rem]  flex flex-col justify-center  gap-5">
          <div className="form-control  grid ">
            <label
              htmlFor="name"
              className="text-black font-medium cursor-pointer"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Mike"
              readOnly
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="email"
              className="text-black font-medium cursor-pointer"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="example.com"
              readOnly
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="mobile"
              className="text-black font-medium cursor-pointer"
            >
              Phone Number:
            </label>
            <input
              required
              type="tel"
              id="mobile"
              placeholder="+8801xxxxxxx"
              onChange={(e) =>
                setFormdata({ ...formdata, mobile: e.target.value })
              }
              className="outline-none bg-transparent border border-gray-300 p-1 rounded-md"
            />
          </div>

          <div className="form-control grid">
            <label
              htmlFor="message"
              className="text-black font-medium cursor-pointer"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us What you want to know!"
              cols="20"
              rows="5"
              className="outline-none  border border-gray-300 p-1 rounded-md resize-none"
            />
          </div>

          <button
            role="link"
            className="uppercase bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
