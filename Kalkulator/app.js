document.getElementById('loan-form').addEventListener('submit', function(e){
//Hide results
document.getElementById('results').style.display = 'none';
//Show loader
document.getElementById('loading').style.display = 'block';
setTimeout(calculateResults, 2000);
e.preventDefault();

});

function calculateResults(e) {
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principl = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/100/12;
const calculatedPayments = parseFloat(years.value)*12;

const x = Math.pow(1+calculatedInterest, calculatedPayments);
const monthly = (principl*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principl).toFixed(2);
    
    //Show results
    document.getElementById('results').style.display = 'block';
    //Hide loader
    document.getElementById('loading').style.display = 'none';
} else {
    showError('Please check your numbers');
}
}

function showError(error) {
    //Show results
    document.getElementById('results').style.display = 'none';
    //Hide loader
    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}