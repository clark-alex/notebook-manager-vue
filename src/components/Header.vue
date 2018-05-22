<template>
    <div class="header" v-bind:style="{background:background}">
    <div v-if="sideButtons">Settings</div>
        <h1>{{title}}</h1>
    <div v-if="sideButtons" v-on:click="onClickMethod">{{rightButtonName}}</div>
    </div>
</template>

<script>
export default {
  props: ["title", "background", "sideButtons","onClickMethod","rightButtonName"]
};
// we need a method here that can be a logout button or a color changer. so we can put an on click on the button and pass down the method
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}
</style>
