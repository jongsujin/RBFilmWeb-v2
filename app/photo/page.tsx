// 모바일 포토 페이지
import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "@/components/Footer/Footer";
import MobilePhoto from "./_component/MobilePhoto";

export default function Photo() {
  return (
    <>
      <div>
        <MobilePhoto />
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
