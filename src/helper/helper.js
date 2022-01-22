export const validateBudget = budget => {
    let totalBudget = parseInt(budget, 10) || 0;

    if(totalBudget > 0) {
        return totalBudget;
    } else {
        return false;
    }
}

export const checkBudget = (budget, remaining) => {
    let alert;

    if( (budget / 4) > remaining) {
        alert = 'alert alert-danger';
    } else if( (budget / 2) > remaining) {
        alert = 'alert alert-warning'
    } else {
        alert = 'alert alert alert-success'
    }
    return alert
}