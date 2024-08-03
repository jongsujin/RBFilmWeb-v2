import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "../../components/Footer/Footer";
import DeskTopHome from "./_component/DeskTopHome";
import MobileHome from "./_component/MobileHome";

export default function Home() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DeskTopHome />
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
