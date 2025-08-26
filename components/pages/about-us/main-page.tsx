"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Header, Tag, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";
import { VideoDisplay } from "../landing-page";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addTimelineRef = (el: HTMLDivElement | null, index: number) => {
    timelineRefs.current[index] = el;
  };

  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800">
        <Header variant="secondary" />
        <main>
          {/* Hero Section */}
          <section className="main-padding py-12 md:py-16 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl"></div>

            <div className="max-w-7xl mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Content Column */}
                <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                  <div className="inline-block">
                    <Tag text="ABOUT EVONMEDICS" />
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 cursor-default">
                      Solving the world's toughest medical problems
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent leading-tight">
                      — one person at a time
                    </h2>
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl group cursor-default">
                    <span className="hover:text-blue-600 transition-colors duration-300">At EvonMedics, we're dedicated to transforming healthcare through innovative</span>
                    <span className="hover:text-purple-600 transition-colors duration-300"> neurotechnology solutions. Our mission is to provide cutting-edge treatments</span>
                    <span className="hover:text-green-600 transition-colors duration-300"> for neurological conditions, bringing hope and healing to patients worldwide.</span>
                  </p>
                </div>

                {/* Image Column */}
                <div className="lg:col-span-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                    <Image
                      src="/images/hero2.jpg"
                      alt="Healthcare professionals collaborating on innovative medical solutions"
                      width={800}
                      height={600}
                      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are Section */}
          <section className="main-padding py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Image Column */}
                <div className="lg:order-1">
                  <div>
                    <Image
                      src="/images/hero3.jpg"
                      alt="Medical professionals in surgical setting with advanced technology"
                      width={550}
                      height={650}
                      className="w-full h-[500px] lg:h-[650px] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:order-2 space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">Who we are</p>
                    <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                      Transforming health care
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      EvonMedics is the largest integrated, not-for-profit neurotechnology practice in the world. We're
                      building the future, one where the best possible care is available to everyone — and more people
                      can heal at home. Our relentless research turns into earlier diagnoses and new cures. That's how
                      we inspire hope in those who need it most.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Innovating for new solutions
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        At EvonMedics, experts work together to solve the most challenging unmet needs of patients.
                        Our <a href="#" className="text-[#0066CC] underline decoration-1 hover:no-underline">history of innovation</a> dates
                        back almost 150 years, when brothers Will and Charlie Mayo pioneered an integrated, team-based approach
                        to medicine. Today, that trailblazing spirit drives innovations like
                        <a href="#" className="text-[#0066CC] underline decoration-1 hover:no-underline">EvonMedics Platform</a> — which
                        powers new technologies to change how care is delivered to all.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Top rankings for quality care
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        Our unwavering drive to create better medical care has earned EvonMedics
                        <a href="#" className="text-[#0066CC] underline decoration-1 hover:no-underline">more top rankings</a> for
                        <a href="#" className="text-[#0066CC] underline decoration-1 hover:no-underline">high-quality patient care</a> than
                        any other health care organization. In fact, EvonMedics has more specialties ranked in the
                        top three than any other hospital in the nation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Impact Section */}
          <section className="main-padding py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Content Column */}
                <div className="lg:order-1 space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">Our impact</p>
                    <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                      Building a healthier world
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    We think big and act boldly to improve the health of communities and accelerate equality
                    and diversity in health care. We share our knowledge globally, impact policy, and partner
                    with others to create lasting change — and much-needed — change for a healthier world.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Improving health equity
                    </h3>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      We partner with community organizations to
                      <a href="#" className="text-[#0066CC] underline decoration-1 hover:no-underline"> end health disparities</a> through education
                      programs, personalized health care, and community-engaged research. We're accelerating recruitment of diverse investigators
                      and conducting research that addresses inequities in medicine and science and ensure more cures for
                      all. We're strengthening our diversity and inclusion pipelines for health care professionals
                      and leadership development. We're also using our platform to make innovative care accessible
                      for all. And we're just getting started.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button>EXPLORE OUR COMMUNITY ENGAGEMENTS</Button>
                  </div>
                </div>

                {/* Image Column */}
                <div className="lg:order-2">
                  <div>
                    <Image
                      src="/images/hero4.avif"
                      alt="Healthcare professional with young patient, demonstrating compassionate care and community engagement"
                      width={550}
                      height={650}
                      className="w-full h-[500px] lg:h-[650px] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Milestones Timeline Section */}
          <section className="main-padding py-16 lg:py-20 pb-32 bg-black text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Major Milestones
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Our journey of innovation and breakthroughs in neurological treatment technology
                </p>
              </div>

              <div className="relative">
                {/* Timeline line - contained within the timeline items */}
                <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" style={{ height: 'calc(100% - 2rem)' }}></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {/* 2022 SBIR Grant */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out" ref={el => addTimelineRef(el, 0)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side (mobile) / Top (desktop) */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">Sep 2022</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side (mobile) / Bottom (desktop) */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            SBIR FAST-TRACK Grant Awarded
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            EvON Medics, LLC received a non-dilutive grant of $2.9 million for its FAST-TRACK SBIR (Small Business Innovation Research) study, marking a significant milestone in our research funding.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Research Funding</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/1.avif"
                            alt="Research and development in medical technology"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2022 May */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100" ref={el => addTimelineRef(el, 1)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">May 2022</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            Strategic Partnership Development
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            Established key partnerships and collaborations to advance our neurotechnology platform and expand our research capabilities.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            <span>Partnerships</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/2.avif"
                            alt="Strategic partnerships and collaborations"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2021 NIH HEAL Initiative */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200" ref={el => addTimelineRef(el, 2)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">June 2021</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            NIH HEAL Initiative Award
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            Awarded funding for the development and evaluation of our Computerized Chemosensory-Based Orbitofrontal Networks Training for Treatment of Pain (CBOT-P). This award is funded through the NIH HEAL initiative and sponsored by NINDS.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>Pain Treatment Research</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/3.avif"
                            alt="NIH research and pain treatment technology"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2021 NeuroTech Harbor */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300" ref={el => addTimelineRef(el, 3)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">April 2021</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            NeuroTech Harbor Leadership
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            EvON Medics, LLC Co-Founder appointed Director/Principal Investigator at NeuroTech Harbor Technology Accelerator, strengthening our position in the neurotechnology ecosystem.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 10c-2.31 0-4.352.657-6 1.886V6zM2 9a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" clipRule="evenodd" />
                            </svg>
                            <span>Leadership</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/4.avif"
                            alt="NeuroTech Harbor technology accelerator"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2020 Seedlings Program */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400" ref={el => addTimelineRef(el, 4)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">Mar 2020</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            Seedlings Program Leadership
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            Dr. Evaristus Nwulia appointed as Director of the Seedlings Program and Lead Principal Investigator at NeuroTech Harbor (NTH) Technology Accelerator, supported by NIH Blueprint MedTech program.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>Program Development</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/5.avif"
                            alt="Seedlings Program development and innovation"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2018 Foundation */}
                  <div className="relative group opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500" ref={el => addTimelineRef(el, 5)}>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2 lg:pr-8 lg:text-right order-1 lg:order-1">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-semibold text-gray-200">Oct 2018</span>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-800 shadow-sm group-hover:scale-125 transition-transform duration-300 z-10"></div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:pl-8 order-2 lg:order-2">
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                          <h3 className="text-xl font-bold text-white mb-3">
                            Company Foundation
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            EvON Medics, LLC was founded with a mission to revolutionize neurological treatment through innovative technology and research-driven solutions.
                          </p>

                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 10-1.885.666A5.002 5.002 0 0014.001 9H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101z" clipRule="evenodd" />
                            </svg>
                            <span>Company Launch</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Image - Popping out on the opposite side */}
                      <div className="absolute left-0 lg:left-auto lg:right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] z-20">
                        <div className="w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                          <Image
                            src="/images/coffee.avif"
                            alt="Company foundation and innovation beginnings"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <VideoDisplay />

          {/* Leadership Section */}
          <section className="main-padding py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-12 lg:mb-16">
                <div className="inline-block">
                  <Tag text="LEADERSHIP" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Meet our leadership team
                </h3>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Visionary leaders driving breakthrough innovations in neurotechnology and patient care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-gray-200">
                  <div className="relative text-center space-y-4">
                    <div className="relative mx-auto">
                      <Image
                        src="/images/1.avif"
                        alt="Dr. Evaristus Nwulia, Chief Executive Officer"
                        width={300}
                        height={300}
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto ring-4 ring-transparent group-hover:ring-gray-300 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900 transition-colors duration-300">Dr. Sarah Johnson</h4>
                      <p className="font-semibold text-gray-700">Dr. Evaristus Nwulia</p>
                      <p className="text-gray-600 text-sm px-4 transition-colors duration-300">
                        Co-Founder/Chief Scientific Officer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dr. Michael Chen */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-gray-200">
                  <div className="relative text-center space-y-4">
                    <div className="relative mx-auto">
                      <Image
                        src="/images/2.avif"
                        alt="Dr. Michael Chen, Chief Technology Officer"
                        width={300}
                        height={300}
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto ring-4 ring-transparent group-hover:ring-gray-300 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900 transition-colors duration-300">Dr. Michael Chen</h4>
                      <p className="font-semibold text-gray-700">Chief Technology Officer</p>
                      <p className="text-gray-600 text-sm px-4 transition-colors duration-300">
                        Biomedical engineer specializing in neural interface technologies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dr. Emily Rodriguez */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-transparent hover:border-gray-200">
                  <div className="relative text-center space-y-4">
                    <div className="relative mx-auto">
                      <Image
                        src="/images/3.avif"
                        alt="Dr. Emily Rodriguez, Chief Medical Officer"
                        width={300}
                        height={300}
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto ring-4 ring-transparent group-hover:ring-gray-300 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900 transition-colors duration-300">Dr. Emily Rodriguez</h4>
                      <p className="font-semibold text-gray-700">Chief Medical Officer</p>
                      <p className="text-gray-600 text-sm px-4 transition-colors duration-300">
                        Clinical specialist focused on innovative treatment approaches
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Careers Section */}
          <section className="main-padding py-20 lg:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Join us if you love to imagine the future
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    While knowledge gives us the foundation to build, it's imagination that lights the way forward. If you enjoy crafting tools that transform the status quo, we'd love to talk.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Web Designer */}
                  <div className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <span className="text-lg lg:text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-200">
                      Web Designer
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Junior Design Engineer */}
                  <div className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <span className="text-lg lg:text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-200">
                      Junior Design Engineer
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Senior Design Engineer */}
                  <div className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <span className="text-lg lg:text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-200">
                      Senior Design Engineer
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Junior Product Engineer */}
                  <div className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <span className="text-lg lg:text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-200">
                      Junior Product Engineer
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Senior Product Engineer */}
                  <div className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <span className="text-lg lg:text-xl font-medium text-black group-hover:text-gray-700 transition-colors duration-200">
                      Senior Product Engineer
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-gray-500 text-base">
                    Can't find your role? <button className="text-black underline font-medium hover:no-underline transition-all duration-200">Open application</button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScroll>
  );
};

export default AboutUsPage;
