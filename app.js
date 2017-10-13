import debuglog from 'loglevel';
import loglevelLocalStorage from 'loglevel-local-storage';

debuglog.setLevel("ERROR");
loglevelLocalStorage(debuglog, {
  level: 'info',
  prefix(logSev, ...args) {
    // Stringify for storage in localStorage
    const newArgs = args.map(arg => ((typeof arg === 'object' && !(arg instanceof Date)) ? JSON.stringify(arg) : arg));
    console.log('newArgs',newArgs);
    return `[${new Date().toISOString()}] ${logSev}: ${newArgs.join(' ')}`;
  },
  callOriginal: false,
  maxLogStackSize: 50,
  persistentLog: true
});

debuglog.error("404: Все сломалось");
