"use strict";var le=Object.create;var R=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var _e=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports),Te=(s,e)=>{for(var r in e)R(s,r,{get:e[r],enumerable:!0})},Y=(s,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of pe(e))!me.call(s,n)&&n!==r&&R(s,n,{get:()=>e[n],enumerable:!(t=ue(e,n))||t.enumerable});return s};var h=(s,e,r)=>(r=s!=null?le(Ee(s)):{},Y(e||!s||!s.__esModule?R(r,"default",{value:s,enumerable:!0}):r,s)),Re=s=>Y(R({},"__esModule",{value:!0}),s);var ae=_e((cr,oe)=>{oe.exports=Worker});var Be={};Te(Be,{AsyncDuckDB:()=>D,AsyncDuckDBConnection:()=>m,AsyncDuckDBDispatcher:()=>L,AsyncPreparedStatement:()=>y,AsyncResultStreamIterator:()=>_,ConsoleLogger:()=>P,DuckDBAccessMode:()=>j,DuckDBDataProtocol:()=>Q,LogEvent:()=>z,LogLevel:()=>q,LogOrigin:()=>J,LogTopic:()=>$,OPFSFileHandleGenerator:()=>N,PACKAGE_NAME:()=>C,PACKAGE_VERSION:()=>U,PACKAGE_VERSION_MAJOR:()=>Ae,PACKAGE_VERSION_MINOR:()=>Oe,PACKAGE_VERSION_PATCH:()=>De,StatusCode:()=>Z,VoidLogger:()=>w,WorkerRequestType:()=>A,WorkerResponseType:()=>O,WorkerTask:()=>i,assertOPFSHandle:()=>ke,createOPFSFileHandle:()=>K,createStandaloneOPFSFileHandle:()=>ge,createWorker:()=>We,defaultOPFSDomain:()=>b,getJsDelivrBundles:()=>Ue,getLogEventLabel:()=>he,getLogLevelLabel:()=>Se,getLogOriginLabel:()=>Ne,getLogTopicLabel:()=>fe,getPlatformFeatures:()=>ne,isFirefox:()=>Le,isNode:()=>H,isSafari:()=>Ce,opfsScheme:()=>F,parseOPFSURL:()=>Ie,selectBundle:()=>ve,stringifyOPFSURL:()=>ye});module.exports=Re(Be);var j=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(j||{});var F="opfs",b="default",be=/^([^:/?#]+?):\/\/([^/?#]*)([^?#]*)/;function ye(s,e,r){let t="".concat(F,"://").concat(r||b).replace(/\/*$/,"/"),n=s.replace(/^\/*/,"");if(!e&&!n)throw new Error('Invalid OPFS file path "'.concat(s,'"'));return t+n.replace(/\/*$/,e?"/":"")}function Ie(s){let e=be.exec(s);if(!e||e[1]===F)return;let r=e[2];if(r){let t=r.indexOf("@");t>=0&&(r=r.slice(t+1)),t=r.indexOf(":"),t>=0&&(r=r.slice(0,t))}return r||(r=b),{domain:r,path:e[3]}}function f(s){let e=s.split(/\/+/),r=[];for(let t=0;t<e.length;t++){let n=e[t];n==="."||n===""||(n===".."?r.pop():r.push(n))}return r}var N=class{constructor(e){this.root=e;this.cachedDirHandles=new Map}async getDirHandle(e,r){let t=Array.isArray(e)?e:f(e),n=this.cachedDirHandles.get(t.join("/"));if(n)return n;let a=this.root,o="",u=r.create||!1;for(let E of t){o=o?"".concat(o,"/").concat(E):E;try{a=await a.getDirectoryHandle(E,{create:u})}catch(S){let T=u?"Could not create directory: ".concat(o):"Directory not found: ".concat(o);throw new Error(T)}this.cachedDirHandles.set(o,a)}return a}async create(e,r){let t=Array.isArray(e)?e:f(e);if(t.length<1)throw new Error("Invalid file path: ".concat(e));let n="/"+t.join("/");t.pop();let a=await this.getDirHandle(t,r);return K(n,a,r)}};function V(s){let e={create:!1,access:!1,domain:b,emptyAsAbsent:!1};return s&&Object.assign(e,s),e}async function K(s,e,r){let t=f(s);if(t.length<1)throw new Error('Invalid filePath: "'.concat(s,'"'));s="/"+t.join("/");let n=t.pop();if((t.pop()||"")!==e.name)throw new Error('filePath "'.concat(s,'" is not matched with "').concat(e.name,'"'));let o,u,E,{create:S,access:T,emptyAsAbsent:ce,domain:de}=V(r);return(S||T)&&(u=await e.getFileHandle(n,{create:S||!1}),o=await u.getFile()),T&&u&&(E=await u.createSyncAccessHandle()),{filePath:s,dirHandle:e,fileName:n,file:o,fileHandle:u,accessHandle:E,emptyAsAbsent:ce,domain:de}}function ge(s,e){let{emptyAsAbsent:r,domain:t,fileName:n}=V(e),a=(n||s.name).replace(/^\/+/,"").replace(/\/+$/,""),o="/"+a,u,E;return{filePath:o,fileName:a,file:u,fileHandle:s,accessHandle:E,emptyAsAbsent:r,domain:t}}function ke(s,e,r,t){if(!r)throw new Error("No OPFS access handle registered with name: ".concat(e));if(!r.fileName)throw new Error("Invalid file handle registered with name: ".concat(e));if(!r.accessHandle){let n="Cannot perform ".concat(s," on an file that hasn't been opened: \"").concat(e,'"');if(t)throw new Error(n);console.warn(n)}}var q=(a=>(a[a.NONE=0]="NONE",a[a.DEBUG=1]="DEBUG",a[a.INFO=2]="INFO",a[a.WARNING=3]="WARNING",a[a.ERROR=4]="ERROR",a))(q||{}),$=(o=>(o[o.NONE=0]="NONE",o[o.CONNECT=1]="CONNECT",o[o.DISCONNECT=2]="DISCONNECT",o[o.OPEN=3]="OPEN",o[o.QUERY=4]="QUERY",o[o.INSTANTIATE=5]="INSTANTIATE",o))($||{}),z=(o=>(o[o.NONE=0]="NONE",o[o.OK=1]="OK",o[o.ERROR=2]="ERROR",o[o.START=3]="START",o[o.RUN=4]="RUN",o[o.CAPTURE=5]="CAPTURE",o))(z||{}),J=(a=>(a[a.NONE=0]="NONE",a[a.WEB_WORKER=1]="WEB_WORKER",a[a.NODE_WORKER=2]="NODE_WORKER",a[a.BINDINGS=3]="BINDINGS",a[a.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",a))(J||{}),w=class{log(e){}},P=class{constructor(e=2){this.level=e}log(e){e.level>=this.level&&console.log(e)}};function Se(s){switch(s){case 0:return"NONE";case 1:return"DEBUG";case 2:return"INFO";case 3:return"WARNING";case 4:return"ERROR";default:return"?"}}function he(s){switch(s){case 0:return"NONE";case 1:return"OK";case 2:return"ERROR";case 3:return"START";case 4:return"RUN";case 5:return"CAPTURE";default:return"?"}}function fe(s){switch(s){case 1:return"CONNECT";case 2:return"DISCONNECT";case 5:return"INSTANTIATE";case 3:return"OPEN";case 4:return"QUERY";default:return"?"}}function Ne(s){switch(s){case 0:return"NONE";case 1:return"WEB WORKER";case 2:return"NODE WORKER";case 3:return"DUCKDB BINDINGS";case 4:return"DUCKDB";default:return"?"}}var Z=(e=>(e[e.SUCCESS=0]="SUCCESS",e))(Z||{});var p=h(require("apache-arrow"));var m=class{constructor(e,r){this._bindings=e,this._conn=r}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(e){return e(this._bindings,this._conn)}async query(e){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:e});let r=await this._bindings.runQuery(this._conn,e),t=p.RecordBatchReader.from(r);return console.assert(t.isSync(),"Reader is not sync"),console.assert(t.isFile(),"Reader is not file"),new p.Table(t)}async send(e){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:e});let r=await this._bindings.startPendingQuery(this._conn,e);for(;r==null;)r=await this._bindings.pollPendingQuery(this._conn);let t=new _(this._bindings,this._conn,r),n=await p.RecordBatchReader.from(t);return console.assert(n.isAsync()),console.assert(n.isStream()),n}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(e){return await this._bindings.getTableNames(this._conn,e)}async prepare(e){let r=await this._bindings.createPrepared(this._conn,e);return new y(this._bindings,this._conn,r)}async insertArrowTable(e,r){let t=p.tableToIPC(e,"stream");await this.insertArrowFromIPCStream(t,r)}async insertArrowFromIPCStream(e,r){await this._bindings.insertArrowFromIPCStream(this._conn,e,r)}async insertCSVFromPath(e,r){await this._bindings.insertCSVFromPath(this._conn,e,r)}async insertJSONFromPath(e,r){await this._bindings.insertJSONFromPath(this._conn,e,r)}},_=class{constructor(e,r,t){this.db=e;this.conn=r;this.header=t;this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let e;return this._inFlight!=null?(e=await this._inFlight,this._inFlight=null):e=await this.db.fetchQueryResults(this.conn),this._depleted=e.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:e}}[Symbol.asyncIterator](){return this}},y=class{constructor(e,r,t){this.bindings=e,this.connectionId=r,this.statementId=t}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...e){let r=await this.bindings.runPrepared(this.connectionId,this.statementId,e),t=p.RecordBatchReader.from(r);return console.assert(t.isSync()),console.assert(t.isFile()),new p.Table(t)}async send(...e){let r=await this.bindings.sendPrepared(this.connectionId,this.statementId,e),t=new _(this.bindings,this.connectionId,r),n=await p.RecordBatchReader.from(t);return console.assert(n.isAsync()),console.assert(n.isStream()),n}};var A=(d=>(d.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",d.CLOSE_PREPARED="CLOSE_PREPARED",d.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",d.CONNECT="CONNECT",d.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",d.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",d.CREATE_PREPARED="CREATE_PREPARED",d.DISCONNECT="DISCONNECT",d.DROP_FILE="DROP_FILE",d.DROP_FILES="DROP_FILES",d.CLOSE_FILE="CLOSE_FILE",d.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",d.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",d.FLUSH_FILES="FLUSH_FILES",d.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",d.GET_TABLE_NAMES="GET_TABLE_NAMES",d.GET_VERSION="GET_VERSION",d.GLOB_FILE_INFOS="GLOB_FILE_INFOS",d.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",d.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",d.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",d.INSTANTIATE="INSTANTIATE",d.OPEN="OPEN",d.PING="PING",d.POLL_PENDING_QUERY="POLL_PENDING_QUERY",d.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",d.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",d.REGISTER_FILE_URL="REGISTER_FILE_URL",d.RESET="RESET",d.RUN_PREPARED="RUN_PREPARED",d.RUN_QUERY="RUN_QUERY",d.SEND_PREPARED="SEND_PREPARED",d.START_PENDING_QUERY="START_PENDING_QUERY",d.TOKENIZE="TOKENIZE",d))(A||{}),O=(l=>(l.CONNECTION_INFO="CONNECTION_INFO",l.ERROR="ERROR",l.FEATURE_FLAGS="FEATURE_FLAGS",l.FILE_BUFFER="FILE_BUFFER",l.FILE_INFOS="FILE_INFOS",l.FILE_SIZE="FILE_SIZE",l.FILE_STATISTICS="FILE_STATISTICS",l.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",l.LOG="LOG",l.OK="OK",l.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",l.QUERY_PLAN="QUERY_PLAN",l.QUERY_RESULT="QUERY_RESULT",l.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",l.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",l.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",l.REGISTERED_FILE="REGISTERED_FILE",l.SCRIPT_TOKENS="SCRIPT_TOKENS",l.SUCCESS="SUCCESS",l.TABLE_NAMES="TABLE_NAMES",l.VERSION_STRING="VERSION_STRING",l))(O||{}),i=class{constructor(e,r){this.promiseResolver=()=>{};this.promiseRejecter=()=>{};this.type=e,this.data=r,this.promise=new Promise((t,n)=>{this.promiseResolver=t,this.promiseRejecter=n})}};var c=h(require("apache-arrow"));function I(s){switch(s.typeId){case c.Type.Binary:return{sqlType:"binary"};case c.Type.Bool:return{sqlType:"bool"};case c.Type.Date:return{sqlType:"date"};case c.Type.DateDay:return{sqlType:"date32[d]"};case c.Type.DateMillisecond:return{sqlType:"date64[ms]"};case c.Type.Decimal:{let e=s;return{sqlType:"decimal",precision:e.precision,scale:e.scale}}case c.Type.Float:return{sqlType:"float"};case c.Type.Float16:return{sqlType:"float16"};case c.Type.Float32:return{sqlType:"float32"};case c.Type.Float64:return{sqlType:"float64"};case c.Type.Int:return{sqlType:"int32"};case c.Type.Int16:return{sqlType:"int16"};case c.Type.Int32:return{sqlType:"int32"};case c.Type.Int64:return{sqlType:"int64"};case c.Type.Uint16:return{sqlType:"uint16"};case c.Type.Uint32:return{sqlType:"uint32"};case c.Type.Uint64:return{sqlType:"uint64"};case c.Type.Uint8:return{sqlType:"uint8"};case c.Type.IntervalDayTime:return{sqlType:"interval[dt]"};case c.Type.IntervalYearMonth:return{sqlType:"interval[m]"};case c.Type.List:return{sqlType:"list",valueType:I(s.valueType)};case c.Type.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:s.byteWidth};case c.Type.Null:return{sqlType:"null"};case c.Type.Utf8:return{sqlType:"utf8"};case c.Type.Struct:return{sqlType:"struct",fields:s.children.map(r=>g(r.name,r.type))};case c.Type.Map:{let e=s;return{sqlType:"map",keyType:I(e.keyType),valueType:I(e.valueType)}}case c.Type.Time:return{sqlType:"time[s]"};case c.Type.TimeMicrosecond:return{sqlType:"time[us]"};case c.Type.TimeMillisecond:return{sqlType:"time[ms]"};case c.Type.TimeNanosecond:return{sqlType:"time[ns]"};case c.Type.TimeSecond:return{sqlType:"time[s]"};case c.Type.Timestamp:return{sqlType:"timestamp",timezone:s.timezone||void 0};case c.Type.TimestampSecond:return{sqlType:"timestamp[s]",timezone:s.timezone||void 0};case c.Type.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:s.timezone||void 0};case c.Type.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:s.timezone||void 0};case c.Type.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:s.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(s.toString()))}function g(s,e){let r=I(e);return r.name=s,r}var Fe=new TextEncoder,D=class{constructor(e,r=null){this._onInstantiationProgress=[];this._worker=null;this._workerShutdownPromise=null;this._workerShutdownResolver=()=>{};this._nextMessageId=0;this._pendingRequests=new Map;this._logger=e,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),r!=null&&this.attach(r)}get logger(){return this._logger}attach(e){this._worker=e,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((r,t)=>{this._workerShutdownResolver=r})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(e,r=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!");return}let t=this._nextMessageId++;return this._pendingRequests.set(t,e),this._worker.postMessage({messageId:t,type:e.type,data:e.data},r),await e.promise}onMessage(e){var n;let r=e.data;switch(r.type){case"LOG":{this._logger.log(r.data);return}case"INSTANTIATE_PROGRESS":{for(let a of this._onInstantiationProgress)a(r.data);return}}let t=this._pendingRequests.get(r.requestId);if(!t){console.warn("unassociated response: [".concat(r.requestId,", ").concat(r.type.toString(),"]"));return}if(this._pendingRequests.delete(r.requestId),r.type=="ERROR"){let a=new Error(r.data.message);a.name=r.data.name,(n=Object.getOwnPropertyDescriptor(a,"stack"))!=null&&n.writable&&(a.stack=r.data.stack),t.promiseRejecter(a);return}switch(t.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(r.type=="OK"){t.promiseResolver(r.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],r.type=="OK"){t.promiseResolver(r.data);return}break;case"GLOB_FILE_INFOS":if(r.type=="FILE_INFOS"){t.promiseResolver(r.data);return}break;case"GET_VERSION":if(r.type=="VERSION_STRING"){t.promiseResolver(r.data);return}break;case"GET_FEATURE_FLAGS":if(r.type=="FEATURE_FLAGS"){t.promiseResolver(r.data);return}break;case"GET_TABLE_NAMES":if(r.type=="TABLE_NAMES"){t.promiseResolver(r.data);return}break;case"TOKENIZE":if(r.type=="SCRIPT_TOKENS"){t.promiseResolver(r.data);return}break;case"COPY_FILE_TO_BUFFER":if(r.type=="FILE_BUFFER"){t.promiseResolver(r.data);return}break;case"EXPORT_FILE_STATISTICS":if(r.type=="FILE_STATISTICS"){t.promiseResolver(r.data);return}break;case"CONNECT":if(r.type=="CONNECTION_INFO"){t.promiseResolver(r.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(r.type=="QUERY_RESULT"){t.promiseResolver(r.data);return}break;case"SEND_PREPARED":if(r.type=="QUERY_RESULT_HEADER"){t.promiseResolver(r.data);return}break;case"START_PENDING_QUERY":if(r.type=="QUERY_RESULT_HEADER_OR_NULL"){t.promiseResolver(r.data);return}break;case"POLL_PENDING_QUERY":if(r.type=="QUERY_RESULT_HEADER_OR_NULL"){t.promiseResolver(r.data);return}break;case"CANCEL_PENDING_QUERY":case"CLOSE_FILE":if(this._onInstantiationProgress=[],r.type=="SUCCESS"){t.promiseResolver(r.data);return}break;case"FETCH_QUERY_RESULTS":if(r.type=="QUERY_RESULT_CHUNK"){t.promiseResolver(r.data);return}break;case"CREATE_PREPARED":if(r.type=="PREPARED_STATEMENT_ID"){t.promiseResolver(r.data);return}break}t.promiseRejecter(new Error("unexpected response type: ".concat(r.type.toString())))}onError(e){console.error(e),console.error("error in duckdb worker: ".concat(e.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}async reset(){let e=new i("RESET",null);return await this.postTask(e)}async ping(){let e=new i("PING",null);await this.postTask(e)}async dropFile(e){let r=new i("DROP_FILE",e);return await this.postTask(r)}async dropFiles(){let e=new i("DROP_FILES",null);return await this.postTask(e)}async flushFiles(){let e=new i("FLUSH_FILES",null);return await this.postTask(e)}async closeFile(e){let r=new i("CLOSE_FILE",e);return await this.postTask(r)}async instantiate(e,r=null,t=n=>{}){this._onInstantiationProgress.push(t);let n=new i("INSTANTIATE",[e,r]);return await this.postTask(n)}async getVersion(){let e=new i("GET_VERSION",null);return await this.postTask(e)}async getFeatureFlags(){let e=new i("GET_FEATURE_FLAGS",null);return await this.postTask(e)}async open(e){let r=new i("OPEN",e);await this.postTask(r)}async tokenize(e){let r=new i("TOKENIZE",e);return await this.postTask(r)}async connectInternal(){let e=new i("CONNECT",null);return await this.postTask(e)}async connect(){let e=await this.connectInternal();return new m(this,e)}async disconnect(e){let r=new i("DISCONNECT",e);await this.postTask(r)}async runQuery(e,r){let t=new i("RUN_QUERY",[e,r]);return await this.postTask(t)}async startPendingQuery(e,r){let t=new i("START_PENDING_QUERY",[e,r]);return await this.postTask(t)}async pollPendingQuery(e){let r=new i("POLL_PENDING_QUERY",e);return await this.postTask(r)}async cancelPendingQuery(e){let r=new i("CANCEL_PENDING_QUERY",e);return await this.postTask(r)}async fetchQueryResults(e){let r=new i("FETCH_QUERY_RESULTS",e);return await this.postTask(r)}async getTableNames(e,r){let t=new i("GET_TABLE_NAMES",[e,r]);return await this.postTask(t)}async createPrepared(e,r){let t=new i("CREATE_PREPARED",[e,r]);return await this.postTask(t)}async closePrepared(e,r){let t=new i("CLOSE_PREPARED",[e,r]);await this.postTask(t)}async runPrepared(e,r,t){let n=new i("RUN_PREPARED",[e,r,t]);return await this.postTask(n)}async sendPrepared(e,r,t){let n=new i("SEND_PREPARED",[e,r,t]);return await this.postTask(n)}async globFiles(e){let r=new i("GLOB_FILE_INFOS",e);return await this.postTask(r)}async registerFileText(e,r){let t=Fe.encode(r);await this.registerFileBuffer(e,t)}async registerFileURL(e,r,t,n){r===void 0&&(r=e);let a=new i("REGISTER_FILE_URL",[e,r,t,n]);await this.postTask(a)}async registerEmptyFileBuffer(e){let r=new i("REGISTER_FILE_BUFFER",[e,new Uint8Array]);await this.postTask(r)}async registerFileBuffer(e,r){let t=new i("REGISTER_FILE_BUFFER",[e,r]);await this.postTask(t,[r.buffer])}async registerFileHandle(e,r,t,n){let a=new i("REGISTER_FILE_HANDLE",[e,r,t,n]);await this.postTask(a,[])}async collectFileStatistics(e,r){let t=new i("COLLECT_FILE_STATISTICS",[e,r]);await this.postTask(t,[])}async exportFileStatistics(e){let r=new i("EXPORT_FILE_STATISTICS",e);return await this.postTask(r,[])}async copyFileToBuffer(e){let r=new i("COPY_FILE_TO_BUFFER",e);return await this.postTask(r)}async copyFileToPath(e,r){let t=new i("COPY_FILE_TO_PATH",[e,r]);await this.postTask(t)}async insertArrowFromIPCStream(e,r,t){if(r.length==0)return;let n=new i("INSERT_ARROW_FROM_IPC_STREAM",[e,r,t]);await this.postTask(n,[r.buffer])}async insertCSVFromPath(e,r,t){if(t.columns!==void 0){let a=[];for(let o in t.columns){let u=t.columns[o];a.push(g(o,u))}t.columnsFlat=a,delete t.columns}let n=new i("IMPORT_CSV_FROM_PATH",[e,r,t]);await this.postTask(n)}async insertJSONFromPath(e,r,t){if(t.columns!==void 0){let a=[];for(let o in t.columns){let u=t.columns[o];a.push(g(o,u))}t.columnsFlat=a,delete t.columns}let n=new i("IMPORT_JSON_FROM_PATH",[e,r,t]);await this.postTask(n)}};var L=class{constructor(){this._bindings=null;this._nextMessageId=0}log(e){this.postMessage({messageId:this._nextMessageId++,requestId:0,type:"LOG",data:e},[])}sendOK(e){this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"OK",data:null},[])}failWith(e,r){let t={name:r.name,message:r.message,stack:r.stack||void 0};this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"ERROR",data:t},[])}sendRaw(e,r,t){let n={messageId:this._nextMessageId++,requestId:e.messageId,type:r,data:t};this.postMessage(n,[])}async onMessage(e){switch(e.type){case"PING":this.sendOK(e);return;case"INSTANTIATE":this._bindings!=null&&this.failWith(e,new Error("duckdb already initialized"));try{this._bindings=await this.instantiate(e.data[0],e.data[1],r=>{this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"INSTANTIATE_PROGRESS",data:r},[])}),this.sendOK(e)}catch(r){console.log(r),this._bindings=null,this.failWith(e,r)}return;default:break}if(!this._bindings)return this.failWith(e,new Error("duckdb is not initialized"));try{switch(e.type){case"GET_VERSION":this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"VERSION_STRING",data:this._bindings.getVersion()},[]);break;case"GET_FEATURE_FLAGS":this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FEATURE_FLAGS",data:this._bindings.getFeatureFlags()},[]);break;case"RESET":this._bindings.reset(),this.sendOK(e);break;case"OPEN":this._bindings.open(e.data),this.sendOK(e);break;case"DROP_FILE":this._bindings.dropFile(e.data),this.sendOK(e);break;case"DROP_FILES":this._bindings.dropFiles(),this.sendOK(e);break;case"FLUSH_FILES":this._bindings.flushFiles(),this.sendOK(e);break;case"CLOSE_FILE":{let r=this._bindings.closeFile(e.data);this.sendRaw(e,"SUCCESS",r);break}case"CONNECT":{let r=this._bindings.connect();this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"CONNECTION_INFO",data:r.useUnsafe((t,n)=>n)},[]);break}case"DISCONNECT":this._bindings.disconnect(e.data),this.sendOK(e);break;case"CREATE_PREPARED":{let r=this._bindings.createPrepared(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"PREPARED_STATEMENT_ID",data:r},[]);break}case"CLOSE_PREPARED":{this._bindings.closePrepared(e.data[0],e.data[1]),this.sendOK(e);break}case"RUN_PREPARED":{let r=this._bindings.runPrepared(e.data[0],e.data[1],e.data[2]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT",data:r},[r.buffer]);break}case"RUN_QUERY":{let r=this._bindings.runQuery(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT",data:r},[r.buffer]);break}case"SEND_PREPARED":{let r=this._bindings.sendPrepared(e.data[0],e.data[1],e.data[2]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER",data:r},[r.buffer]);break}case"START_PENDING_QUERY":{let r=this._bindings.startPendingQuery(e.data[0],e.data[1]),t=[];r&&t.push(r.buffer),this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER_OR_NULL",data:r},t);break}case"POLL_PENDING_QUERY":{let r=this._bindings.pollPendingQuery(e.data),t=[];r&&t.push(r.buffer),this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER_OR_NULL",data:r},t);break}case"CANCEL_PENDING_QUERY":{let r=this._bindings.cancelPendingQuery(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"SUCCESS",data:r},[]);break}case"FETCH_QUERY_RESULTS":{let r=this._bindings.fetchQueryResults(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_CHUNK",data:r},[r.buffer]);break}case"GET_TABLE_NAMES":{let r=this._bindings.getTableNames(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"TABLE_NAMES",data:r},[]);break}case"GLOB_FILE_INFOS":{let r=this._bindings.globFiles(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_INFOS",data:r},[]);break}case"REGISTER_FILE_URL":this._bindings.registerFileURL(e.data[0],e.data[1],e.data[2],e.data[3]),this.sendOK(e);break;case"REGISTER_FILE_BUFFER":this._bindings.registerFileBuffer(e.data[0],e.data[1]),this.sendOK(e);break;case"REGISTER_FILE_HANDLE":await this._bindings.registerFileHandle(e.data[0],e.data[1],e.data[2],e.data[3]),this.sendOK(e);break;case"COPY_FILE_TO_PATH":this._bindings.copyFileToPath(e.data[0],e.data[1]),this.sendOK(e);break;case"COPY_FILE_TO_BUFFER":{let r=this._bindings.copyFileToBuffer(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_BUFFER",data:r},[]);break}case"COLLECT_FILE_STATISTICS":this._bindings.collectFileStatistics(e.data[0],e.data[1]),this.sendOK(e);break;case"EXPORT_FILE_STATISTICS":{this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_STATISTICS",data:this._bindings.exportFileStatistics(e.data)},[]);break}case"INSERT_ARROW_FROM_IPC_STREAM":{this._bindings.insertArrowFromIPCStream(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"IMPORT_CSV_FROM_PATH":{this._bindings.insertCSVFromPath(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"IMPORT_JSON_FROM_PATH":{this._bindings.insertJSONFromPath(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"TOKENIZE":{let r=this._bindings.tokenize(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"SCRIPT_TOKENS",data:r},[]);break}}}catch(r){return console.log(r),this.failWith(e,r)}}};var X=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),ee=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11]));var re=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));var te=()=>(async s=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(s)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));var k={name:"@duckdb/duckdb-wasm",version:"1.11.0",description:"DuckDB powered by WebAssembly",license:"MIT",repository:{type:"git",url:"https://github.com/duckdb/duckdb-wasm.git"},keywords:["sql","duckdb","relational","database","data","query","wasm","analytics","olap","arrow","parquet","json","csv"],dependencies:{"apache-arrow":"^12.0.0"},devDependencies:{"@types/emscripten":"^1.39.6","@types/jasmine":"^4.3.1","@types/wicg-file-system-access":"^2023.10.2","@typescript-eslint/eslint-plugin":"^6.3.0","@typescript-eslint/parser":"^6.2.1",esbuild:"^0.18.13",eslint:"^8.47.0","eslint-plugin-jasmine":"^4.1.3","eslint-plugin-react":"^7.32.2","fast-glob":"^3.3.1",jasmine:"^5.1.0","jasmine-core":"^5.0.0","jasmine-spec-reporter":"^7.0.0","js-sha256":"^0.9.0",karma:"^6.4.2","karma-chrome-launcher":"^3.2.0","karma-coverage":"^2.2.0","karma-firefox-launcher":"^2.1.2","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.1.0","karma-sourcemap-loader":"^0.4.0","karma-spec-reporter":"^0.0.36","make-dir":"^3.1.0",nyc:"^15.1.0",prettier:"^2.8.4",puppeteer:"^20.8.0",rimraf:"^4.3.0",s3rver:"^3.7.1",typedoc:"^0.24.8",typescript:"^5","wasm-feature-detect":"^1.5.1","web-worker":"^1.2.0"},scripts:{"build:debug":"node bundle.mjs debug && tsc --emitDeclarationOnly","build:release":"node bundle.mjs release && tsc --emitDeclarationOnly",docs:"typedoc",report:"node ./coverage.mjs","test:node":"node --enable-source-maps ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:node:debug":"node --inspect-brk --enable-source-maps ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:node:coverage":"nyc -r json --report-dir ./coverage/node node ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:firefox":"karma start ./karma/tests-firefox.cjs","test:chrome":"karma start ./karma/tests-chrome.cjs","test:chrome:eh":"karma start ./karma/tests-chrome-eh.cjs","test:chrome:coverage":"karma start ./karma/tests-chrome-coverage.cjs","test:browser":"karma start ./karma/tests-all.cjs","test:browser:debug":"karma start ./karma/tests-debug.cjs",test:"npm run test:chrome && npm run test:node","test:coverage":"npm run test:chrome:coverage && npm run test:node:coverage && npm run report",lint:"eslint src test"},files:["dist","!dist/types/test"],main:"dist/duckdb-browser.cjs",module:"dist/duckdb-browser.mjs",types:"dist/duckdb-browser.d.ts",jsdelivr:"dist/duckdb-browser.cjs",unpkg:"dist/duckdb-browser.mjs",sideEffects:!1,browser:{fs:!1,path:!1,perf_hooks:!1,os:!1,worker_threads:!1},exports:{"./dist/duckdb-mvp.wasm":"./dist/duckdb-mvp.wasm","./dist/duckdb-eh.wasm":"./dist/duckdb-eh.wasm","./dist/duckdb-coi.wasm":"./dist/duckdb-coi.wasm","./dist/duckdb-browser":"./dist/duckdb-browser.mjs","./dist/duckdb-browser.cjs":"./dist/duckdb-browser.cjs","./dist/duckdb-browser.mjs":"./dist/duckdb-browser.mjs","./dist/duckdb-browser-blocking":"./dist/duckdb-browser-blocking.mjs","./dist/duckdb-browser-blocking.mjs":"./dist/duckdb-browser-blocking.mjs","./dist/duckdb-browser-blocking.cjs":"./dist/duckdb-browser-blocking.cjs","./dist/duckdb-browser-coi.pthread.worker.js":"./dist/duckdb-browser-coi.pthread.worker.js","./dist/duckdb-browser-coi.worker.js":"./dist/duckdb-browser-coi.worker.js","./dist/duckdb-browser-eh.worker.js":"./dist/duckdb-browser-eh.worker.js","./dist/duckdb-browser-mvp.worker.js":"./dist/duckdb-browser-mvp.worker.js","./dist/duckdb-node":"./dist/duckdb-node.cjs","./dist/duckdb-node.cjs":"./dist/duckdb-node.cjs","./dist/duckdb-node-blocking":"./dist/duckdb-node-blocking.cjs","./dist/duckdb-node-blocking.cjs":"./dist/duckdb-node-blocking.cjs","./dist/duckdb-node-eh.worker.cjs":"./dist/duckdb-node-eh.worker.cjs","./dist/duckdb-node-mvp.worker.cjs":"./dist/duckdb-node-mvp.worker.cjs","./blocking":{browser:{types:"./dist/duckdb-browser-blocking.d.ts",import:"./dist/duckdb-browser-blocking.mjs",require:"./dist/duckdb-browser-blocking.cjs"},node:{types:"./dist/duckdb-node-blocking.d.ts",require:"./dist/duckdb-node-blocking.cjs",import:"./dist/duckdb-node-blocking.cjs"},types:"./dist/duckdb-browser-blocking.d.ts",import:"./dist/duckdb-browser-blocking.mjs",require:"./dist/duckdb-browser-blocking.cjs"},".":{browser:{types:"./dist/duckdb-browser.d.ts",import:"./dist/duckdb-browser.mjs",require:"./dist/duckdb-browser.cjs"},node:{types:"./dist/duckdb-node.d.ts",import:"./dist/duckdb-node.cjs",require:"./dist/duckdb-node.cjs"},types:"./dist/duckdb-browser.d.ts",import:"./dist/duckdb-browser.mjs",require:"./dist/duckdb-browser.cjs"}}};var C=k.name,U=k.version,v=k.version.split("."),Ae=v[0],Oe=v[1],De=v[2];var H=()=>typeof navigator>"u",se=()=>H()?"node":navigator.userAgent,Le=()=>se().includes("Firefox"),Ce=()=>/^((?!chrome|android).)*safari/i.test(se());function Ue(){let s="https://cdn.jsdelivr.net/npm/".concat(C,"@").concat(U,"/dist/");return{mvp:{mainModule:"".concat(s,"duckdb-mvp.wasm"),mainWorker:"".concat(s,"duckdb-browser-mvp.worker.js")},eh:{mainModule:"".concat(s,"duckdb-eh.wasm"),mainWorker:"".concat(s,"duckdb-browser-eh.worker.js")}}}var W=null,M=null,B=null,x=null,G=null;async function ne(){return W==null&&(W=typeof BigInt64Array<"u"),M==null&&(M=await ee()),B==null&&(B=await te()),x==null&&(x=await re()),G==null&&(G=await X()),{bigInt64Array:W,crossOriginIsolated:H()||globalThis.crossOriginIsolated||!1,wasmExceptions:M,wasmSIMD:x,wasmThreads:B,wasmBulkMemory:G}}async function ve(s){let e=await ne();if(e.wasmExceptions){if(e.wasmSIMD&&e.wasmThreads&&e.crossOriginIsolated&&s.coi)return{mainModule:s.coi.mainModule,mainWorker:s.coi.mainWorker,pthreadWorker:s.coi.pthreadWorker};if(s.eh)return{mainModule:s.eh.mainModule,mainWorker:s.eh.mainWorker,pthreadWorker:null}}return{mainModule:s.mvp.mainModule,mainWorker:s.mvp.mainWorker,pthreadWorker:null}}var ie=h(ae());async function We(s){let e=new Request(s),r=await fetch(e),t=URL.createObjectURL(await r.blob());return new ie.default(t)}function Me(){let s=new TextDecoder;return e=>(typeof SharedArrayBuffer<"u"&&e.buffer instanceof SharedArrayBuffer&&(e=new Uint8Array(e)),s.decode(e))}var lr=Me();var Q=(o=>(o[o.BUFFER=0]="BUFFER",o[o.NODE_FS=1]="NODE_FS",o[o.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",o[o.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",o[o.HTTP=4]="HTTP",o[o.S3=5]="S3",o))(Q||{});
//# sourceMappingURL=duckdb-browser.cjs.map
