<template>
  <button @click="onClick">
    <template v-if="increment">
      <svg
        data-v-e46fefb6
        data-v-16ea4e88
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        fill="currentColor"
        viewBox="0 0 32 32"
        xml:space="preserve"
        class="zg-icon zg-icon--white zg-icon--xsmall zg-icon--0"
        data-v-7a4979f6
      >
        <path
          d="M26.5,14.5h-9v-9C17.5,4.7,16.8,4,16,4s-1.5,0.7-1.5,1.5v9h-9
    C4.7,14.5,4,15.2,4,16s0.7,1.5,1.5,1.5h9v9c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-9h9c0.8,0,1.5-0.7,1.5-1.5S27.3,14.5,26.5,14.5z"
        />
      </svg>
    </template>
    <template v-else>
      <svg
        data-v-e46fefb6
        data-v-16ea4e88
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        fill="currentColor"
        viewBox="0 0 32 32"
        xml:space="preserve"
        class="zg-icon zg-icon--white zg-icon--xsmall zg-icon--0"
        data-v-7a4979f6
      >
        <path
          d="M5.3,17.5h21.3c0.7,0,1.3-0.7,1.3-1.5c0-0.8-0.6-1.5-1.3-1.5H5.3C4.6,14.5,4,15.2,4,16
      C4,16.8,4.6,17.5,5.3,17.5z"
        />
      </svg>
    </template>
  </button>
</template>
 
<script>
export default {
  name: "IncrementBtn",
  props: {
    onClick: Function,
    increment: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  line-height: 1;
  overflow: hidden;
  display: inline-block;
  width: 44px;
  height: 44px;
  content: "";
  font-size: 40px;
  color: white;
  background: #61d5a7;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: lighter;
  padding-bottom: 4px;
}

svg {
  width: 25px;
  height: 25px;
}
</style>
