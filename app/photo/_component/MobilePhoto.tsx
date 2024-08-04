import MobileHeader from "@/components/Header/MobileHeader";
import LeftTextPhotoTemplete from "./_component/LeftTextPhotoTemplete";
import RightTextPhotoTemplete from "./_component/RightTextPhotoTemplete";
import CenterTextPhotoTemplate from "./_component/CenterTextPhotoTemplete";

export default function MobilePhoto() {
  return (
    <div>
      <MobileHeader />
      <div>
        <div className="w-[90%] mx-auto pt-10 flex flex-row items-center justify-around text-primary font-pre text-sm sm:text-lg font-medium">
          {["Home", "SERVICE", "PORTFOLIO", "PHOTO", "CONTACT"].map(
            (item, index) => (
              <button
                key={item}
                type="button"
                className={`border ${
                  index === 1
                    ? "border-primary bg-primary text-black"
                    : "border-priumary"
                } rounded-2xl p-2 whitespace-nowrap`}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <p className="my-16 font-roboto text-primary text-center text-[55px] font-extrabold">
          Photo
        </p>
      </div>
      <LeftTextPhotoTemplete />
      <RightTextPhotoTemplete />
      <CenterTextPhotoTemplate />
    </div>
  );
}
