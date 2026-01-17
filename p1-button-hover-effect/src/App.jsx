import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center">
      <button className="relative group rounded-lg pl-10 py-0 pr-3 text-xl font-semibold flex items-center gap-2 text-zinc-50 cursor-pointer border   transition-all duration-500">
        <Box />
        <div className="absolute inset-0 bg-white/20 rounded-[7px] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] transition-[clip-path] duration-500"/>

        <span className="inline-block group-hover:-translate-x-8 transition-all duration-500 uppercase">Karthik</span>
      </button>
    </div>
  );
};

export default App;

const Box = () => {
  return (
    <div className="size-7 absolute z-20 group-hover:left-[calc(100%-1.749rem)] left-0 my-auto inset-y-0 group-hover:transform group-hover:rotate-180 flex rounded-[7px] transition-all duration-500 bg-amber-600 flex-col justify-center gap-px items-center">
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight={true} />
        <Bubble />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight={true} />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight={true} />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight={true} />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
};

const Bubble = ({ highlight = false }) => {
  return (
    <span
      className={`inline-block size-1 shrink-0 bg-white/25 ${
        highlight ? "bg-white/90 animate-pulse ease-linear duration-50" : "bg-zinc-900/10"
      }`}
    />
  );
};
