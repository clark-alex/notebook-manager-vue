<template>
  <div id="main">

    <Header
    v-bind:style="{boxShadow:'-5px 5px 13px #00000038'}"
    :title='"Notebook Manager"'
    :background='"#2bc0e4"'
    :sideButtons='true'
    :rightButtonName='"Logout"'/>

    <NewNote
    :toggle='this.toggle'/>

    <ListItem
    :headerColor='"#2be450"'
    :title='"bagongbago"'
    :password='"HindiMoAlam93"'
    :note='"Hindi ko alam dahil sa iyo akoy di makakain di rin makatulog buhat ang inyong sulironin"'/>
      
      <div  class="addButton">
          <md-button
           @click="handleAddButton"
           class="md-fab md-primary ">
          <md-icon>add</md-icon>
          </md-button>
      </div>
  </div>
</template>

<script>
import NewNote from "./newNote.vue";
import ListItem from "./ListItem.vue";
import Header from "./Header.vue";

export default {
  data() {
    return {
      toggle: false,
      listInfo: []
    };
  },
  components: {
    NewNote,
    ListItem,
    Header
  },
  methods: {
    handleAddButton() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style>
#main {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.addButton {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
