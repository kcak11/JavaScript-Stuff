/**
 * Text Scrambler v1.0.0
 * 
 * Author: kcak11 (https://kcak11.com)
 * License: MIT (https://mit-license.kcak11.com)
 */
((function (_g) {
    _g.scramble = function (msg, key) {
        if (!msg || !key) {
            throw new this.Error("msg & key are mandatory parameters");
        }
        var SECRETS = [
            "ZJmFM7QHeT3AWc94C2tGf0dqoESKgwlV",
            "DfxBlP30taR594ZAFioLwNvIzbeQnXOm",
            "Y4ogmFEnhD7y1W5J6srUkzVuLStfwGvC",
            "jcGNLRsirXpMbJZOadmEFHeY3Q2tTkqw",
            "dpwaAEWc3JlgCisuIUo1z4FjyZm8hM0Y",
            "IQoC0uLTVglO9mDPtwzYX2KRc4afU7jE",
            "mNnTYxIKPV0fpX4OEkGyo3hzJ9FUrAad",
            "W3gkdtzOaQBGCMKhTmPsDufL7vyo6b8e",
            "gNuit4H3ah50b1kEndJ6VeWU2mzXD8Gy",
            "X6aWbhsfyBE1lKqDtSO5ZwevcdQM8noJ",
            "7aOqpklKnUFADi1jNgPzouvJGtbs0YW6"
        ];
        var _key = "";
        key += SECRETS[key.length % 11];
        for (var i = 0; i < key.length; i++) {
            var _k = key.charCodeAt(i);
            _key += _k + i + (_k % 11);
            if (i < key.length - 1) {
                _key += "^";
            }
        }
        return Function("msg", decodeURIComponent("var%20_msg%3D%22%22%3B%0Afor(var%20i%3D0%3Bi%3Cmsg.length%3Bi%2B%2B)%7B%0A%20%20%20%20_msg%2B%3DString.fromCharCode(msg.charCodeAt(i)%5E(i%2B1)%5E%7B_key%7D)%3B%0A%7D%0Areturn%20_msg%3B%0A").split("{_key}").join(_key))(msg);
    };
})((typeof window !== "undefined" ? window : global)));

/**
 * USAGE:
 * var originalMessage = "my message text";
 * var result = scramble(originalMessage, "my secret key");
 * console.log(result);
 *
 * scramble(result,"some other key") === originalMessage //false since key did not match
 * scramble(result,"my secret key") === originalMessage //true since the key matched
 */