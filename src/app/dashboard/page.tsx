import React from "react";

export default async function Dashboard() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay

  return (
    <div className="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-md">
      <h1 className="text-xl font-bold text-black">
        Dashboard
      </h1>
      <p className="text-sm text-zinc-500">
        Welcome to the dashboard
      </p>
    </div>
  );
}
