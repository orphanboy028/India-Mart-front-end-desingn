import Baner from "../components/Banners/Baner";
import CategegorySection from "../components/CategorySection/CategegorySection";
import HeroSlide from "../components/heroSection/heroSlide";
import HomeCategoriesSection from "../components/HomeCategories/HomeCategoriesSection";
import LayOut from "../components/LayOut";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <LayOut>
        <div>
          <HeroSlide />
        </div>

        <div>
          <CategegorySection />
        </div>

        <div>
          <HomeCategoriesSection />
        </div>
        <div>
          <Baner />
        </div>

        <div>
          <HomeCategoriesSection />
        </div>
        <div>
          <Baner />
        </div>

        <div>
          <HomeCategoriesSection />
        </div>
        <div>
          <Baner />
        </div>
      </LayOut>
    </div>
  );
}
