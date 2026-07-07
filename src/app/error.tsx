"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#061033] text-white p-6 text-center font-sans">
      <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-slate-300 mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 font-semibold transition"
      >
        Try again
      </button>
    </div>
  );
}
