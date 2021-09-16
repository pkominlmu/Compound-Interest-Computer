const principalBox = document.querySelector("#principal");
const interestBox = document.querySelector("#intRate");
const numTimesCompoundedBox = document.querySelector("#timesCompounded");
const numYearsBox = document.querySelector("#numYears");
const compInterestSpan = document.querySelector("#compInterest");
const totalAmountSpan = document.querySelector("#totalEarned");

function computeCompInterest() {
  const principal = principalBox.value;
  const interest = interestBox.value;
  const numTimesCompounded = numTimesCompoundedBox.value;
  const numYears = numYearsBox.value;
  const totalAmount = (principal *((1 +((interest/100)/numTimesCompounded))**(numTimesCompounded*numYears)));
  const compInterest = totalAmount - principal;
  compInterestSpan.textContent = compInterest;
  totalAmountSpan.textContent = totalAmount;
}

principalBox.addEventListener('input', computeCompInterest);
interestBox.addEventListener('input', computeCompInterest);
numTimesCompoundedBox.addEventListener('input', computeCompInterest);
numYearsBox.addEventListener('input', computeCompInterest);

