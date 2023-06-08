// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Hmi;
        (function (Hmi) {
            function FunctionJS1(Datagrid) {
                fetch('https://random-data-api.com/api/v2/beers/?size=5')
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                    });
            }
            Hmi.FunctionJS1 = FunctionJS1;
        })(Hmi = Functions.Hmi || (Functions.Hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.Hmi', TcHmi.Functions.Hmi.FunctionJS1);
