<template>
  <nav class="navbar navbar-expand-lg navbar-absolute">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button" 
                  class="navbar-toggler"
                  aria-label="Navbar toggle button"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
          <a class="navbar-brand" href="#">{{routeName}}</a>     
      </div>

      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav ml-auto">
            <div class="center">
              <base-button @click="startJob" block >
                    <i class="tim-icons icon-user-run"></i>&nbsp;&nbsp;&nbsp;&nbsp;RUN 
              </base-button>
            </div>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';

  export default {
    components: {
      CollapseTransition,
    },
    data() {
        return {
          showMenu: false,
        };
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      },
    },

    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },

      toggleMenu() {
        this.showMenu = !this.showMenu;
      },

      startJob() {
        console.log("CLICOU")
      }
    }
  };
</script>
<style>
  .center{
    display : flex;
    justify-content: center;
  }
</style>
