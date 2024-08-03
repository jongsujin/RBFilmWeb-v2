import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "@/components/Footer/Footer";
import DeskTopPortfolio from "./_component/DeskTopPortfolio";
import MobilePortfolio from "./_component/MobilePortfolio";

export default function Portfolio() {
  return (
    <>
      <div className="block lg:hidden">
        <MobilePortfolio />
      </div>
      <div className="hidden lg:block">
        <DeskTopPortfolio />
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
