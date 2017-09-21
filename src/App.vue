<template>
  <div id="app">
    <transition :name="transitionName"> 
　　　　<router-view class="tab-view"></router-view> 
　　</transition> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      transitionName: 'slide-left' 
    }
  },
  mouthed() {

  },
  watch: {
    '$route' (to,from) {
      if(to.path == '') {
        this.tabAnimation = 'slide-right'
      }else {
        this.tabAnimation = 'slide-left'
      }
    }
  }
}
</script>

<style>
  @import './style/reset.css';
  @import './style/main.css';
  @import './style/index.css';
  @import './style/comp.css';
</style>

<style type="text/css">
  .tab-view {
    position: absolute;
    left: 50%;
    margin-left: -330px;
    margin-bottom: 20px;
    top: 30px;
    transition: all .6s cubic-bezier(.55,0,.1,1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
  }
</style>