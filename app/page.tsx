import SmoothScroll from "@/components/smooth-scroll";
import { Cursor, Header } from "@/components/pages/global";
import { Hero } from "@/components/pages/landing-page";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <Header />
        </div>
        <Hero />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          consequatur repudiandae libero asperiores veritatis, ipsa,
          voluptatibus mollitia earum tempora est consectetur corporis sapiente,
          temporibus eligendi dolore. Consectetur tenetur eligendi possimus.
        </p>
      </div>

      <main className="main-padding">
        {/* <h1 className="text-9xl font-bold">Welcome to EvonMedics</h1>
        <p className="mt-4">Your health, our priority.</p> */}
      </main>
    </SmoothScroll>
  );
}
