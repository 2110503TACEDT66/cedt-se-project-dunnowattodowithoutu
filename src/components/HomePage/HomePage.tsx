import getHotels from "@/libs/getHotels";
import { HotelList } from "./HotelList";
import { MenuBox } from "./MenuBox/MenuBox";
import { SearchBar } from "./SearchBar";
import Image from "next/image";

export async function HomePage() {
  const hotels = await getHotels();
  return (
    <div>
      <div className="px-[10%] mt-20  relative z-10 text-center ">
        <p className=" text-3xl font-semibold text-white ">
          Welcome to REST GO. We will get you to rest in piece.
        </p>
        <SearchBar></SearchBar>
        <MenuBox></MenuBox>
        <HotelList HotelData={hotels}></HotelList>
      </div>
      <div className=" overflow-hidden h-96 w-full bg-black z-0 absolute left-0 top-0">
        <Image
          src={"/img/homepage.png"}
          alt="hotelhomepage"
          objectFit="cover"
          layout="fill"
          className=" opacity-[0.87]"
        ></Image>
      </div>
    </div>
  );
}
