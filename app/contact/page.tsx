import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "../../components/Footer/Footer";
import DeskTopContact from "./_component/DeskTopContact";
import MobileContact from "./_component/MobileContact";

export default function Contact() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileContact />;
      </div>
      <div className="hidden lg:block">
        <DeskTopContact />
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
