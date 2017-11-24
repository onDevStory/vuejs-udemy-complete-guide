<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- local Filter -->
        <p>{{ firstText | reverse }}</p>

        <!-- global Filter -->
        <p>{{ secondText | calculateLength }}</p>

        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reversed }}</p>

        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{ lengthAware }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAwareMixin } from './lengthAwareMixin';

export default {
  mixins: [lengthAwareMixin],
  data() {
    return {
      firstText: 'Some Text',
      secondText: 'Maximilian'
    }
  },
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    }
  },
  computed: {
    reversed() {
      return this.firstText.split("").reverse().join("");
    }
  }
}
</script>

<style>
</style>
