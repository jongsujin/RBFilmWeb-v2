import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "@/components/Footer/Footer";
import DeskTopService from "./_component/DeskTopService";
import MobileService from "./_component/MobileService";

export default function Service() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileService />
      </div>
      <div className="hidden lg:block">
        <DeskTopService />
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
