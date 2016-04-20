
// #1 =================

var inputObj = {}

var getName = function(inputObj) {
    return inputObj.name
}

console.log(getName({name: 'Luise', age: 25}))

// #2 ================= FOR EACH

var inputArray = []

var totalLetters = function(inputArray) {
    var curTotal = 0
    
    inputArray.forEach(function(inputStr) {
        curTotal += inputStr.length
    })
    
    return curTotal
}

console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// #3 =================

var keyValue = function(inputKey, inputVal) {
    return {inputKey, inputVal}
}

console.log(keyValue('city', 'Denver'))

// #4 =================

var inputArray = []
var negNumber = -1

var negativeIndex = function(inputArray, negNumber) {
    return inputArray[inputArray.length + negNumber]
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

// #5 =================

var inputStr = ''

var removeM = function(inputStr) {
    var notMstr = ''
    
    for(var i = 0; i <= inputStr.length; i++) {
        if(inputStr.charAt(i).toLowerCase() !== 'm') {
            notMstr += inputStr.charAt(i)
        }     
    }
    
    // inputStr.forEach(function(charactor) {
    //     if(charactor.toLowerCase() !== 'm') {
    //         notMstr += charactor
    //     }
    // })
    
    return notMstr
}

console.log(removeM('family'))
console.log(removeM('memory'))

// #6 ===============

var inputObj = {a: 10, b:20, c:30}

var printObject = function(inputObj) {
    for (var prop in inputObj) {
        console.log (prop + ' is ' + inputObj[prop])
    }
}

printObject(inputObj)
printObject({ firstName: 'pork', lastName: 'chops' })


// #7 ================

var vowels = function(inputStr) {
    
        var findVowel = function(letter) {
        
            var vowels = ["a", "e", "i", "o", "u"];
        
            for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
                if(letter === vowels[i]){// Use array indexing instead
                    return true;
                 }
            }
        
            return false; // This is after the loop
        }
        
    var vowelArray = []    
        
    for(var i = 0; i <= inputStr.length; i++) {
        if(findVowel(inputStr[i]) === true) {
            vowelArray.push(inputStr[i])
        }
    }
    return vowelArray
}

console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))

// #8 ================

var twins = function(inputArray) {
    
    var isOdd = function(x) { return x & 1; }
    
    for(var i = 0; i <= inputArray.length; i++) {
        if(isOdd(i) === 1) {
            if(inputArray[i] !== inputArray[i-1]) {
                return false
            }
        } 
        // else if(inputArray[i] === undefined) {
        //     return false
        // }
    }
    return true
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']) )
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]) )

// #9 ================

var booArray = []

var or = function(booArray) {
  for(var i=0; i <= booArray.length ;i++) {
      if(booArray[i] === true) {
          return true
      }
  }
  return false
}

console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

// #10 ================
var stringArray = []
var newArray = []
var newArrayb = []

// var unique = function(stringArray) {
//     for(var i = 0; i <= stringArray.length; i++) {
        
//         for(var x = 0; x <= newArray.length; x++) {
            
//         }
//     }
//     return newArray
// }

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 'b', 'a', 'c', 'd', 'd']
var b = ['todd', 'avery', 'maria', 'avery']
var newArray = a.filter(unique); // returns ['a', 1, 2, '1']
var newArrayb = b.filter(unique); // returns ['a', 1, 2, '1']

console.log(newArray)
console.log(newArrayb)

