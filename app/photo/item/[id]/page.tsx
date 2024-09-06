import MobileHeader from "@/components/Header/MobileHeader";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import Footer from "@/components/Footer/Footer";
import DeskTopPhotoItem from "./_component/DeskTopPhotoItem";
import PhotoItemTemplete from "../../_component/_component/PhotoItemTemplete";

export default function PhotoItem({ params }: { params: { id: number } }) {
  console.log("params sssId: ", params.id);
  return (
    <div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block">
        <DeskTopHeader />
      </div>
      <div className="block lg:hidden">
        <PhotoItemTemplete params={params} />
      </div>
      <div className="hidden lg:block">
        <DeskTopPhotoItem />
      </div>
      <div className="mt-72">
        <Footer />
      </div>
    </div>
  );
}
