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
      <Footer />;
    </>
  );
}
