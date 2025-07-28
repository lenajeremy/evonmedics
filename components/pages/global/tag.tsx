import React from "react";

export default function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block bg-[#EEF1F8] uppercase text-[#4A4A4A] rounded-md font-medium px-6 py-2 text-sm tracking-[0.3em] text-center select-none">
      {text}
    </span>
  );
}
