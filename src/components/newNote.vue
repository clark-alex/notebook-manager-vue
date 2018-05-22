<template>
<div
  v-if="toggle"
  class="background">
  <div class="main">
      <div class='newNote'>
        <Header 
          :background='this.header.activeColor'
          :title='"New Note"'
          :rightButtonName='"Color"'
          :onClickMethod='colorChanger'
          :sideButtons="true"
          />

        <section class="inputArea">
            <md-field md-clearable>
                <label>Title</label>
                <md-input v-model="title"></md-input>
            </md-field>

            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>

            <md-field>
              <label>Notes</label>
              <md-textarea v-model="notes"></md-textarea>
            </md-field>
        </section>

      </div>
  </div>
</div>
</template>
<script>
import Header from "./Header.vue";
export default {
  data() {
    return {
      title: "",
      password: "",
      notes: "",
      header: {
        headerColorArray: [
          "#2bc0e4",
          "#2be450",
          "#3d2be4",
          "#e4912b",
          "#e4342b",
          "#e42b75",
          "#e4bf2b"
        ],
        activeColor: "#2bc0e4",
      }
    };
  },
  props: ["toggle"],
  components: {
    Header
  },
  methods: {
    postItem() {
      let newObj = {
        title: this.title,
        password: this.password,
        notes: this.notes,
        headerColor: this.header.headerColor
      };
      console.log(newObj);
    },
    colorChanger() {
      let i = this.header.headerColorArray.findIndex(e=> e === this.header.activeColor)
      this.header.activeColor = this.header.headerColorArray[i++] ? this.header.headerColorArray[i++] : this.header.headerColorArray[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (primary: #2bc0e4, accent: #e4342b));

@import "~vue-material/dist/theme/all";
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
.inputArea {
  width: 70vw;
  padding: 0 10px;
  margin-top: 0;
}
.newNote {
  background: white;
  box-shadow: -5px 5px 13px #00000038;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.472);
}
</style>
