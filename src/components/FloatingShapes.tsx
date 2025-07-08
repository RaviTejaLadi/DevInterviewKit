export const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-40 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-teal-500/10 dark:from-blue-500/20 dark:to-teal-500/20 rounded-full blur-3xl" />
    <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg width="604" height="604" fill="none" viewBox="0 0 404 404">
        <defs>
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="9" y="9" width="2" height="2" className="text-muted-foreground/10" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);
