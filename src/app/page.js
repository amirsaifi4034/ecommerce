import BottomWear from "@/components/HomePage/BottomWear/BottomWear";
import HomeBanner from "@/components/HomePage/HomeBanner/HomeBanner";
import CategoryMen from "@/components/HomePage/shopByCategory/CategoryMen";
import TopWear from "@/components/HomePage/TopWear/TopWear";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <CategoryMen />
      <BottomWear />
      <TopWear />
    </>
  );
}
