// Problem #1 // 
/**
 * Create a function called `getYearlySubscribers` that takes in one parameter - `array` - 
 * which represents an array of user objects like the one shown in data.js. This function 
 * should use the native filter method to return a new array of only the user objects that 
 * have a yearly subscription.
 * 
 * I:
 * O: array of users with yearly subs
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
 * 
 * I: array
 * O: array of user objects if watched array includes a theater film
*/

function getTheaterGoers(array){
    return array.filter(user => {
        for(let i = 0; i < user.watched.length; i++){
        if(user.watched[i].platform === 'Theater'){
            return true;
        }
    }})
}

// Problem #3 // 
/**
 *Create a function called mapUsers that takes in one parameter - array - 
 which represents an array of user objects like the one shown in data.js. 
 This function should use the native map method to return a new array of 
 strings that includes the user's name followed by their subscription type 
 and cost. Use the example below to format your strings. Note how 'yearly' 
 and 'monthly' in the strings below are lowercase.

I:
O: arr of template literals

 */

function mapUsers(array){
    return array.map(user => {
        return `${user.name} has a ${user.subscription.type.toLowerCase()} subscription that costs ${user.subscription.cost}.`})

}

// Problem #4 //
/**
 * Create a function called getObjects that takes in one parameter - array - 
 * which represents an array of user objects like the one shown in data.js. This 
 * function should use the native map method to return a new array of objects that 
 * looks like the example below:
 */

function getObjects(array){
    return array.map(user => {
        return {
            user: user.name,
            location: `${user.location.city}, ${user.location.state}`,
            watchedFilms: user.watched.length,
            filmsInQueue: user.queue.length
        }
    })
}

// Problem #5 //
/**
 * Create a function called getInfoByCity that takes in two parameters - array & city; 
 * array represents an array of user objects like the one shown in data.js; 
 * city represents a string of a city a user lives in. This function should use 
 * recursion to return a new array of strings. Every string in the array should 
 * the the name of a user followed by their email.
 */

function getInfoByCity(array, city, output = []){
    //base case
    if(array.length === 0){
        return output;
    }
    //check if user's city matches the input city
    if(array[0].location.city === city && array[0].email){
        output.push(`${array[0].name} - ${array[0].email}`);
    }
    //recursive call with the remaining array using slice
    return getInfoByCity(array.slice(1), city, output)
}

// Problem #6 //

/**
 * Create a function called getYearlyCost that takes in one parameter - array - 
 * which represents an array of user objects like the one shown in data.js. 
 * This function should use the native reduce method to return an array of 
 * objects where each key is the name of a user and the value at each key 
 * is the amount they spend yearly on their subscription. Note that if a 
 * user has a subscription type marked "Yearly", their cost is already 
 * calculated for the year. On the other hand, if a user has a subscription 
 * type marked "Montly", you will need to calculate what their monthly cost 
 * will add up over 12 months.
 */
function getYearlyCost(array){
    return array.reduce((acc, user) => {
        if(user.subscription.type === 'Yearly'){
            acc[user.name] = user.subscription.cost;
        }else {
            acc[user.name] = user.subscription.cost * 12
        }
return acc
    }, {})
   
}

