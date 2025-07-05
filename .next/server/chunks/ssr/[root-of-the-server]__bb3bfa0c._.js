module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reconnect": (()=>reconnect)
});
let isReconnecting = false;
async function reconnect(config, parameters = {}) {
    // If already reconnecting, do nothing
    if (isReconnecting) return [];
    isReconnecting = true;
    config.setState((x)=>({
            ...x,
            status: x.current ? 'reconnecting' : 'connecting'
        }));
    const connectors = [];
    if (parameters.connectors?.length) {
        for (const connector_ of parameters.connectors){
            let connector;
            // "Register" connector if not already created
            if (typeof connector_ === 'function') connector = config._internal.connectors.setup(connector_);
            else connector = connector_;
            connectors.push(connector);
        }
    } else connectors.push(...config.connectors);
    // Try recently-used connectors first
    let recentConnectorId;
    try {
        recentConnectorId = await config.storage?.getItem('recentConnectorId');
    } catch  {}
    const scores = {};
    for (const [, connection] of config.state.connections){
        scores[connection.connector.id] = 1;
    }
    if (recentConnectorId) scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? [
        ...connectors
    ].sort((a, b)=>(scores[a.id] ?? 10) - (scores[b.id] ?? 10)) : connectors;
    // Iterate through each connector and try to connect
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted){
        const provider = await connector.getProvider().catch(()=>undefined);
        if (!provider) continue;
        // If we already have an instance of this connector's provider,
        // then we have already checked it (ie. injected connectors can
        // share the same `window.ethereum` instance, so we don't want to
        // connect to it again).
        if (providers.some((x)=>x === provider)) continue;
        const isAuthorized = await connector.isAuthorized();
        if (!isAuthorized) continue;
        const data = await connector.connect({
            isReconnecting: true
        }).catch(()=>null);
        if (!data) continue;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        config.setState((x)=>{
            const connections = new Map(connected ? x.connections : new Map()).set(connector.uid, {
                accounts: data.accounts,
                chainId: data.chainId,
                connector
            });
            return {
                ...x,
                current: connected ? x.current : connector.uid,
                connections
            };
        });
        connections.push({
            accounts: data.accounts,
            chainId: data.chainId,
            connector
        });
        providers.push(provider);
        connected = true;
    }
    // Prevent overwriting connected status from race condition
    if (config.state.status === 'reconnecting' || config.state.status === 'connecting') {
        // If connecting didn't succeed, set to disconnected
        if (!connected) config.setState((x)=>({
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            }));
        else config.setState((x)=>({
                ...x,
                status: 'connected'
            }));
    }
    isReconnecting = false;
    return connections;
} //# sourceMappingURL=reconnect.js.map
}}),
"[project]/node_modules/@wagmi/core/dist/esm/hydrate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hydrate": (()=>hydrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-ssr] (ecmascript)");
;
function hydrate(config, parameters) {
    const { initialState, reconnectOnMount } = parameters;
    if (initialState && !config._internal.store.persist.hasHydrated()) config.setState({
        ...initialState,
        chainId: config.chains.some((x)=>x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
        connections: reconnectOnMount ? initialState.connections : new Map(),
        status: reconnectOnMount ? 'reconnecting' : 'disconnected'
    });
    return {
        async onMount () {
            if (config._internal.ssr) {
                await config._internal.store.persist.rehydrate();
                if (config._internal.mipd) {
                    config._internal.connectors.setState((connectors)=>{
                        const rdnsSet = new Set();
                        for (const connector of connectors ?? []){
                            if (connector.rdns) {
                                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [
                                    connector.rdns
                                ];
                                for (const rdns of rdnsValues){
                                    rdnsSet.add(rdns);
                                }
                            }
                        }
                        const mipdConnectors = [];
                        const providers = config._internal.mipd?.getProviders() ?? [];
                        for (const provider of providers){
                            if (rdnsSet.has(provider.info.rdns)) continue;
                            const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
                            const connector = config._internal.connectors.setup(connectorFn);
                            mipdConnectors.push(connector);
                        }
                        return [
                            ...connectors,
                            ...mipdConnectors
                        ];
                    });
                }
            }
            if (reconnectOnMount) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reconnect"])(config);
            else if (config.storage) // Reset connections that may have been hydrated from storage.
            config.setState((x)=>({
                    ...x,
                    connections: new Map()
                }));
        }
    };
} //# sourceMappingURL=hydrate.js.map
}}),
"[project]/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hydrate": (()=>Hydrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@wagmi/core/dist/esm/hydrate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active.current) return;
        if (!config._internal.ssr) return;
        onMount();
        return ()=>{
            active.current = false;
        };
    }, []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}}),
"[project]/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WagmiContext": (()=>WagmiContext),
    "WagmiProvider": (()=>WagmiProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hydrate.js [app-ssr] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}}),
"[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "QueryClientContext": (()=>QueryClientContext),
    "QueryClientProvider": (()=>QueryClientProvider),
    "useQueryClient": (()=>useQueryClient)
});
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
var useQueryClient = (queryClient)=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bb3bfa0c._.js.map