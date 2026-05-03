import BannerSection from "@/components/BannerSection";
import TopRatedCourses from "@/components/TopRatedCourses";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* <p className="text-5xl">This Is Main Page</p> */}
      <BannerSection></BannerSection>
      <TopRatedCourses></TopRatedCourses>
    </div>
  );
}
