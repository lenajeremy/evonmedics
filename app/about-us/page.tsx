import Image from "next/image";
import { Metadata } from "next";
import { Header } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "About Us - Leading Medical Technology Innovation",
  description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology. Meet our dedicated team of professionals driving breakthrough solutions for neurological treatment and patient care.",
  openGraph: {
    title: "About EvonMedics - Leading Medical Technology Innovation",
    description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology. Meet our dedicated team driving breakthrough neurological treatment solutions.",
    url: "https://evonmedics.com/about-us",
    images: [
      {
        url: "/images/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "EvonMedics Team - Medical Technology Innovation",
      },
    ],
  },
  twitter: {
    title: "About EvonMedics - Leading Medical Technology Innovation",
    description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology and breakthrough neurological treatment solutions.",
  },
};

const AboutUsPage = () => {
  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800">
        <Header variant="secondary" />
        <main>
          <section className="relative h-[250px] md:h-[300px] flex items-center justify-center text-center bg-gray-100">
            <div className="z-10 px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Us</h1>
              <p className="text-lg md:text-xl mt-2 text-gray-600">Evon Medics</p>
            </div>
          </section>

          <div className="py-12 md:py-16 lg:py-20 main-padding">
            <div className="max-w-7xl mx-auto">
              {/* Our Mission Section */}
              <section className="mb-12 md:mb-16 lg:mb-20 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    To revolutionize healthcare by developing and providing
                    innovative, reliable, and accessible medical technology that
                    empowers healthcare professionals and improves patient
                    outcomes. We are committed to pushing the boundaries of what
                    is possible in medical diagnostics and treatment.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Our Mission"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </section>

              {/* Our Vision Section */}
              <section className="mb-12 md:mb-16 lg:mb-20 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
                <div className="md:w-1/2 md:order-2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    To be a global leader in medical technology, known for our
                    commitment to quality, innovation, and customer
                    satisfaction. We envision a world where every healthcare
                    provider has access to the best possible tools to save lives
                    and improve the quality of life for their patients.
                  </p>
                </div>
                <div className="md:w-1/2 md:order-1">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Our Vision"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </section>

              {/* Our Values Section */}
              <section className="mb-12 md:mb-16 lg:mb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 text-center">
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Integrity</h3>
                    <p className="text-sm md:text-base">
                      We uphold the highest standards of integrity in all of our
                      actions.
                    </p>
                  </div>
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-sm md:text-base">
                      We are driven by innovation and a passion for excellence.
                    </p>
                  </div>
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      Collaboration
                    </h3>
                    <p className="text-sm md:text-base">
                      We work together, across boundaries, to meet the needs of
                      our customers.
                    </p>
                  </div>
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-sm md:text-base">
                      We are committed to providing the best possible service to
                      our clients.
                    </p>
                  </div>
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Empathy</h3>
                    <p className="text-sm md:text-base">
                      We are compassionate and understanding towards our clients
                      and their needs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Meet the Team Section */}
              <section className="py-12 md:py-16 lg:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Meet the Team</h2>
                <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-12">Our team of dedicated professionals is the driving force behind our success.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/1.avif"
                      alt="Team Member 1"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-gray-500">Chief Executive Officer</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/2.avif"
                      alt="Team Member 2"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">Jane Smith</h3>
                    <p className="text-gray-500">Chief Technology Officer</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/3.avif"
                      alt="Team Member 3"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">Peter Jones</h3>
                    <p className="text-gray-500">Chief Operating Officer</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/4.avif"
                      alt="Team Member 4"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">Mary Williams</h3>
                    <p className="text-gray-500">Head of Research</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/5.avif"
                      alt="Team Member 5"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">David Brown</h3>
                    <p className="text-gray-500">Head of Marketing</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/coffee.avif"
                      alt="Team Member 6"
                      width={150}
                      height={150}
                      className="rounded-full shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">Susan Taylor</h3>
                    <p className="text-gray-500">Head of Sales</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </SmoothScroll>
  );
};

export default AboutUsPage;
