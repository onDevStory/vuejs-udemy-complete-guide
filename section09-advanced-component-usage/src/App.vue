<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectedComponent='appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent='appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent='appRed'">Load Red Template</button>
        <hr>
        <component :is="selectedComponent">
          <!-- 자식 컴포넌트의 <slot></slot>태그에 렌더링 -->
          <h3><b>COMMON NOTICE</b></h3>
          <p slot="blueContents">{{blueContents?blueContents:noContents}}</p>
          <p slot="greenContents">{{greenContents?greenContents:noContents}}</p>
          <p slot="redContents">{{redContents?redContents:noContents}}</p>
        </component>
        <hr>
        <button class="btn btn-primary" @click="createBlueContents">Create Blue Contents!</button>
        <button class="btn btn-success" @click="createGreenContents">Create Green Contents!</button>
        <button class="btn btn-danger" @click="createRedContents">Create Red Contents!</button>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  components: {appBlue: Blue, appGreen: Green, appRed: Red},
  data: function () {
    return {
      selectedComponent: 'appBlue',
      noContents: 'No Contents',
      blueContents: '',
      greenContents: '',
      redContents: ''
    }
  },
  methods : {
    createBlueContents: function () {
      this.blueContents = 'This is the Blue Contents';
    },
    createGreenContents: function () {
      this.greenContents = 'This is the Green Contents';
    },
    createRedContents: function () {
      this.redContents = 'This is the Red Contents';
    }
  }
}
</script>

<style>
</style>