<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit ">Submit</button>
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submit() {
      // {filename}.json
      this.$http.post('https://vuejs-http-a88d5.firebaseio.com/data.json', this.user)
        .then(response => {
          console.warn(response);
        }, error => {
          console.warn(error);
        });
    },
    fetchData() {
      this.$http.get('https://vuejs-http-a88d5.firebaseio.com/data.json')
      .then(response => {
          console.warn('response: {}', response); // Response 객체

          const promiseObj = response.json();
          console.warn('response.json(): {}', promiseObj); // PromiseObj 객체
          return promiseObj; // promiseValue 를 전달
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;

          console.warn('data: {}', data);
          // 아래처럼 해도 리스팅이 되기는 함
          // this.users = data;
        })
    }
  }
}
</script>

<style>
</style>
