//copy paste word-ből
function BlogPost(title,author,content) {
    this.title = title,
        this.author = author,
        this.content = content
}

function SponsoredPost(title, author, content, sponsorName) {
    BlogPost.call(this, title, author, content)
    this.sponsorName
}
Object.setPrototypeOf(SponsoredPosz.prototype, BlogPost.prototype)
SponsoredPost.prototype.display = function () {
    console.log(this.title +' '+this.sponsorName)
}

class Logger {
    #history
    get history() { return this.#history }
    constructor() {
        this.history = []
    }
    log(message) {
        this.#history.push(message)
    }
}


class AdvancedLogger extends Logger {
    #maxSize
    constructor(maxSize) {
        super()
        this.#maxSize = maxSize
    }
    processWithCallback(callback) {
        for (const h of this.history) {
            callback(h)
        }
    }
}


const button = document.createElement('button');
button.innerText = 'gombocska';
document.body.appendChild(button);
class Student {
    constructor(name) {
        this.name = name
    }
    askSomething() {
        console.log(this.name + ' kérdezett')
    }
}
class Humanoid {
    constructor(type) {
        this.type = type;
    }
    doFly() {
        console.log(this.type + ' repül');
    }
}
const stu1 = new Student('János');
const hu1 = new Humanoid('Kacsaember');
function clickOnButton() {
    this.askSomething()
}
button.addEventListener('click', clickOnButton.bind(stu1))

