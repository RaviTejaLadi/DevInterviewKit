import Logo from "./Logo";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-muted/30">
      <div className="flex flex-col items-center space-y-6">
        {/* Text with subtle animation */}
        <p className="text-xl font-medium text-sky-700 dark:text-sky-300">
          <Logo />
        </p>

        {/* Progress bar with smooth animation */}
        <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 h-full w-full animate-loading-bar rounded-full"
            style={{
              animation: 'loading-bar 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite',
              transformOrigin: '0% 50%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
