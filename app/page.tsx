import SmoothScroll from "@/components/smooth-scroll";
import { Header } from "@/components/pages/global";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <div className="h-[200vh]">
        <p>Hello World!</p>
      </div>
    </SmoothScroll>
  );
}
