# bc-tutoring-practice-exam
1. Create a function called `getYearlySubscribers` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native filter method to return a new array of only the user objects that have a yearly subscription.
2. Create a function called `getTheaterGoers` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native filter method to return a new array of only the user objects whose watched array includes a movie they have seen in theaters.
3. Create a function called `mapUsers` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native map method to return a new array of strings that includes the user's name followed by their subscription type and cost. Use the example below to format your strings. Note how 'yearly' and 'monthly' in the strings below are lowercase.
```javascript
// example output
mapUsers(users);
/*
RETURNS =>
[
    'Alex Aaron has a yearly subscription that costs 120.99.', 
    'Beal Logan has a monthly subscription that costs 12.99.', 
    'Stanley Ray has a yearly subscription that costs 120.99.'
]
*/
```
4. Create a function called `getObjects` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native map method to return a new array of objects that look like the example blow:
```javascript
// example output
getObjects(users);
/*
RETURNS =>
[
    {user: 'Alex Aaron', location: 'New Orleans, Louisiana', watchedFilms: 3, filmsInQueue: 3},
    {user: 'Beal Logan', location: 'New Orleans, Louisiana', watchedFilms: 3, filmsInQueue: 2},          
    {user: 'Stanley Ray', location: 'Baton Rouge, Louisiana', watchedFilms: 3, filmsInQueue: 3}
]
*/
```
5. Create a function called `getInfoByCity` that takes in two parameters - `array` & `city`; `array` represents an array of user objects like the one shown in data.js; `city` represents a string of a city a user lives in. This function should use recursion to return a new array of strings. Every string in the array should the the name of a user followed by their email.
```javascript
// example output
getInfoByCity(users, 'New Orleans');
/*
RETURNS => 
['Alex Aaron - alexfrancisaaron@gmail.com', 'Beal Logan - blogan@gmail.com']
*/
```
6. Create a function called `getYearlyCost` that takes in one parameter - `array` - which represents an array of user objects like the one shown in data.js. This function should use the native reduce method to return an array of objects where each key is the name of a user and the value at each key is the amount they spend yearly on their subscription. Note that if a user has a subscription type marked "Yearly", their cost is already calculated for the year. On the other hand, if a user has a subscription type marked "Montly", you will need to calculate what their monthly cost will add up over 12 months.
```javascript
// example output
getYearlyCost(users);
/*
RETURNS =>
{
    "Alex Aaron": 120.99,
    "Beal Logan": 155.88,
    "Stanley Ray": 120.99
}
*/
```
