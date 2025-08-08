const { contextBridge } = require('electron'); contextBridge.exposeInMainWorld('wsb',{ ping:()=>'pong' });
