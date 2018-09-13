// PLEASE DON'T change function name
function div (value, by){
    return (value - value % by) / by;
}
module.exports = function makeExchange(currency) {
    if (currency  > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    } else if (currency <= 0){
        return {};
    }else{
        let arrayOfCoins = ['H', 'Q', 'D','N','P'];
        let arrayOfNumberOfCoins = [];
        let arrayOfWorth = [50, 25, 10, 5, 1];
        let resultObject = {};
        for (let i = 0; i < arrayOfCoins.length; i++){
            arrayOfNumberOfCoins[i] = div(currency, arrayOfWorth[i]);
            currency -= arrayOfNumberOfCoins[i] * arrayOfWorth[i];
            if (arrayOfNumberOfCoins[i] != 0){
                resultObject[arrayOfCoins[i]] = arrayOfNumberOfCoins[i];
            }
        }
        return resultObject;
    }

}
