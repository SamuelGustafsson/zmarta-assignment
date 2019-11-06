<template>
  <div class="container">
    <div class="label">{{ label }}</div>
    <div class="row">
      <FieldButton :onClick="decrement"></FieldButton>

      <input class="amount-value" type="text" v-model="value" disabled />

      <FieldButton increment :onClick="increment"></FieldButton>
    </div>
  </div>
</template>

<script>
import FieldButton from "./FieldButton";

export default {
  props: {
    label: String,
    value: String,
    increment: Function,
    decrement: Function
  },
  components: {
    FieldButton
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
}

input {
  width: 163px;
  height: 44px;
  border-radius: 5px;
  border: solid 1px #8a8a8a;
  background-color: var(--white);
  padding: 0 10px;
}

.label {
  font-size: 14px;
  font-weight: 700;
  color: #353535;
  text-align: left;
  margin-bottom: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>




