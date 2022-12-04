const timeElement = document.getElementById("time")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `Saat: ${currentTime}`

//#region İcona notification veya ücretli yada ücretsiz versiyon yazdırma
//chrome.action.setBadgeText({
//    text: "FREE"
//})
//#endregion