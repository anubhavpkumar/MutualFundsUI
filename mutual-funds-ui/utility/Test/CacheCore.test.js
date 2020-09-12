const CacheCore = require('../CacheCore');

test('String Values in and Out Cache', async () => {
    var SetValueToCache = async () => {
        var setResp = await CacheCore.CacheCore.SetToCache("test2", "Anubhav", 1, 1);
        const getResp = await CacheCore.CacheCore.GetFromCache("test2");
        return getResp;
    }
    expect(await SetValueToCache()).toBe("Anubhav");
});

test('Json Object in and Out of Cache', async () => {
    var jsonObject = {
        "x": 1,
        "y": {
            "y1": 11,
            "y2": 22
        }
    }
    var SetValueToCache = async () => {
        var setResp = await CacheCore.CacheCore.SetToCache("test2", jsonObject, 1, 1);
        const getResp = await CacheCore.CacheCore.GetFromCache("test2");
        return getResp;
    }
    expect(await SetValueToCache()).toStrictEqual({
        "x": 1,
        "y": {
            "y1": 11,
            "y2": 22
        }
    });
});