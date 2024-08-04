import DeskTopFooter from "@/components/Footer/DeskTopFooter";
import Footer from "@/components/Footer/Footer";
import DeskTopPortfolioItem from "../../_component/DeskTopPortfolioItem";
import MobilePortfolioItem from "../../_component/MobilePortfolioItem";

export default function PortfolioItem({ params }: { params: { id: number } }) {
  return (
    <div>
      <div className="block lg:hidden">
        <MobilePortfolioItem params={params} />
      </div>
      <div className="hidden lg:block">
        <DeskTopPortfolioItem params={params} />
      </div>
      <div className="block lg:hidden">
        <Footer />
      </div>
      <div className="hidden lg:block lg:mt-72">
        <DeskTopFooter />
      </div>
    </div>
  );
}
