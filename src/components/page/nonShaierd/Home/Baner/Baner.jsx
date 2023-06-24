
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Baner = () => {
  return (
    <div className="py-1">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[500px]  bg-[url('https://cdn.shopify.com/s/files/1/0605/0480/1480/files/petsdf.jpg?v=1641792457')] bg-center bg-cover text-white text-center bg-black bg-opacity-50 ">
              {" "}
              <h1 className="text-7xl font-medium pt-28">SUPPORT OUR CAUSE</h1>
              <div className="px-14">
                <p className="py-10 text-2xl ">
                  With every purchase of yours, a tiny percentage is used to
                  deliver meals and shelter to abandoned pets. Your support
                  means the world to us and our pawtistic friends
                </p>
              </div>
              <button className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-7 rounded">
                <div className="flex justify-center items-center gap-2 text-xl">
                  <span>Our Charity Cause</span>
                  <span>
                    <AiOutlineDoubleRight />
                  </span>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[500px] bg-[url('https://cdn.shopify.com/s/files/1/0605/0480/1480/files/image.jpg?v=1643176347')] bg-center bg-cover text-white text-center  bg-opacity-50">
              <h1 className="text-7xl font-medium pt-28">TINY PAWS OFFICIAL</h1>
              <p className="py-10 text-2xl">
                Make your pets life Easier, Safer and Better{" "}
              </p>
              <button className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-7 rounded">
                <div className="flex justify-center items-center gap-2 text-xl">
                  <span>Shop now</span>
                  <span>
                    <AiOutlineDoubleRight />
                  </span>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[500px] bg-[url('https://cdn.shopify.com/s/files/1/0605/0480/1480/files/image_1.jpg?v=1643176440')] bg-center bg-cover text-white  text-center  bg-opacity-50">
              <h1 className="text-7xl font-medium pt-28">
                THE TINY PAWS JOURNAL
              </h1>
              <p className="py-10 text-2xl">
                Everything you need to know about your furry friends.
              </p>
              <button className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-7 rounded">
                <div className="flex justify-center items-center gap-2 text-xl">
                  <span>Enter Blog</span>
                  <span>
                    <AiOutlineDoubleRight />
                  </span>
                </div>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center bg-black text-white py-4">
        <h1>FREE SHIPPING WORLDWIDE</h1>
      </div>
    </div>
  );
};

export default Baner;