import image1 from "../../src/assets/Image1.png"

const Banner = () => {
    return (
        <div className="lg:w-[80%] mx-auto mt-[120px] p-2 ">
            <div className="md:bg-[#F99F1C]  rounded-2xl flex flex-col md:flex-row text-center justify-center items-center">
                <div className="lg:w-1/2 text-black md:text-white lg:pl-20 space-y-4">
                  <h1 className="text-2xl md:text-4xl font-bold">Deliver Food To Your <br /> Door Step|</h1>
                  <p>Authentic Food|,Quick Service,Fast Delivery</p>
                </div>
                <div className="lg:w-1/2 lg:pr-10 bg-orange-300 md:bg-[#F99F1C] ">
                    <img src={image1} alt="food" />
                </div>
            </div>
        </div>
    );
};

export default Banner;