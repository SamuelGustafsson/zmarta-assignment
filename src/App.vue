<template>
  <div id="app">
    <div class="calculator-container">
      <MonthlyCost
        :monthly-cost-label="content.monthlyCostLabel"
        :format-monthly-cost="formatMonthlyCost"
      />
      <!-- Amount -->
      <Field
        :label="content.loanAmountLabel"
        :value="formatLoanAmount"
        :decrement="decrementLoanAmount"
        :increment="incrementLoanAmount"
      />

      <!-- Repayment -->
      <Field
        :label="content.repaymentYearsLabel"
        :value="formatRepaymentYears"
        :decrement="decrementRepaymentYears"
        :increment="incrementRepaymentYears"
      />

      <div class="cta-button-container">
        <ApplyButton :label="content.ctaLabel" :onClick="apply" />
      </div>
    </div>
  </div>
</template>

<script>
import MonthlyCost from "./components/MonthlyCost";
import Field from "./components/Field";
import ApplyButton from "./components/ApplyButton";

import { calculateMonthlyCost, formatCurrency } from "./helpers";

export default {
  name: "app",
  data() {
    return {
      monthlyCost: 0,
      loanAmount: 250000,
      repaymentYears: 14,
      content: {}
    };
  },
  computed: {
    formatLoanAmount() {
      return `${formatCurrency(this.loanAmount)} ${
        this.getContent().loanAmountSuffix
      }`;
    },
    formatRepaymentYears() {
      return `${this.repaymentYears} ${this.getContent().repaymentYearsSuffix}`;
    },
    formatMonthlyCost() {
      const calculatedMonthlyCost = calculateMonthlyCost(
        this.loanAmount,
        this.repaymentYears,
        this.getContent().interest
      );

      return `${formatCurrency(calculatedMonthlyCost)} ${
        this.getContent().monthlyCostSuffix
      }`;
    }
  },
  methods: {
    incrementLoanAmount() {
      if (this.loanAmount < 600000) {
        this.loanAmount += 5000;
      }
    },
    decrementLoanAmount() {
      if (this.loanAmount > 5000) {
        this.loanAmount -= 5000;
      }
    },
    incrementRepaymentYears() {
      if (this.repaymentYears < 15) {
        this.repaymentYears += 1;
      }
    },
    decrementRepaymentYears() {
      if (this.repaymentYears > 1) {
        this.repaymentYears -= 1;
      }
    },
    apply() {
      window.confirm("Vad roligt, du tryckte på ansök!");
    },
    /**
     * Simulates an API call to a CMS.
     */
    getContent() {
      return {
        monthlyCostLabel: "Månadskostnad",
        monthlyCostSuffix: "kr",
        loanAmountLabel: "Lånebelopp",
        loanAmountSuffix: "kr",
        repaymentYearsLabel: "Återbetalningstid",
        repaymentYearsSuffix: "år",
        ctaLabel: "Ansök nu",
        interest: 5.77
      };
    }
  },
  mounted() {
    this.content = this.getContent();
  },
  components: {
    MonthlyCost,
    Field,
    ApplyButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  justify-content: center;
}

button {
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
}

button:hover,
cta-button:hover {
  background-color: #41cc95;
  cursor: pointer;
}

.cta-button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.calculator-container {
  width: 320px;
}
</style>
