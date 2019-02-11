// Adding Testimonies to Page
var testimonies = []
var time = 3000;

var newTestimonies = function (name,title,company,message){
  this.name =name;
  this.title=title;
  this.company=company;
  this.message=message;
};

// Making new mock testimonies
var projectLife = new newTestimonies("Jane Doe","Director of Stuff","XYZ Inc", "He made a great responsive site!")

var projectDidStuff = new newTestimonies ("John Smith","Owner","Puppy Palace","Our new site is great, it has really helped to drive sales.")

var projectFiguredOutJS = new newTestimonies ("Jack Leupin","Director of Marketing","Balboa Industries", "The new site has increased e-Commerce sales by 30% due to ease of use.")

testimonies.push(projectLife,projectDidStuff,projectFiguredOutJS);

tLength = testimonies.length;
tNum = 0;

// var pushToPage;

// function myFunction(){
//   pushToPage = setInterval(newToPage,3000);
// }


var newToPage =function(){
  for (i = 0;i < tLength;i ++){
  document.getElementById('name').textContent = testimonies[i].name;
  document.getElementById('message').textContent = testimonies[i].message;
  document.getElementById('title').textContent =testimonies[i].title + " @ " + testimonies[i].company;
  if (i > tLength - 1){
    i = 0;
  } else {
    i ++
  }
}

};

setTimeout(newToPage(),3000);

