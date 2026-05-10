import Link from "next/link";

export const metadata = {
  title: "Not Found | SkillSphere",
  description: "Login to your account",
};


const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      
      {/* BIG TEXT */}
      <h1 className="text-7xl font-bold text-blue-500">
        404
      </h1>

      {/* MESSAGE */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* BUTTON */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;