import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#061033] text-white p-6 text-center font-sans">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-slate-300 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 font-semibold transition inline-block text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
