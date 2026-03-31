import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { GoRocket } from "react-icons/go";

const StartedPart = () => {
   const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: FaRegUser ,
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: BsBoxSeam ,
    },
    {
      id: "03",
      title: "Start Creating",
      description:
        "Download and start using your premium tools immediately.",
      icon: GoRocket ,
    },
  ];

  return (
    <section className="bg-[#f8f8fa] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#101727]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-3 text-sm text-[#9ca3af]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-2xl border border-[#e8e8ee] bg-white px-8 py-12 text-center shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
              >
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-xs font-semibold text-white">
                  {step.id}
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f1e8ff]">
                  <Icon className="h-9 w-9 text-[#7c3aed]" strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-[28px] font-semibold text-[#111827]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-6 text-[#9ca3af]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StartedPart