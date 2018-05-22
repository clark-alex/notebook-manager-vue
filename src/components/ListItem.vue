<template>
    <div class="listItem">
        <Header
         :background='this.headerColor'
         :title='title'/>
        <h2>{{password}}</h2>
        <h3>{{note}}</h3>
    </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  props: ["title", "password", "note","headerColor"],
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (primary: #e4342b, accent: #eaecc6));

@import "~vue-material/dist/theme/all";
.listItem {
  box-shadow: -5px 5px 13px #00000038;
  width: 70vw;
  margin-top: 25px;
}
</style>
