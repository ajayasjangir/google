import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";


export default function Home() {
  return (
    <>
    
      <HomeHeader />

  

      <div className="flex flex-col items-center mt-[45px] md:mt-0  ">
        <img
        className="w-[115px] md:w-[245px]"
          // width="245"
          // height="90"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
        />

        <HomeSearch/>
      </div>
    </>
  );
}
