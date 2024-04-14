import getHotel from "@/libs/getHotel";
import { PromotionProps } from "../../../@types/type";
import PromotionCard from "./PromotionCard";

export default function PromoitionPopUp(props: {
  show: boolean;
  setShow: (show: boolean) => void;
  promotions: PromotionProps[];
}) {
  console.log(props.promotions);
  return (
    <div
      className={`absolute  px-2 space-y-2 py-1 -left-16 top-10 rounded-lg  bg-white  w-72     shadow-lg ${
        props.show ? " visible" : "hidden"
      }`}
    >
      {props.promotions.map((promotion, index) => {
        return (
          <PromotionCard
            promotion={promotion}
            hotel={promotion.hotelInfo}
            key={index}
          ></PromotionCard>
        );
      })}
    </div>
  );
}