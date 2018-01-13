
//statement syntax for the function
var square = (x) => {
    var result = x*x
    return result
} 
console.log(square(3))

//expression syntax - - no need to explixcitly add return keyword when
//u use arrow function without curly bracet
// all we need to do is specify the expression we want to return

var square1 = (x) => (x*x)
console.log(square1(4))

//when we have an arrow function with just 1 argument, we can omit parenthesis
var square2 = x => x*x
console.log(square2(5))


//this - keyword not as usual - use second syntax for method

//not gonna get arguments keyword

var user = {
    name:'Martin',
    sayHi:()=> {
        console.log(arguments)
        console.log(`Hi.  I'm ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi.  I'm ${this.name}`) 
    }
}



user.sayHi(1,2,3,4,5);
user.sayHiAlt(1,2,3);