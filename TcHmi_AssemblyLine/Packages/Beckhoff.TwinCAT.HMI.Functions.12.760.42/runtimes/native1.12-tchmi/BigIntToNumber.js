var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.BigIntToNumber=function(value){const res=TcHmi.ValueConverter.toNumberEx(value);if(res.error!==TcHmi.Errors.NONE)throw new Error("Converting bigint to number failed with: "+TcHmi.Log.buildMessage(res.details)+".");if(null===res.value)throw new Error("Converting bigint to number failed.");return res.value}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("BigIntToNumber","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.BigIntToNumber);