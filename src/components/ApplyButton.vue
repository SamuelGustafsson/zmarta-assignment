<template>
  <button @click="onClick">
    <!-- ctaLabel -->
    {{ label }}
    <svg
      data-v-e46fefb6
      data-v-7a4979f6
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill="none"
      stroke="white"
      viewBox="0 0 32 32"
      xml:space="preserve"
      class="apply-arrow-icon"
    >
      <path
        d="M30.3,16.5H0.5C0.2,16.5,0,16.3,0,16c0-0.3,0.2-0.5,0.5-0.5
      h29.8L24.8,10c-0.2-0.2-0.2-0.5,0-0.7C25,9,25.3,9,25.5,9.2l6.3,6.3c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2
      c0,0.1-0.1,0.2-0.1,0.3l-6.3,6.3c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7L30.3,16.5z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    onClick: Function
  }
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 283px;
  height: 60px;
  background-color: #61d5a7;
  border-radius: 50px;
  font-size: 17px;
  color: white;

  padding: 0 20px;
}

button:hover {
  background-color: #41cc95;
  cursor: pointer;
}

.apply-arrow-icon {
  width: 40px;
  height: 40px;
}
</style>