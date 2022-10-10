import PagenationComponent from "./components/pagenation-component";
import GridComponent from "./components/grid-component";
import FilterComponent from "./components/filter-component";
import PopupOverlayComponent from "./components/popup-overlay-component";
import BannerComponent from "./components/banner-component";
import CapsuleTitleComponent from "./components/capsule-title-component";
import FooterComponent from "./components/footer-component";

const App = () => {
  return (
    <div>
      <BannerComponent />

      <div className="md:max-w-5xl md:m-auto my-16 md:my-20 lg:my-32 p-4 md:p-8 lg:p-0">
        <CapsuleTitleComponent />
        <FilterComponent />
        <GridComponent />
        <PagenationComponent />
        <PopupOverlayComponent />
      </div>

      <FooterComponent />
    </div>
  );
};

export default App;
