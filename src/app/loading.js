export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="relative">
        
        {/* outer glow ring */}
        <div className="w-20 h-20 rounded-full border-4 border-blue-200 animate-ping absolute"></div>

        {/* main spinner */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>

      <p className="ml-4 text-blue-500 font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
}