"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

async function fetchReason() {
  const res = await fetch("/api/reason");
  return res.json();
}

export default function Home() {
  const [reason, setReason] = useState(true);

  const getReason = async () => {
    fetchReason().then((data) => {
      setReason(data.reason);
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <section className="flex w-full items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Reasons as a Service
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Because reasons.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" onClick={() => getReason()}>
                  Get a reason!
                </Button>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl lg:text-3xl/none">
                  {reason}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full items-center justify-center bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            (c) 2025 Reasons as a Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
