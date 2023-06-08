// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Hmi;
        (function (Hmi) {
            function FunctionJS2(DataGrid) {
                let count = (Math.random() * 10) + 2;
                fetch('https://random-data-api.com/api/v2/beers/?size=' + count)
                  .then((response) => response.json())
                  .then((data) => {
                      console.log(data)
                      DataGrid.setSrcData(data)
                  });
               
            }
            Hmi.FunctionJS2 = FunctionJS2;
        })(Hmi = Functions.Hmi || (Functions.Hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionJS2', 'TcHmi.Functions.Hmi', TcHmi.Functions.Hmi.FunctionJS2);
