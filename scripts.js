// Displaying Elements
var main = document.getElementsByTagName("MAIN");
var content = document.getElementById("main-content");
var hex = document.getElementById("hex");
var snack = document.getElementById("snack");
var fastfood = document.getElementById("fastfood");
var restaurant = document.getElementById("restaurant");
var button = document.getElementById("order");
var github = document.getElementById("github");

const snacklist = ["ChungChun Corn Dogs", "Smokes Poutinerie", "Murphys Ice Cream",
    "I <3 Boba", "Real Fruit", "Gong Cha", "Starbucks", "Tims", "McDonalds",
    "Sugar Marmalade", "Supermoon", "Cocos", "Baskin Robbins", "Chatime",
    "Hazukido", "Juicy Dumplings", "Green Grotto"];

const fastfoodlist = ["McDonalds", "Philthy Phillys", "Manousha", "H Mart",
    "Nations Kitchen", "Burger Factory", "Alf Hana", "Ricks Good Eats",
    "Ice Q", "Little Caesars", "Chipotle", "Wendys", "Five Guys", "KFC",
    "Taco Bell", "Costco", "IKEA", "Pizza Nova", "Popeyes", "Loblaws",
    "Fortune Dragon", "Pizza Pizza", "Panagio Breakfast", "Dominoes",
    "Bourbon St Grill", "Firehouse Subs", "Dixie Food Court", "Cora",
    "Jimmy The Greek", "Harveys", "Subway", "Mary Browns", "Sushi Park",
    "Marketplace F&C", "Davs HotSpot", "La Carnita",
    "Birria Catrina", "Knockout Chicken"];

const restaurantlist = ["Mihito Poke Bowls", "Poke Guys", "Jinzakaya", "Pho",
    "Younge St Warehouse", "Kelseys", "ManDooHyang", "K Pocha", "Sikgaek",
    "Bubble Republic", "Katsuya", "Nandos", "Song Cook", "Kamen Ramen",
    "Kinton Ramen", "Social Eatery", "Owl of Minerva", "Chucks Roadhouse",
    "168 Sushi", "Goodfellas", "El Mariachi", "Swiss Chalet", "Iron Chef",
    "Turtle Jacks", "Wind Sushi", "Heart Sushi", "Buk Chang Dong",
    "Chicken in the Kitchen", "Gyu Kaku"];

function generateOrder() {
    snack.textContent = "SNACK : " + snacklist[Math.floor(Math.random() * snacklist.length)].toUpperCase();
    fastfood.textContent = "FAST FOOD : " + fastfoodlist[Math.floor(Math.random() * fastfoodlist.length)].toUpperCase();
    restaurant.textContent = "RESTAURANT : " + restaurantlist[Math.floor(Math.random() * restaurantlist.length)].toUpperCase();
    button.textContent = "ORDER";
    changeBgColor();
}

// Forked from https://codepen.io/tin-fung-hk/pen/jOWXLQj

// Change The Background Color Base On The Random Color Code
function changeBgColor() {
    // For Muted Colors
    const three = shuffle([(Math.floor(Math.random() * 66) + 190).toString(16).padStart(2, 0), "FF", "BF"]);

    hex.innerHTML = "#" + number() + number() + number() + number() + number();

    // Result Displaying
    main[0].style.backgroundColor = "#" + three[0] + three[1] + three[2];

}

function number() {
    return Math.floor(Math.random() * 10).toString(16);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}