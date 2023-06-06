// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Hmi;
        (function (Hmi) {
            function CallMethNoParams(meth) {
                TcHmi.Symbol.readEx2(meth, function (data) {
                    console.log(data);
                });
            }
            Hmi.CallMethNoParams = CallMethNoParams;
        })(Hmi = Functions.Hmi || (Functions.Hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CallMethNoParams', 'TcHmi.Functions.Hmi', TcHmi.Functions.Hmi.CallMethNoParams);
