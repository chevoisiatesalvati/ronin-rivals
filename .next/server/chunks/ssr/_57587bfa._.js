module.exports = {

"[project]/src/components/TantoConnect.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TantoConnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sky$2d$mavis$2f$tanto$2d$widget$2f$dist$2f$mjs$2f$ConnectButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sky-mavis/tanto-widget/dist/mjs/ConnectButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TantoConnect() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { data: balance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalance"])({
        address
    });
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const handleDisconnect = ()=>{
        disconnect();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Wallet disconnected');
    };
    // Don't render anything until mounted to avoid hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-md rounded-lg p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-8",
                        children: "⚔️ Ronin Rivals ⚔️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TantoConnect.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80 mb-8",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TantoConnect.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TantoConnect.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TantoConnect.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-md rounded-lg p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-8",
                        children: "⚔️ Ronin Rivals ⚔️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TantoConnect.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80 mb-8",
                        children: "Connect your wallet to begin your Samurai journey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TantoConnect.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sky$2d$mavis$2f$tanto$2d$widget$2f$dist$2f$mjs$2f$ConnectButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TantoConnectButton"], {
                        onConnect: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Wallet connected successfully!')
                    }, void 0, false, {
                        fileName: "[project]/src/components/TantoConnect.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TantoConnect.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TantoConnect.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-white",
                    children: "⚔️ Ronin Rivals ⚔️"
                }, void 0, false, {
                    fileName: "[project]/src/components/TantoConnect.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80 text-sm",
                            children: [
                                "Connected: ",
                                address?.slice(0, 6),
                                "...",
                                address?.slice(-4)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TantoConnect.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80 text-sm",
                            children: [
                                "Balance: ",
                                balance ? (Number(balance.value) / 1e18).toFixed(4) : '0',
                                ' ',
                                "RON"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TantoConnect.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDisconnect,
                            className: "text-red-300 hover:text-red-100 text-sm",
                            children: "Disconnect"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TantoConnect.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TantoConnect.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TantoConnect.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TantoConnect.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Contract configuration
__turbopack_context__.s({
    "CONTRACT_ADDRESS": (()=>CONTRACT_ADDRESS),
    "NETWORK_CONFIG": (()=>NETWORK_CONFIG)
});
const CONTRACT_ADDRESS = '0xA581BBA44A55020E37e666EC8b8a0e69bAeF5fcE';
const NETWORK_CONFIG = {
    chainId: 2021,
    name: 'Saigon Testnet'
};
}}),
"[project]/artifacts/contracts/Game.sol/RoninRivals.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"_format\":\"hh3-artifact-1\",\"contractName\":\"RoninRivals\",\"sourceName\":\"contracts/Game.sol\",\"abi\":[{\"inputs\":[],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"loser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"BattleEnded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bet\",\"type\":\"uint256\"}],\"name\":\"BattleStarted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"damage\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"remainingHealth\",\"type\":\"uint256\"}],\"name\":\"BattleTurn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"SamuraiCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"stat\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newValue\",\"type\":\"uint256\"}],\"name\":\"SkillUpgraded\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAXIMUM_BET\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINIMUM_BET\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SKILL_POINTS_PER_LEVEL\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"XP_PER_LEVEL\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"battleIdCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"battles\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"bet\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"player1Health\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"player2Health\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isActive\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"currentTurn\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"turnCount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"createSamurai\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_battleId\",\"type\":\"uint256\"}],\"name\":\"executeTurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_battleId\",\"type\":\"uint256\"}],\"name\":\"getBattle\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"bet\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"player1Health\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"player2Health\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"isActive\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"currentTurn\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"turnCount\",\"type\":\"uint256\"}],\"internalType\":\"struct RoninRivals.Battle\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_player\",\"type\":\"address\"}],\"name\":\"getSamurai\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"level\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"experience\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"skillPoints\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"strength\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"defense\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"speed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"health\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"battlesWon\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"battlesLost\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"exists\",\"type\":\"bool\"}],\"internalType\":\"struct RoninRivals.Samurai\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"samurais\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"level\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"experience\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"skillPoints\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"strength\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"defense\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"speed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"health\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"battlesWon\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"battlesLost\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"exists\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_opponent\",\"type\":\"address\"}],\"name\":\"startBattle\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_stat\",\"type\":\"uint8\"}],\"name\":\"upgradeStat\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"bytecode\":\"0x6080604052600380546001600160a01b03191633179055611a16806100235f395ff3fe6080604052600436106100d9575f3560e01c80637b1b06461161007c578063a13eb44d11610057578063a13eb44d146103ee578063a23ec81d1461040d578063ecdd292a1461042c578063fe3edcd11461043f575f5ffd5b80637b1b0646146103a55780637c7036c1146103b9578063935aae40146103d4575f5ffd5b80634fcceee3116100b75780634fcceee31461015e57806357e333d21461017d578063606d2e961461019f5780636dd0ce7a1461025d575f5ffd5b806308e4f9f7146100dd57806338ca43d01461011c5780633ccfd60b14610148575b5f5ffd5b3480156100e8575f5ffd5b506100fc6100f7366004611562565b610454565b6040516101139b9a999897969594939291906115bd565b60405180910390f35b348015610127575f5ffd5b5061013b610136366004611562565b610533565b6040516101139190611621565b348015610153575f5ffd5b5061015c6106ad565b005b348015610169575f5ffd5b5061015c6101783660046116bc565b61079a565b348015610188575f5ffd5b50610191600381565b604051908152602001610113565b3480156101aa575f5ffd5b5061020e6101b93660046116bc565b600160208190525f918252604090912080549181015460028201546003830154600484015460058501546006909501546001600160a01b03968716969485169593949293919260ff8316926101009004169088565b604080516001600160a01b03998a168152978916602089015287019590955260608601939093526080850191909152151560a084015290921660c082015260e081019190915261010001610113565b348015610268575f5ffd5b506103376102773660046116bc565b60408051610100810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152505f908152600160208181526040928390208351610100808201865282546001600160a01b039081168352948301548516938201939093526002820154948101949094526003810154606085015260048101546080850152600581015460ff8116151560a08601529190910490911660c08301526006015460e082015290565b604051610113919081516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519083015260a08084015115159083015260c0808401519091169082015260e091820151918101919091526101000190565b3480156103b0575f5ffd5b50610191606481565b3480156103c4575f5ffd5b50610191670de0b6b3a764000081565b3480156103df575f5ffd5b50610191662386f26fc1000081565b3480156103f9575f5ffd5b5061015c6104083660046116d3565b610a0b565b348015610418575f5ffd5b5061015c610427366004611707565b610cd8565b61015c61043a366004611562565b610ea1565b34801561044a575f5ffd5b5061019160025481565b5f6020819052908152604090208054819061046e906117ba565b80601f016020809104026020016040519081016040528092919081815260200182805461049a906117ba565b80156104e55780601f106104bc576101008083540402835291602001916104e5565b820191905f5260205f20905b8154815290600101906020018083116104c857829003601f168201915b50505060018401546002850154600386015460048701546005880154600689015460078a015460088b015460098c0154600a909c01549a9b979a969950949750929591949093919060ff168b565b610588604051806101600160405280606081526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f151581525090565b6001600160a01b0382165f9081526020819052604090819020815161016081019092528054829082906105ba906117ba565b80601f01602080910402602001604051908101604052809291908181526020018280546105e6906117ba565b80156106315780601f1061060857610100808354040283529160200191610631565b820191905f5260205f20905b81548152906001019060200180831161061457829003601f168201915b505050918352505060018201546020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154610120820152600a9091015460ff1615156101409091015292915050565b6003546001600160a01b0316331461071a5760405162461bcd60e51b815260206004820152602560248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526431ba34b7b760d91b60648201526084015b60405180910390fd5b478061075f5760405162461bcd60e51b81526020600482015260146024820152734e6f2066756e647320746f20776974686472617760601b6044820152606401610711565b6003546040516001600160a01b039091169082156108fc029083905f818181858888f19350505050158015610796573d5f5f3e3d5ffd5b5050565b5f818152600160205260409020600581015460ff166107f25760405162461bcd60e51b8152602060048201526014602482015273426174746c65206973206e6f742061637469766560601b6044820152606401610711565b600581015461010090046001600160a01b031633146108435760405162461bcd60e51b815260206004820152600d60248201526c2737ba103cb7bab9103a3ab93760991b6044820152606401610711565b805433905f906001600160a01b031682146108685782546001600160a01b0316610877565b60018301546001600160a01b03165b90505f6108848383611260565b84549091506001600160a01b03908116908416036108c757808460040154116108ad575f6108bd565b8084600401546108bd9190611806565b60048501556108ee565b808460030154116108d8575f6108e8565b8084600301546108e89190611806565b60038501555b600684018054905f6108ff83611819565b9091555050835485907f32f21e78f1b9253d6b5647e7be62d64cdae398bb6b05c2767207f35a79f76ce090859084906001600160a01b0380841691161461094a578760030154610950565b87600401545b604080516001600160a01b03909416845260208401929092529082015260600160405180910390a26003840154158061098b57506004840154155b1561099e576109998561132c565b610a04565b8354600585015461010090046001600160a01b039081169116146109cc5783546001600160a01b03166109db565b60018401546001600160a01b03165b8460050160016101000a8154816001600160a01b0302191690836001600160a01b031602179055505b5050505050565b335f908152602081905260409020600a015460ff16610a6c5760405162461bcd60e51b815260206004820152601f60248201527f596f75206d7573742063726561746520612053616d75726169206669727374006044820152606401610711565b335f9081526020819052604090206003810154610acb5760405162461bcd60e51b815260206004820152601960248201527f4e6f20736b696c6c20706f696e747320617661696c61626c65000000000000006044820152606401610711565b60048260ff1610610b0d5760405162461bcd60e51b815260206004820152600c60248201526b125b9d985b1a59081cdd185d60a21b6044820152606401610711565b600381018054905f610b1e83611831565b91905055508160ff165f03610b9a576002816004015f828254610b419190611846565b9091555050600481015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600890820152670e6e8e4cadccee8d60c31b6060820152602081019190915260800190565b60405180910390a25050565b8160ff16600103610c05576001816005015f828254610bb99190611846565b9091555050600581015460405133915f5160206119c15f395f51905f5291610b8e9190604080825260079082015266646566656e736560c81b6060820152602081019190915260800190565b8160ff16600203610c6e576001816006015f828254610c249190611846565b9091555050600681015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600590820152641cdc19595960da1b6060820152602081019190915260800190565b8160ff1660030361079657600a816007015f828254610c8d9190611846565b9091555050600781015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600690820152650d0cac2d8e8d60d31b6060820152602081019190915260800190565b335f908152602081905260409020600a015460ff1615610d335760405162461bcd60e51b815260206004820152601660248201527553616d7572616920616c72656164792065786973747360501b6044820152606401610711565b5f815111610d7a5760405162461bcd60e51b81526020600482015260146024820152734e616d652063616e6e6f7420626520656d70747960601b6044820152606401610711565b6040805161016081018252828152600160208083018290525f83850181905260608401819052600a6080850152600560a0850152600860c0850152606460e0850152610100840181905261012084018190526101408401929092523382528190529190912081518190610ded90826118a2565b50602082015160018201556040808301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301556101008301516008830155610120830151600983015561014090920151600a909101805460ff19169115159190911790555133907f56729a04a7b9fbacffc8b4865b7082c4bce0e09aaccb84a25c126f3b3974411390610e9690849061195d565b60405180910390a250565b335f908152602081905260409020600a015460ff16610f025760405162461bcd60e51b815260206004820152601f60248201527f596f75206d7573742063726561746520612053616d75726169206669727374006044820152606401610711565b336001600160a01b03821603610f535760405162461bcd60e51b815260206004820152601660248201527521b0b73737ba103130ba3a3632903cb7bab939b2b63360511b6044820152606401610711565b6001600160a01b0381165f908152602081905260409020600a015460ff16610fbd5760405162461bcd60e51b815260206004820152601c60248201527f4f70706f6e656e74206d757374206861766520612053616d75726169000000006044820152606401610711565b662386f26fc100003410158015610fdc5750670de0b6b3a76400003411155b61101d5760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590818995d08185b5bdd5b9d60721b6044820152606401610711565b61102834600261196f565b4710156110775760405162461bcd60e51b815260206004820152601960248201527f436f6e7472616374206e65656473206d6f72652066756e6473000000000000006044820152606401610711565b600280545f918261108783611819565b919050559050604051806101000160405280336001600160a01b03168152602001836001600160a01b031681526020013481526020015f5f336001600160a01b03166001600160a01b031681526020019081526020015f206007015481526020015f5f856001600160a01b03166001600160a01b031681526020019081526020015f20600701548152602001600115158152602001336001600160a01b031681526020015f81525060015f8381526020019081526020015f205f820151815f015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015f6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c08201518160050160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060e08201518160060155905050807f900c364010a1a09b8078f341f479d8d8af5ea85dc8d3c240972b3568e6b3ae99338434604051610b8e939291906001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038083165f9081526020819052604080822092841682528120600483015460058201549293928481831161129c5760016112a6565b6112a68284611806565b90505f6015428a6040516020016112d992919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b604051602081830303815290604052805190602001205f1c6112fb919061199a565b90506064611309828461196f565b61131391906119ad565b61131d9083611846565b96505050505050505b92915050565b5f81815260016020526040812060038101549091906113585760018201546001600160a01b0316611364565b81546001600160a01b03165b82549091505f906001600160a01b0380841691161461138d5782546001600160a01b031661139c565b60018301546001600160a01b03165b6001600160a01b0383165f9081526020819052604081206008018054929350906113c583611819565b90915550506001600160a01b0381165f9081526020819052604081206009018054916113f083611819565b91905055506114008260326114c1565b61140b81600a6114c1565b816001600160a01b03166108fc84600201546002611429919061196f565b6040518115909202915f818181858888f1935050505015801561144e573d5f5f3e3d5ffd5b5060058301805460ff1916905560028084015485917f321fabd726c0c287fb5179fb76fd24c972f92727701c3b9fec3ec65c6f587ea291859185916114929161196f565b604080516001600160a01b0394851681529390921660208401529082015260600160405180910390a250505050565b6001600160a01b0382165f908152602081905260408120600281018054919284926114ed908490611846565b909155505060018101545f906115059060649061196f565b90508082600201541061155c57600182018054905f61152383611819565b91905055506003826003015f82825461153c9190611846565b9250508190555080826002015f8282546115569190611806565b90915550505b50505050565b5f60208284031215611572575f5ffd5b81356001600160a01b0381168114611588575f5ffd5b9392505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b61016081525f6115d161016083018e61158f565b602083019c909c525060408101999099526060890197909752608088019590955260a087019390935260c086019190915260e0850152610100840152610120830152151561014090910152919050565b602081525f8251610160602084015261163e61018084018261158f565b9050602084015160408401526040840151606084015260608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e08401516101008401526101008401516101208401526101208401516101408401526101408401516116b461016085018215159052565b509392505050565b5f602082840312156116cc575f5ffd5b5035919050565b5f602082840312156116e3575f5ffd5b813560ff81168114611588575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215611717575f5ffd5b813567ffffffffffffffff81111561172d575f5ffd5b8201601f8101841361173d575f5ffd5b803567ffffffffffffffff811115611757576117576116f3565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611786576117866116f3565b60405281815282820160200186101561179d575f5ffd5b816020840160208301375f91810160200191909152949350505050565b600181811c908216806117ce57607f821691505b6020821081036117ec57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b81810381811115611326576113266117f2565b5f6001820161182a5761182a6117f2565b5060010190565b5f8161183f5761183f6117f2565b505f190190565b80820180821115611326576113266117f2565b601f82111561189d57805f5260205f20601f840160051c8101602085101561187e5750805b601f840160051c820191505b81811015610a04575f815560010161188a565b505050565b815167ffffffffffffffff8111156118bc576118bc6116f3565b6118d0816118ca84546117ba565b84611859565b6020601f821160018114611902575f83156118eb5750848201515b5f19600385901b1c1916600184901b178455610a04565b5f84815260208120601f198516915b828110156119315787850151825560209485019460019092019101611911565b508482101561194e57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f611588602083018461158f565b8082028115828204841417611326576113266117f2565b634e487b7160e01b5f52601260045260245ffd5b5f826119a8576119a8611986565b500690565b5f826119bb576119bb611986565b50049056fe4e165d0b27d636a96a4a5ff5e73ac46b70b11f97afc47b9a079374fa40576a08a264697066735822122063f6f07c2eaff7f1935d9361c9e1e10f590d6a9074abd6492041ce5fe996b76464736f6c634300081c0033\",\"deployedBytecode\":\"0x6080604052600436106100d9575f3560e01c80637b1b06461161007c578063a13eb44d11610057578063a13eb44d146103ee578063a23ec81d1461040d578063ecdd292a1461042c578063fe3edcd11461043f575f5ffd5b80637b1b0646146103a55780637c7036c1146103b9578063935aae40146103d4575f5ffd5b80634fcceee3116100b75780634fcceee31461015e57806357e333d21461017d578063606d2e961461019f5780636dd0ce7a1461025d575f5ffd5b806308e4f9f7146100dd57806338ca43d01461011c5780633ccfd60b14610148575b5f5ffd5b3480156100e8575f5ffd5b506100fc6100f7366004611562565b610454565b6040516101139b9a999897969594939291906115bd565b60405180910390f35b348015610127575f5ffd5b5061013b610136366004611562565b610533565b6040516101139190611621565b348015610153575f5ffd5b5061015c6106ad565b005b348015610169575f5ffd5b5061015c6101783660046116bc565b61079a565b348015610188575f5ffd5b50610191600381565b604051908152602001610113565b3480156101aa575f5ffd5b5061020e6101b93660046116bc565b600160208190525f918252604090912080549181015460028201546003830154600484015460058501546006909501546001600160a01b03968716969485169593949293919260ff8316926101009004169088565b604080516001600160a01b03998a168152978916602089015287019590955260608601939093526080850191909152151560a084015290921660c082015260e081019190915261010001610113565b348015610268575f5ffd5b506103376102773660046116bc565b60408051610100810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152505f908152600160208181526040928390208351610100808201865282546001600160a01b039081168352948301548516938201939093526002820154948101949094526003810154606085015260048101546080850152600581015460ff8116151560a08601529190910490911660c08301526006015460e082015290565b604051610113919081516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519083015260a08084015115159083015260c0808401519091169082015260e091820151918101919091526101000190565b3480156103b0575f5ffd5b50610191606481565b3480156103c4575f5ffd5b50610191670de0b6b3a764000081565b3480156103df575f5ffd5b50610191662386f26fc1000081565b3480156103f9575f5ffd5b5061015c6104083660046116d3565b610a0b565b348015610418575f5ffd5b5061015c610427366004611707565b610cd8565b61015c61043a366004611562565b610ea1565b34801561044a575f5ffd5b5061019160025481565b5f6020819052908152604090208054819061046e906117ba565b80601f016020809104026020016040519081016040528092919081815260200182805461049a906117ba565b80156104e55780601f106104bc576101008083540402835291602001916104e5565b820191905f5260205f20905b8154815290600101906020018083116104c857829003601f168201915b50505060018401546002850154600386015460048701546005880154600689015460078a015460088b015460098c0154600a909c01549a9b979a969950949750929591949093919060ff168b565b610588604051806101600160405280606081526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f151581525090565b6001600160a01b0382165f9081526020819052604090819020815161016081019092528054829082906105ba906117ba565b80601f01602080910402602001604051908101604052809291908181526020018280546105e6906117ba565b80156106315780601f1061060857610100808354040283529160200191610631565b820191905f5260205f20905b81548152906001019060200180831161061457829003601f168201915b505050918352505060018201546020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460c0820152600782015460e082015260088201546101008201526009820154610120820152600a9091015460ff1615156101409091015292915050565b6003546001600160a01b0316331461071a5760405162461bcd60e51b815260206004820152602560248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526431ba34b7b760d91b60648201526084015b60405180910390fd5b478061075f5760405162461bcd60e51b81526020600482015260146024820152734e6f2066756e647320746f20776974686472617760601b6044820152606401610711565b6003546040516001600160a01b039091169082156108fc029083905f818181858888f19350505050158015610796573d5f5f3e3d5ffd5b5050565b5f818152600160205260409020600581015460ff166107f25760405162461bcd60e51b8152602060048201526014602482015273426174746c65206973206e6f742061637469766560601b6044820152606401610711565b600581015461010090046001600160a01b031633146108435760405162461bcd60e51b815260206004820152600d60248201526c2737ba103cb7bab9103a3ab93760991b6044820152606401610711565b805433905f906001600160a01b031682146108685782546001600160a01b0316610877565b60018301546001600160a01b03165b90505f6108848383611260565b84549091506001600160a01b03908116908416036108c757808460040154116108ad575f6108bd565b8084600401546108bd9190611806565b60048501556108ee565b808460030154116108d8575f6108e8565b8084600301546108e89190611806565b60038501555b600684018054905f6108ff83611819565b9091555050835485907f32f21e78f1b9253d6b5647e7be62d64cdae398bb6b05c2767207f35a79f76ce090859084906001600160a01b0380841691161461094a578760030154610950565b87600401545b604080516001600160a01b03909416845260208401929092529082015260600160405180910390a26003840154158061098b57506004840154155b1561099e576109998561132c565b610a04565b8354600585015461010090046001600160a01b039081169116146109cc5783546001600160a01b03166109db565b60018401546001600160a01b03165b8460050160016101000a8154816001600160a01b0302191690836001600160a01b031602179055505b5050505050565b335f908152602081905260409020600a015460ff16610a6c5760405162461bcd60e51b815260206004820152601f60248201527f596f75206d7573742063726561746520612053616d75726169206669727374006044820152606401610711565b335f9081526020819052604090206003810154610acb5760405162461bcd60e51b815260206004820152601960248201527f4e6f20736b696c6c20706f696e747320617661696c61626c65000000000000006044820152606401610711565b60048260ff1610610b0d5760405162461bcd60e51b815260206004820152600c60248201526b125b9d985b1a59081cdd185d60a21b6044820152606401610711565b600381018054905f610b1e83611831565b91905055508160ff165f03610b9a576002816004015f828254610b419190611846565b9091555050600481015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600890820152670e6e8e4cadccee8d60c31b6060820152602081019190915260800190565b60405180910390a25050565b8160ff16600103610c05576001816005015f828254610bb99190611846565b9091555050600581015460405133915f5160206119c15f395f51905f5291610b8e9190604080825260079082015266646566656e736560c81b6060820152602081019190915260800190565b8160ff16600203610c6e576001816006015f828254610c249190611846565b9091555050600681015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600590820152641cdc19595960da1b6060820152602081019190915260800190565b8160ff1660030361079657600a816007015f828254610c8d9190611846565b9091555050600781015460405133915f5160206119c15f395f51905f5291610b8e91906040808252600690820152650d0cac2d8e8d60d31b6060820152602081019190915260800190565b335f908152602081905260409020600a015460ff1615610d335760405162461bcd60e51b815260206004820152601660248201527553616d7572616920616c72656164792065786973747360501b6044820152606401610711565b5f815111610d7a5760405162461bcd60e51b81526020600482015260146024820152734e616d652063616e6e6f7420626520656d70747960601b6044820152606401610711565b6040805161016081018252828152600160208083018290525f83850181905260608401819052600a6080850152600560a0850152600860c0850152606460e0850152610100840181905261012084018190526101408401929092523382528190529190912081518190610ded90826118a2565b50602082015160018201556040808301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301556101008301516008830155610120830151600983015561014090920151600a909101805460ff19169115159190911790555133907f56729a04a7b9fbacffc8b4865b7082c4bce0e09aaccb84a25c126f3b3974411390610e9690849061195d565b60405180910390a250565b335f908152602081905260409020600a015460ff16610f025760405162461bcd60e51b815260206004820152601f60248201527f596f75206d7573742063726561746520612053616d75726169206669727374006044820152606401610711565b336001600160a01b03821603610f535760405162461bcd60e51b815260206004820152601660248201527521b0b73737ba103130ba3a3632903cb7bab939b2b63360511b6044820152606401610711565b6001600160a01b0381165f908152602081905260409020600a015460ff16610fbd5760405162461bcd60e51b815260206004820152601c60248201527f4f70706f6e656e74206d757374206861766520612053616d75726169000000006044820152606401610711565b662386f26fc100003410158015610fdc5750670de0b6b3a76400003411155b61101d5760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a590818995d08185b5bdd5b9d60721b6044820152606401610711565b61102834600261196f565b4710156110775760405162461bcd60e51b815260206004820152601960248201527f436f6e7472616374206e65656473206d6f72652066756e6473000000000000006044820152606401610711565b600280545f918261108783611819565b919050559050604051806101000160405280336001600160a01b03168152602001836001600160a01b031681526020013481526020015f5f336001600160a01b03166001600160a01b031681526020019081526020015f206007015481526020015f5f856001600160a01b03166001600160a01b031681526020019081526020015f20600701548152602001600115158152602001336001600160a01b031681526020015f81525060015f8381526020019081526020015f205f820151815f015f6101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015f6101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c08201518160050160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060e08201518160060155905050807f900c364010a1a09b8078f341f479d8d8af5ea85dc8d3c240972b3568e6b3ae99338434604051610b8e939291906001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038083165f9081526020819052604080822092841682528120600483015460058201549293928481831161129c5760016112a6565b6112a68284611806565b90505f6015428a6040516020016112d992919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b604051602081830303815290604052805190602001205f1c6112fb919061199a565b90506064611309828461196f565b61131391906119ad565b61131d9083611846565b96505050505050505b92915050565b5f81815260016020526040812060038101549091906113585760018201546001600160a01b0316611364565b81546001600160a01b03165b82549091505f906001600160a01b0380841691161461138d5782546001600160a01b031661139c565b60018301546001600160a01b03165b6001600160a01b0383165f9081526020819052604081206008018054929350906113c583611819565b90915550506001600160a01b0381165f9081526020819052604081206009018054916113f083611819565b91905055506114008260326114c1565b61140b81600a6114c1565b816001600160a01b03166108fc84600201546002611429919061196f565b6040518115909202915f818181858888f1935050505015801561144e573d5f5f3e3d5ffd5b5060058301805460ff1916905560028084015485917f321fabd726c0c287fb5179fb76fd24c972f92727701c3b9fec3ec65c6f587ea291859185916114929161196f565b604080516001600160a01b0394851681529390921660208401529082015260600160405180910390a250505050565b6001600160a01b0382165f908152602081905260408120600281018054919284926114ed908490611846565b909155505060018101545f906115059060649061196f565b90508082600201541061155c57600182018054905f61152383611819565b91905055506003826003015f82825461153c9190611846565b9250508190555080826002015f8282546115569190611806565b90915550505b50505050565b5f60208284031215611572575f5ffd5b81356001600160a01b0381168114611588575f5ffd5b9392505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b61016081525f6115d161016083018e61158f565b602083019c909c525060408101999099526060890197909752608088019590955260a087019390935260c086019190915260e0850152610100840152610120830152151561014090910152919050565b602081525f8251610160602084015261163e61018084018261158f565b9050602084015160408401526040840151606084015260608401516080840152608084015160a084015260a084015160c084015260c084015160e084015260e08401516101008401526101008401516101208401526101208401516101408401526101408401516116b461016085018215159052565b509392505050565b5f602082840312156116cc575f5ffd5b5035919050565b5f602082840312156116e3575f5ffd5b813560ff81168114611588575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215611717575f5ffd5b813567ffffffffffffffff81111561172d575f5ffd5b8201601f8101841361173d575f5ffd5b803567ffffffffffffffff811115611757576117576116f3565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611786576117866116f3565b60405281815282820160200186101561179d575f5ffd5b816020840160208301375f91810160200191909152949350505050565b600181811c908216806117ce57607f821691505b6020821081036117ec57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b81810381811115611326576113266117f2565b5f6001820161182a5761182a6117f2565b5060010190565b5f8161183f5761183f6117f2565b505f190190565b80820180821115611326576113266117f2565b601f82111561189d57805f5260205f20601f840160051c8101602085101561187e5750805b601f840160051c820191505b81811015610a04575f815560010161188a565b505050565b815167ffffffffffffffff8111156118bc576118bc6116f3565b6118d0816118ca84546117ba565b84611859565b6020601f821160018114611902575f83156118eb5750848201515b5f19600385901b1c1916600184901b178455610a04565b5f84815260208120601f198516915b828110156119315787850151825560209485019460019092019101611911565b508482101561194e57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f611588602083018461158f565b8082028115828204841417611326576113266117f2565b634e487b7160e01b5f52601260045260245ffd5b5f826119a8576119a8611986565b500690565b5f826119bb576119bb611986565b50049056fe4e165d0b27d636a96a4a5ff5e73ac46b70b11f97afc47b9a079374fa40576a08a264697066735822122063f6f07c2eaff7f1935d9361c9e1e10f590d6a9074abd6492041ce5fe996b76464736f6c634300081c0033\",\"linkReferences\":{},\"deployedLinkReferences\":{},\"immutableReferences\":{},\"inputSourceName\":\"project/contracts/Game.sol\",\"buildInfoId\":\"3235b3605ccfb919037bce08444e96e708a28f7e\"}"));}}),
"[project]/src/lib/contract.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useContract": (()=>useContract),
    "useContractRead": (()=>useContractRead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
// Import the generated ABI from Hardhat compilation
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$contracts$2f$Game$2e$sol$2f$RoninRivals$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/artifacts/contracts/Game.sol/RoninRivals.json (json)");
;
;
;
;
;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CONTRACT_ABI = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$contracts$2f$Game$2e$sol$2f$RoninRivals$2e$json__$28$json$29$__["default"].abi;
const useContract = ()=>{
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const createSamurai = async (name)=>{
        if (!address) throw new Error('Wallet not connected');
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
            abi: CONTRACT_ABI,
            functionName: 'createSamurai',
            args: [
                name
            ]
        });
    };
    const upgradeStat = async (stat)=>{
        if (!address) throw new Error('Wallet not connected');
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
            abi: CONTRACT_ABI,
            functionName: 'upgradeStat',
            args: [
                stat
            ]
        });
    };
    const startBattle = async (opponent)=>{
        if (!address) throw new Error('Wallet not connected');
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
            abi: CONTRACT_ABI,
            functionName: 'startBattle',
            args: [
                opponent
            ]
        });
    };
    const executeTurn = async (battleId)=>{
        if (!address) throw new Error('Wallet not connected');
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
            abi: CONTRACT_ABI,
            functionName: 'executeTurn',
            args: [
                battleId
            ]
        });
    };
    return {
        createSamurai,
        upgradeStat,
        startBattle,
        executeTurn,
        isPending,
        isConfirming,
        isSuccess,
        error,
        hash
    };
};
const useContractRead = ()=>{
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { data: samurai } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: CONTRACT_ABI,
        functionName: 'getSamurai',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!address
        }
    });
    const { data: battleIdCounter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: CONTRACT_ABI,
        functionName: 'battleIdCounter',
        query: {
            enabled: true
        }
    });
    const { data: minimumBet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: CONTRACT_ABI,
        functionName: 'MINIMUM_BET',
        query: {
            enabled: true
        }
    });
    const { data: maximumBet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: CONTRACT_ABI,
        functionName: 'MAXIMUM_BET',
        query: {
            enabled: true
        }
    });
    const { data: currentBattle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTRACT_ADDRESS"],
        abi: CONTRACT_ABI,
        functionName: 'getBattle',
        args: battleIdCounter && battleIdCounter > 0n ? [
            battleIdCounter - 1n
        ] : undefined,
        query: {
            enabled: !!battleIdCounter && battleIdCounter > 0n
        }
    });
    return {
        samurai,
        battleIdCounter,
        currentBattle,
        minimumBet: minimumBet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(minimumBet) : '0',
        maximumBet: maximumBet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(maximumBet) : '0'
    };
};
}}),
"[project]/src/components/SamuraiCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SamuraiCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SamuraiCard() {
    const [samuraiName, setSamuraiName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { createSamurai, upgradeStat, isPending, isSuccess, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContract"])();
    const { samurai } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContractRead"])();
    // Handle success/error messages with useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSuccess) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Transaction successful!');
        }
    }, [
        isSuccess
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(`Transaction failed: ${error.message}`);
        }
    }, [
        error
    ]);
    const handleCreateSamurai = async ()=>{
        if (!samuraiName.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Please enter a Samurai name');
            return;
        }
        try {
            await createSamurai(samuraiName);
            setSamuraiName('');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to create Samurai');
            console.error(error);
        }
    };
    const handleUpgradeStat = async (stat)=>{
        try {
            await upgradeStat(stat);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to upgrade stat');
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-md rounded-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white mb-4",
                children: "🗡️ Your Samurai"
            }, void 0, false, {
                fileName: "[project]/src/components/SamuraiCard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            !samurai?.exists ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80",
                        children: "Create your Samurai to begin your journey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SamuraiCard.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: samuraiName,
                        onChange: (e)=>setSamuraiName(e.target.value),
                        placeholder: "Enter Samurai name",
                        className: "w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SamuraiCard.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateSamurai,
                        disabled: isPending || !samuraiName.trim(),
                        className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50",
                        children: isPending ? 'Creating...' : 'Create Samurai'
                    }, void 0, false, {
                        fileName: "[project]/src/components/SamuraiCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SamuraiCard.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: samurai.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 text-sm text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Level: ",
                                            samurai.level.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Experience: ",
                                            samurai.experience.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Skill Points: ",
                                            samurai.skillPoints.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Battles Won: ",
                                            samurai.battlesWon.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Battles Lost: ",
                                            samurai.battlesLost.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SamuraiCard.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold text-white mb-2",
                                children: "Stats"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80",
                                                children: [
                                                    "Strength: ",
                                                    samurai.strength.toString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleUpgradeStat(0),
                                                disabled: isPending || samurai.skillPoints === 0n,
                                                className: "bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50",
                                                children: "+2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80",
                                                children: [
                                                    "Defense: ",
                                                    samurai.defense.toString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleUpgradeStat(1),
                                                disabled: isPending || samurai.skillPoints === 0n,
                                                className: "bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50",
                                                children: "+1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80",
                                                children: [
                                                    "Speed: ",
                                                    samurai.speed.toString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleUpgradeStat(2),
                                                disabled: isPending || samurai.skillPoints === 0n,
                                                className: "bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50",
                                                children: "+1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80",
                                                children: [
                                                    "Health: ",
                                                    samurai.health.toString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleUpgradeStat(3),
                                                disabled: isPending || samurai.skillPoints === 0n,
                                                className: "bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50",
                                                children: "+10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SamuraiCard.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SamuraiCard.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SamuraiCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SamuraiCard.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SamuraiCard.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/BattleArena.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BattleArena)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BattleArena({ connectedAddress }) {
    const [opponentAddress, setOpponentAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [betAmount, setBetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0.01');
    const { startBattle, executeTurn, isPending, isSuccess, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContract"])();
    const { currentBattle, battleIdCounter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContractRead"])();
    // Handle success/error messages with useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSuccess) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Transaction successful!');
        }
    }, [
        isSuccess
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(`Transaction failed: ${error.message}`);
        }
    }, [
        error
    ]);
    const handleStartBattle = async ()=>{
        if (!opponentAddress.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Please enter opponent address');
            return;
        }
        try {
            await startBattle(opponentAddress);
            setOpponentAddress('');
            setBetAmount('0.01');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to start battle');
            console.error(error);
        }
    };
    const handleExecuteTurn = async ()=>{
        if (!battleIdCounter || battleIdCounter === 0n) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('No active battle');
            return;
        }
        try {
            await executeTurn(battleIdCounter - 1n);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Failed to execute turn');
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-md rounded-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white mb-4",
                children: "⚔️ Battle Arena"
            }, void 0, false, {
                fileName: "[project]/src/components/BattleArena.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold text-white mb-2",
                                children: "Start New Battle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: opponentAddress,
                                onChange: (e)=>setOpponentAddress(e.target.value),
                                placeholder: "Opponent address (0x...)",
                                className: "w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: betAmount,
                                onChange: (e)=>setBetAmount(e.target.value),
                                placeholder: "Bet amount (RON)",
                                step: "0.01",
                                min: "0.01",
                                max: "1",
                                className: "w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleStartBattle,
                                disabled: isPending || !opponentAddress.trim(),
                                className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50",
                                children: isPending ? 'Starting Battle...' : 'Start Battle'
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BattleArena.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    currentBattle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-bold text-white mb-2",
                                children: "Active Battle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-sm text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Player 1 Health: ",
                                            currentBattle.player1Health.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BattleArena.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Player 2 Health: ",
                                            currentBattle.player2Health.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BattleArena.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Current Turn:",
                                            ' ',
                                            currentBattle.currentTurn === connectedAddress ? 'Your turn' : "Opponent's turn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BattleArena.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Turn Count: ",
                                            currentBattle.turnCount.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BattleArena.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            currentBattle.currentTurn === connectedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExecuteTurn,
                                disabled: isPending,
                                className: "w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50",
                                children: isPending ? 'Executing...' : 'Execute Turn'
                            }, void 0, false, {
                                fileName: "[project]/src/components/BattleArena.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BattleArena.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BattleArena.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BattleArena.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TantoConnect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TantoConnect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SamuraiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SamuraiCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BattleArena$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BattleArena.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Home() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TantoConnect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 12,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TantoConnect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SamuraiCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BattleArena$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            connectedAddress: address || null
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_57587bfa._.js.map