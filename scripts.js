// Displaying Elements
var main = document.getElementsByTagName("MAIN");
var content = document.getElementById("main-content");
var hex = document.getElementById("hex");
var snack = document.getElementById("snack");
var fastfood = document.getElementById("fastfood");
var restaurant = document.getElementById("restaurant");

// Random Generate The Number From 0 - 256
function genRandom() {
    var randomNum = Math.floor(Math.random() * 256).toString(16).padStart(2, 0);

    return randomNum;
}

// Change The Background Color Base On The Random Color Code
function changeBgColor() {

    var hexX = genRandom();
    var hexY = genRandom();
    var hexZ = genRandom();

    var hexValue = hexX + hexY + hexZ;
    var hexCode = hexValue.toUpperCase();

    hex.innerHTML = "#" + hexCode;

    // Result Displaying
    main[0].style.backgroundColor = "#" + hexValue;

    exchangeRgb(hexX, hexY, hexZ);

}

// Exchange The Hex Value To RGB Value
function exchangeRgb(x, y, z){

    var rgbX = parseInt(x, 16);
    var rgbY = parseInt(y, 16);
    var rgbZ = parseInt(z, 16);

    // Result Displaying
    snack.innerHTML = "SNACK : (" + rgbX + ", " + rgbY + ", " + rgbZ + ")";

    exchangeHsl(rgbX, rgbY, rgbZ);
    exchangeCmyk(rgbX, rgbY, rgbZ);

}

// Exchange The RGB Value To HSL Value
function exchangeHsl(r, g, b){

    var rgbR = r /= 255;
    var rgbG = g /= 255;
    var rgbB = b /= 255;

    var hue;
    var saturation;
    var lightness;

    var rgbArray = [rgbR, rgbG, rgbB];

    var rgbMax = Math.max(rgbR, rgbG, rgbB); // Maximum Value Of RGB
    var rgbMin = Math.min(rgbR, rgbG, rgbB); // Minimum Value Of RGB

    // Calculate The Lightness Value
    var lightness = Math.round(((rgbMin + rgbMax) / 2) * 100);

    // Calculate The Saturation Value
    if (rgbMax == rgbMin){
        saturation = 0;
    } else if (lightness < 50){
        saturation = Math.round((rgbMax - rgbMin) / (rgbMax + rgbMin) * 100);
    } else if (lightness > 50){
        saturation = Math.round((rgbMax - rgbMin) / (2.0 - rgbMax - rgbMin) * 100);
    } else if (lightness == 50){
        saturation = Math.round((rgbMax - rgbMin) / (rgbMax + rgbMin) * 100);
    }

    // Calculate The Hue Value
    if (rgbMax == rgbR){
        hue = (rgbG - rgbB) / (rgbMax - rgbMin);
    } else if (rgbMax == rgbG){
        hue = 2.0 + (rgbB - rgbR) / (rgbMax - rgbMin);
    } else if (rgbMax == rgbB){
        hue = 4.0 + (rgbR - rgbG) / (rgbMax - rgbMin);
    }

    hue = Math.round(hue * 60);

    if (hue < 0){
        hue = hue + 360;
    }

    // Result Displaying
    fastfood.innerHTML = "FAST FOOD : (" + hue + "°, " + saturation + "%, " + lightness + "%)";

    changeFontColor(lightness);

}

// Exchange The RGB Value To HSL Value
function exchangeCmyk(r, g, b){

    var rgbR = r /= 255;
    var rgbG = g /= 255;
    var rgbB = b /= 255;

    var K = 1 - Math.max(rgbR, rgbG, rgbB);

    var C = Math.round((1 - rgbR - K) / (1 - K) * 100);
    var M = Math.round((1 - rgbG - K) / (1 - K) * 100);
    var Y = Math.round((1 - rgbB - K) / (1 - K) * 100);

    K = Math.round(K * 100);

    // Result Displaying
    restaurant.innerHTML = "RESTAURANT : (" + C + "%, " + M + "%, " + Y + "%, " + K + "%)";

}

// Change The Font Color Base on The Nightness of The Background
function changeFontColor(lightness){
    
    this.lightness = lightness;

    if (lightness > 50){
        content.style.color = "#333";
    } else if (lightness <= 50){
        content.style.color = "#fff";
    }

}