export function calculateMonthlyCost(loanAmount, repaymentYears, interest) {
  var months = repaymentYears * 12;

  return Math.round(
    (loanAmount * (interest / 100)) /
      12 /
      (1 - Math.pow(1 + interest / 100 / 12, months * -1))
  );
}

export function formatCurrency(value) {
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
