import MobileHeader from "@/components/Header/MobileHeader";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import Footer from "@/components/Footer/Footer";
import DeskTopPhotoItem from "./_component/DeskTopPhotoItem";
import MobilePhotoItem from "./_component/MobilePhotoItem";

export default function PhotoItem() {
  return (
    <div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block">
        <DeskTopHeader />
      </div>
      <div className="block lg:hidden">
        <MobilePhotoItem />
      </div>
      <div className="hidden lg:block">
        <DeskTopPhotoItem />
      </div>
      <Footer />
    </div>
  );
}
