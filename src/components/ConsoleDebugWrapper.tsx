// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import {
//   ChevronUp,
//   ChevronDown,
//   Trash2,
//   Copy,
//   Bug,
//   AlertCircle,
//   Info,
//   AlertTriangle,
//   Terminal,
//   Settings,
// } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
// import { Button } from './ui/button/button';
// import { highlight, languages } from 'prismjs';
// import 'prismjs/components/prism-json';
// import 'prismjs/themes/prism-tomorrow.css';

// // Check if we're in development mode
// const isDevelopment = import.meta.env.DEV;

// // Console log entry interface
// interface ConsoleEntry {
//   id: string;
//   timestamp: Date;
//   level: 'log' | 'error' | 'warn' | 'info' | 'debug';
//   args: any[];
//   stack?: string;
// }

// // Configuration interface
// interface ConsoleConfig {
//   maxLogs: number;
//   autoScroll: true;
//   showTimestamp: boolean;
//   showStackTrace: boolean;
//   theme: 'light' | 'dark';
// }

// // Format console arguments with syntax highlighting
// const FormatArgs = ({ args }: { args: any[] }) => {
//   const formatSingleArg = (arg: any): React.ReactNode => {
//     if (arg === null) {
//       return <span className="text-purple-500">null</span>;
//     }

//     if (arg === undefined) {
//       return <span className="text-purple-500">undefined</span>;
//     }

//     if (typeof arg === 'string') {
//       return <span className="text-green-500">"{arg}"</span>;
//     }

//     if (typeof arg === 'number') {
//       return <span className="text-blue-500">{arg}</span>;
//     }

//     if (typeof arg === 'boolean') {
//       return <span className="text-purple-500">{arg.toString()}</span>;
//     }

//     if (Array.isArray(arg)) {
//       return (
//         <div className="ml-4">
//           [
//           {arg.map((item, i) => (
//             <div key={i} className="ml-4">
//               {formatSingleArg(item)}
//               {i < arg.length - 1 ? ',' : ''}
//             </div>
//           ))}
//           ]
//         </div>
//       );
//     }

//     if (typeof arg === 'object') {
//       try {
//         const jsonString = JSON.stringify(arg, null, 2);
//         const html = highlight(jsonString, languages.json, 'json');
//         return (
//           <pre className="language-json bg-muted p-2 rounded text-xs" dangerouslySetInnerHTML={{ __html: html }} />
//         );
//       } catch (e) {
//         console.log(e);
//         return <span className="text-red-500">[Non-serializable object]</span>;
//       }
//     }

//     return <span>{String(arg)}</span>;
//   };

//   return (
//     <div className="space-y-1">
//       {args.map((arg, i) => (
//         <div key={i} className="font-mono text-sm">
//           {formatSingleArg(arg)}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Get icon for log level
// const getLogIcon = (level: string) => {
//   switch (level) {
//     case 'error':
//       return <AlertCircle className="w-4 h-4 text-destructive" />;
//     case 'warn':
//       return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
//     case 'info':
//       return <Info className="w-4 h-4 text-blue-500" />;
//     case 'debug':
//       return <Terminal className="w-4 h-4 text-purple-500" />;
//     default:
//       return <Bug className="w-4 h-4 text-muted-foreground" />;
//   }
// };

// // Get variant for log level
// const getLogVariant = (level: string) => {
//   switch (level) {
//     case 'error':
//       return 'destructive';
//     case 'warn':
//       return 'default';
//     case 'info':
//       return 'default';
//     case 'debug':
//       return 'default';
//     default:
//       return 'default';
//   }
// };

// // Console Debug Wrapper Component
// export const ConsoleDebugWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [logs, setLogs] = useState<ConsoleEntry[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [filter, setFilter] = useState<string>('all');
//   const [config, setConfig] = useState<ConsoleConfig>({
//     maxLogs: 100,
//     autoScroll: true,
//     showTimestamp: true,
//     showStackTrace: true,
//     theme: 'dark',
//   });
//   const originalConsole = useRef<any>({});
//   const scrollAreaRef = useRef<HTMLDivElement>(null);

//   // Intercept console methods
//   const interceptConsole = useCallback(() => {
//     const consoleMethods = ['log', 'error', 'warn', 'info', 'debug'];

//     consoleMethods.forEach((method) => {
//       originalConsole.current[method] = console[method as keyof Console];

//       (console as any)[method] = (...args: any[]) => {
//         // Call original console method
//         originalConsole.current[method](...args);

//         // Create log entry
//         const entry: ConsoleEntry = {
//           id: `${Date.now()}-${Math.random()}`,
//           timestamp: new Date(),
//           level: method as any,
//           args: args,
//           stack: method === 'error' && config.showStackTrace ? new Error().stack : undefined,
//         };

//         setLogs((prev) => {
//           const newLogs = [...prev, entry];
//           // Limit logs to maxLogs
//           if (newLogs.length > config.maxLogs) {
//             return newLogs.slice(-config.maxLogs);
//           }
//           return newLogs;
//         });
//       };
//     });
//   }, [config.maxLogs, config.showStackTrace]);

//   // Restore original console methods
//   const restoreConsole = useCallback(() => {
//     Object.keys(originalConsole.current).forEach((method) => {
//       (console as any)[method] = originalConsole.current[method];
//     });
//   }, []);

//   // Initialize console interception
//   useEffect(() => {
//     if (isDevelopment) {
//       interceptConsole();
//       return () => restoreConsole();
//     }
//   }, [interceptConsole, restoreConsole]);

//   // Auto-scroll to bottom when new logs are added
//   useEffect(() => {
//     if (config.autoScroll && scrollAreaRef.current) {
//       const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
//       if (scrollContainer) {
//         scrollContainer.scrollTop = scrollContainer.scrollHeight;
//       }
//     }
//   }, [logs, config.autoScroll]);

//   // Filter logs based on selected filter
//   const filteredLogs = logs.filter((log) => {
//     if (filter === 'all') return true;
//     return log.level === filter;
//   });

//   // Clear all logs
//   const clearLogs = () => {
//     setLogs([]);
//   };

//   // Copy log to clipboard
//   const copyLog = (entry: ConsoleEntry) => {
//     const timestamp = config.showTimestamp ? `[${entry.timestamp.toLocaleTimeString()}] ` : '';
//     const text = `${timestamp}${entry.level.toUpperCase()}: ${JSON.stringify(entry.args, null, 2)}`;
//     navigator.clipboard.writeText(text);
//   };

//   // Copy all logs to clipboard
//   const copyAllLogs = () => {
//     const allLogsText = filteredLogs
//       .map((entry) => {
//         const timestamp = config.showTimestamp ? `[${entry.timestamp.toLocaleTimeString()}] ` : '';
//         return `${timestamp}${entry.level.toUpperCase()}: ${JSON.stringify(entry.args, null, 2)}`;
//       })
//       .join('\n');
//     navigator.clipboard.writeText(allLogsText);
//   };

//   // Get count of logs by level
//   const getLogCount = (level: string) => {
//     if (level === 'all') return logs.length;
//     return logs.filter((log) => log.level === level).length;
//   };

//   // Export logs as JSON
//   const exportLogs = () => {
//     const dataStr = JSON.stringify(filteredLogs, null, 2);
//     const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
//     const exportFileDefaultName = `console-logs-${new Date().toISOString().split('T')[0]}.json`;

//     const linkElement = document.createElement('a');
//     linkElement.setAttribute('href', dataUri);
//     linkElement.setAttribute('download', exportFileDefaultName);
//     linkElement.click();
//   };

//   // If not in development, don't render debug UI
//   if (!isDevelopment) {
//     return <>{children}</>;
//   }

//   return (
//     <div className="relative">
//       {/* Main content */}
//       {children}

//       {/* Development Mode Indicator */}
//       <div className="fixed top-2 right-2 z-40">
//         <Badge variant="secondary" className="text-xs">
//           DEV MODE
//         </Badge>
//       </div>

//       {/* Debug Console Popover */}
//       <div className="fixed bottom-4 right-4 z-50">
//         <Popover open={isOpen} onOpenChange={setIsOpen}>
//           <PopoverTrigger asChild>
//             <Button className="shadow-lg" size="default">
//               <Bug className="w-4 h-4 mr-2" />
//               Debug Console
//               {logs.length > 0 && (
//                 <Badge variant="destructive" className="ml-2 px-2 py-1">
//                   {logs.length}
//                 </Badge>
//               )}
//             </Button>
//           </PopoverTrigger>

//           <PopoverContent className="w-[50vw] h-[90vh] border border-border p-0" side="top" sideOffset={10} align="end">
//             <Card className="border-0 shadow-none h-full flex flex-col">
//               <CardHeader className="pb-3 flex-shrink-0">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Bug className="w-5 h-5" />
//                     <CardTitle className="text-base">Debug Console</CardTitle>
//                     <Badge variant="secondary" className="text-xs">
//                       {filteredLogs.length} logs
//                     </Badge>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <Button variant="ghost" size="sm">
//                           <Settings className="w-4 h-4" />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-full bg-background border border-border" side="left">
//                         <div className="space-y-4">
//                           <h4 className="font-medium">Console Settings</h4>
//                           <div className="space-y-3">
//                             <div className="flex items-center space-x-2">
//                               <Switch
//                                 id="auto-scroll"
//                                 checked={config.autoScroll}
//                                 onCheckedChange={(checked) => setConfig((prev) => ({ ...prev, autoScroll: checked }))}
//                               />
//                               <Label htmlFor="auto-scroll">Auto-scroll</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                               <Switch
//                                 id="show-timestamp"
//                                 checked={config.showTimestamp}
//                                 onCheckedChange={(checked) =>
//                                   setConfig((prev) => ({ ...prev, showTimestamp: checked }))
//                                 }
//                               />
//                               <Label htmlFor="show-timestamp">Show timestamp</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                               <Switch
//                                 id="show-stack"
//                                 checked={config.showStackTrace}
//                                 onCheckedChange={(checked) =>
//                                   setConfig((prev) => ({ ...prev, showStackTrace: checked }))
//                                 }
//                               />
//                               <Label htmlFor="show-stack">Show stack trace</Label>
//                             </div>
//                             <div className="space-y-2">
//                               <Label>Max logs: {config.maxLogs}</Label>
//                               <Select
//                                 value={config.maxLogs.toString()}
//                                 onValueChange={(value) => setConfig((prev) => ({ ...prev, maxLogs: parseInt(value) }))}
//                               >
//                                 <SelectTrigger>
//                                   <SelectValue />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                   <SelectItem value="50">50</SelectItem>
//                                   <SelectItem value="100">100</SelectItem>
//                                   <SelectItem value="200">200</SelectItem>
//                                   <SelectItem value="500">500</SelectItem>
//                                 </SelectContent>
//                               </Select>
//                             </div>
//                           </div>
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                     <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)}>
//                       {isCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//                     </Button>
//                   </div>
//                 </div>
//               </CardHeader>

//               {/* Console Content */}
//               {!isCollapsed && (
//                 <CardContent className="pt-0 flex-1 flex flex-col min-h-0">
//                   {/* Filters and Actions */}
//                   <div className="flex items-center gap-2 mb-4 flex-wrap flex-shrink-0">
//                     <Select value={filter} onValueChange={setFilter}>
//                       <SelectTrigger className="w-40">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent className="bg-background border border-border">
//                         <SelectItem value="all">All ({getLogCount('all')})</SelectItem>
//                         <SelectItem value="log">Log ({getLogCount('log')})</SelectItem>
//                         <SelectItem value="error">Error ({getLogCount('error')})</SelectItem>
//                         <SelectItem value="warn">Warn ({getLogCount('warn')})</SelectItem>
//                         <SelectItem value="info">Info ({getLogCount('info')})</SelectItem>
//                         <SelectItem value="debug">Debug ({getLogCount('debug')})</SelectItem>
//                       </SelectContent>
//                     </Select>

//                     <Button variant="destructive" size="sm" onClick={clearLogs}>
//                       <Trash2 className="w-4 h-4 mr-1" />
//                       Clear
//                     </Button>

//                     <Button variant="outline" size="sm" onClick={copyAllLogs}>
//                       <Copy className="w-4 h-4 mr-1" />
//                       Copy
//                     </Button>

//                     <Button variant="outline" size="sm" onClick={exportLogs}>
//                       Export
//                     </Button>
//                   </div>

//                   <Separator className="mb-4 flex-shrink-0" />

//                   {/* Logs Container */}
//                   <div className="flex-1 min-h-0">
//                     <ScrollArea ref={scrollAreaRef} className="h-full w-full">
//                       {filteredLogs.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
//                           <Bug className="w-8 h-8 mb-2 opacity-50" />
//                           <p className="text-sm">No console logs yet</p>
//                           <p className="text-xs">Try console.log('Hello') in your code</p>
//                         </div>
//                       ) : (
//                         <div className="space-y-2 pb-4">
//                           {filteredLogs.map((entry, index) => (
//                             <div key={entry.id}>
//                               <Alert className="p-3 border border-border" variant={getLogVariant(entry.level) as any}>
//                                 <div className="flex flex-col items-start gap-2">
//                                   <div className="flex  items-center gap-2 flex-shrink-0">
//                                     {getLogIcon(entry.level)}
//                                     {config.showTimestamp && (
//                                       <Badge variant="outline" className="text-xs border border-border">
//                                         {entry.timestamp.toLocaleTimeString()}
//                                       </Badge>
//                                     )}
//                                   </div>
//                                   <AlertDescription className="flex-1 min-w-0 overflow-x-auto">
//                                     <FormatArgs args={entry.args} />
//                                     {entry.stack && config.showStackTrace && (
//                                       <details className="mt-2">
//                                         <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
//                                           Stack trace
//                                         </summary>
//                                         <pre className="text-xs text-muted-foreground mt-1 whitespace-pre-wrap bg-muted p-2 rounded">
//                                           {entry.stack}
//                                         </pre>
//                                       </details>
//                                     )}
//                                   </AlertDescription>
//                                   <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     onClick={() => copyLog(entry)}
//                                     className="flex-shrink-0 h-8 w-8 p-0"
//                                   >
//                                     <Copy className="w-3 h-3" />
//                                   </Button>
//                                 </div>
//                               </Alert>
//                               {index < filteredLogs.length - 1 && <Separator className="my-2" />}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </ScrollArea>
//                   </div>
//                 </CardContent>
//               )}
//             </Card>
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   );
// };
