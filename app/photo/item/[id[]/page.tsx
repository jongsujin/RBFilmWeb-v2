import MobileHeader from "@/components/Header/MobileHeader";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import DeskTopPhotoItem from "./_component/DeskTopPhotoItem";
import MobilePhotoItem from "./_component/MobilePhotoItem";
import Footer from "@/components/Footer/Footer";

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
