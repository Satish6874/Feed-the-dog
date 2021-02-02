
var dog,sadDog,happyDog,foodObj;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  foodObj = new Food();

}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();

}

function mousePressed(){
foodObj.deductFood();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if (foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}
//function to add food in stock
function addFoods(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}
