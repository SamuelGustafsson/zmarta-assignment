<template>
  <div class="container">
    <div class="label">{{monthlyCostLabel}}</div>
    <div class="value">{{ formatMonthlyCost }}</div>
  </div>
</template>

<script>
export default {
  props: {
    monthlyCostLabel: String,
    formatMonthlyCost: String
  }
};
</script>

<style scoped>
.label,
.value {
  text-align: left;
  width: 100%;
  margin-bottom: 6px;
}

.value {
  font-size: 20px;
  color: #4a4a4a;
}

.label {
  font-size: 14px;
  font-weight: 700;
  color: #353535;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
</style>