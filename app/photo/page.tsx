// 모바일 포토 페이지
import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "@/components/Footer/Footer";
import MobilePhoto from "./_component/MobilePhoto";
import DeskTopPhoto from "./_component/DeskTopPhoto";

export default function Photo() {
  return (
    <>
      <div className="block lg:hidden">
        <MobilePhoto />
      </div>
      <div className="hidden lg:block">
        <DeskTopPhoto />
      </div>
      <div className="block lg:hidden">
        <Footer />
      </div>
      <div className="hidden lg:block lg:mt-72">
        <DeskTopFooter />
      </div>
    </>
  );
}
