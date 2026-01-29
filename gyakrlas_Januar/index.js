//1.feladat
function BlogPost(title, author, content) {
    this.title = title
    this.author = author
    this.content = content
}

const bp = new BlogPost('cim', 'kolto', 'vers')
console.log(bp)

//2.feladat
function SponsoredPost(title, author, content, sponsorName) {
    BlogPost.call(this, title, author, content)
    this.sponsorName = sponsorName
}

Object.setPrototypeOf(SponsoredPost.prototype, BlogPost.prototype)

SponsoredPost.prototype.display = function () {
    console.log(this.title + " " + this.sponsorName)
}

//3.feladat
class Logger {
    #history
    constructor() {
        this.#history = []
    }
    get history() {
        return this.#history
    }
    log(message) {
        this.#history.push(message)
    }
}

//4.feladat
class AdvancedLogger extends Logger{
    #maxSize
    constructor(history,maxSize) {
        super(history)

    }
    processWithCallback(callback) {
        for(const f of this.history){
            callback(f)
        }
    }
}

//5.feladat
const button = document.createElement('button');
button.innerText = 'gombocska';
document.body.appendChild(button);
class Student {
   constructor(name){
       this.name = name
   }
   askSomething(){
       console.log(this.name +' kérdezett')
   }
}
class Humanoid {
   constructor(type){
       this.type = type;
   }
   doFly(){
       console.log(this.type + ' repül');
   }
}
const stu1 = new Student('János');
const hu1 = new Humanoid('Kacsaember');
function clickOnButton(){
   this.askSomething()
}
button.addEventListener('click', clickOnButton.bind(stu1))