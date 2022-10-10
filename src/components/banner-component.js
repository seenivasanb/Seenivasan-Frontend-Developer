import { lazy, memo, Suspense } from "react";
import { Parallax } from "react-parallax";
import SpaceXLogo from "../utilities/spacex-logo";
const RellaxComponent = lazy(() => import("./rellax-component"));

const BannerComponent = () => {
  return (
    <Parallax
      bgImage={"./img/banner-1-mobile.jpg"}
      bgImageSrcSet="./img/banner-1.jpg 1x, ./img/banner-1-mobile.jpg 2x"
      strength={500}
      contentClassName=""
      className="flex h-screen md:h-[758px] items-center justify-center relative md:w-full"
    >
      <Suspense fallback={""}>
        <RellaxComponent speed={0} center="true">
          <div
            className="md:mb-20 pl-5 md:pl-20 w-[250px] md:w-[500px] lg:w-[800px]"
            id="logo"
          >
            <SpaceXLogo />
            <h4 className="mt-4 pr-10 md:pr-20 lg:pr-32 text-xs md:text-base text-center text-white tracking-widest uppercase">
              STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON
            </h4>
          </div>
        </RellaxComponent>
      </Suspense>
      <Suspense fallback={""}>
        <RellaxComponent speed={10}>
          <div
            className="absolute md:-left-24 -left-20 lg:-left-56 top-96 w-20 md:w-24"
            id="rellax-1"
          >
            <img src="../img/rocket.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={1}>
          <div className="absolute left-[10vw] top-60 w-10" id="rellax-2">
            <img src="../img/rocket.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={3}>
          <div className="absolute right-[15vw] top-[50vh] w-16" id="rellax-5">
            <img src="../img/rocket.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={1}>
          <div className="absolute -left-[10vw] -top-[20vh] w-16" id="rellax-6">
            <img src="../img/rocket-2.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={3}>
          <div
            className="absolute -left-[10vw] top-[80vh] w-16 md:w-20"
            id="rellax-7"
          >
            <img src="../img/rocket.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={8}>
          <div
            className="absolute md:w-20 -right-[10vw] top-[25vh] w-14"
            id="rellax-8"
          >
            <img src="../img/rocket-2.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={2}>
          <div
            className="absolute -top-[30vh] -right-[10vw] w-16"
            id="rellax-9"
          >
            <img src="../img/rocket.png" />
          </div>
        </RellaxComponent>
      </Suspense>

      <Suspense fallback={""}>
        <RellaxComponent speed={6}>
          <div
            className="absolute -bottom-[90vh] -right-[10vw] md:right-[30vw] w-12 "
            id="rellax-10"
          >
            <img src="../img/rocket-2.png" />
          </div>
        </RellaxComponent>
      </Suspense>
    </Parallax>
  );
};

export default memo(BannerComponent);
