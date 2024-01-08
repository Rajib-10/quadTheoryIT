import image2 from "../../src/assets/Image2.png";
import { FaArrowRight ,FaGoogle,FaTwitter,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F99F1C] ">
      <div className=" lg:w-[80%] mx-auto mt-[120px]">
        <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* text  */}
          <div className="lg:w-1/2 p-2">
            {/* input  */}
            <div>
              <div className="max-w-md mx-auto rounded-lg overflow-hidden ">
                <div className="md:flex">
                  <div className="w-full py-3">
                    <div className="relative">
                      {" "}
                      <input
                      placeholder="Enter Your Email"
                        type="text"
                        className="bg-white h-10 w-full  px-4 pr-20 rounded-[4px] lg:rounded-2xl focus:outline-none hover:cursor-pointer"
                        name=""
                      />
                      <button className="flex  items-center gap-2 h-8 rounded-xl lg:bg-[#FD6011] absolute top-1 text-sm right-2 px-4
                      text-[#FD6011] lg:text-white font-medium ">
                        Subscribe <FaArrowRight />
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="ml-8 font-bold">
                <div>
                <h1 className="text-2xl text-center lg:text-left font-bold mt-8 ">Pti <span className="text-[#FD6011]">.</span></h1>
                    <p className="text-sm  font-medium ">Copyright&copy;Tripp.All Right Reserved</p>
                </div>
                </div>

                <div className="flex items-center gap-1 cursor-pointer mt-8">
                    <div className="bg-[#FD6011] lg:bg-white rounded-full p-[10px] lg:mt-[30px] text-white lg:text-[#FD6011]">
                    <FaGoogle />
                    </div>
                    <div className="bg-[#FD6011] lg:bg-white rounded-full p-[10px] lg:mt-[30px] text-white lg:text-[#FD6011]">
                    <FaTwitter />
                    </div>
                    <div className="bg-[#FD6011] lg:bg-white rounded-full p-[10px] lg:mt-[30px] text-white lg:text-[#FD6011]">
                    <FaInstagram />
                    </div>
                </div>
            </div>

          </div>
          {/* image */}
          <div className="lg:w-1/2 hidden lg:block">
            <img className="h-[400px]" src={image2} alt="food" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
