// Problem #1 // 
function getYearlySubscribers(array){
    console.log(users);
    return array.filter(user => {
        return user.subscription.type === 'Yearly';
    });
}

console.log(getYearlySubscribers(users));

// Problem #2 //