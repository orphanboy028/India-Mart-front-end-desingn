import CategegorySection from "../components/CategorySection/CategegorySection";
import HeroSlide from "../components/heroSection/heroSlide";
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
      </LayOut>
    </div>
  );
}
