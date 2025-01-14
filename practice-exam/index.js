// Problem #1 // 
/**
 * Create a function called `getYearlySubscribers` that takes in one parameter - `array` - 
 * which represents an array of user objects like the one shown in data.js. This function 
 * should use the native filter method to return a new array of only the user objects that 
 * have a yearly subscription.
 */

function getYearlySubscribers(array){
    return array.filter(user => {
        if (user.subscription.type === 'Yearly')
        return true
    }
    )
}

// Problem #2 //
/**
 * Create a function called getTheaterGoers that takes in one parameter - array - 
 * which represents an array of user objects like the one shown in data.js. This 
 * function should use the native filter method to return a new array of only the 
 * user objects whose watched array includes a movie they have seen in theaters.
*/

function getTheaterGoers(array){
    return array.filter(user => user.watched.forEach(film => {
        if(film.platform === 'Theater'){
            return true
        }
    }))
}

// Problem #3 // 
/**
 *Create a function called mapUsers that takes in one parameter - array - 
 which represents an array of user objects like the one shown in data.js. 
 This function should use the native map method to return a new array of 
 strings that includes the user's name followed by their subscription type 
 and cost. Use the example below to format your strings. Note how 'yearly' 
 and 'monthly' in the strings below are lowercase.
 */

function mapUsers(array){
    return array.map(user => `${user.name} has a ${user.subscription.type} that costs ${user.subscription.cost}`)
    
}

// Problem #4 //
/**
 * Create a function called `getYearlySubscribers` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native filter method to return a new array of only the user objects that have a yearly subscription.
 */

function getObjects(){
    
}

// Problem #5 //
function getInfoByCity(){
    
}

// Problem #6 //
function getYearlyCost(){
    
}

