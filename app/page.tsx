import SmoothScroll from "@/components/smooth-scroll";
import { Header } from "@/components/pages/global";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="main-padding">
        <h1 className="text-4xl font-bold">Welcome to EvonMedics</h1>
        <p className="mt-4">Your health, our priority.</p>
      </main>
    </SmoothScroll>
  );
}
