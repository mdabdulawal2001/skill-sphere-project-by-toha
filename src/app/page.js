
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <p className="text-5xl">This Is Main Page</p>
      {/* hot toast */}
      <Toaster></Toaster>
    </div>
  );
}
