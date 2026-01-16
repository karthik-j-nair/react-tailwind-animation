import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center">
      <button className="relative group rounded-lg pl-10 pt-1 pb-1 pr-3 text-xl font-semibold flex items-center gap-2 text-zinc-50 cursor-pointer border hover:bg-amber-600 transition-all duration-500">
        <Box />
        <span className="inline-block group-hover:-translate-x-8 transition-all duration-500">Chat with Karthik</span>
      </button>
    </div>
  );
};

export default App;

const Box = () => {
  return (
    <div className="size-8 absolute group-hover:left-[calc(100%-2.11rem)] left-0.5 my-auto inset-y-0 group-hover:transform group-hover:rotate-180 flex rounded-md transition-all duration-500 bg-amber-600 flex-col justify-center gap-px items-center">
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
      className={`inline-block size-1  rounded-full shrink-0 bg-white/25 ${
        highlight ? "bg-white/90 animate-pulse ease-linear duration-50" : "bg-zinc-900/10"
      }`}
    />
  );
};
