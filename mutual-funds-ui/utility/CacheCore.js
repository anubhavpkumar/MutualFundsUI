const CustomLogger = require('./Logger');
var cache = require('memory-cache');

GetFromCache = async (key, callbackfn, duration, durationUnit) => {
    const cacheData = await cache.GetFromCache(key);
    if (cacheData && cacheData !== {}){
        return cacheData;
    }
    const callbackFnOutput = await callbackfn();
    CacheCore.SetToCache(key, callbackFnOutput, duration, durationUnit);
    return callbackFnOutput;
}

// This is to be exported while running Tests
exports.CacheCore = {
    GetFromCache : async function(key){
        return await cache.get(key);        
    },
    SetToCache : async function(key, value, duration, durationUnit){
        var durationInSeconds = 24 * 60 * 60 * 1000;
        if (durationUnit = 0){
            durationInSeconds = duration * 60 * 60;
        } else if (durationUnit = 1){
            durationInSeconds = durationInSeconds * duration;
        }
        return await cache.put(key, value, durationInSeconds);
    }
}
