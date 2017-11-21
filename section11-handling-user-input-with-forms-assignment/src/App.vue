<template>
  <div class="container">
    <form v-if="!submitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!--
            아래는 단순히 child 컴포넌트에 fullName 값을 전달하고
            childe 컴포넌트에서 값 변경 시 동기화는 되지 않는다.
            동기화를 시키려면 v-model 로 바인딩해줘야 한다.
          -->
          <!-- <app-fullName :fullName="fullName"></app-fullName> -->
          <app-fullName v-model="fullName"></app-fullName>
          <div class="form-group">
            <label for="mail">Mail</label>
            <input type="text" id="mail" class="form-control" v-model="mail">
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <input type="text" id="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            Store Data?<br>
            <label for="yes">
              <input type="radio" name="yesNo" id="yes" value="Yes" v-model="storeData"> YES
            </label>
            <label for="no">
              <input type="radio" name="yesNo" id="no" value="No" v-model="storeData"> NO
            </label>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="submitted=true">
            Submit
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail: {{mail}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  components: {
    appFullName: FullName
  },
  data: function() {
    return {
      fullName: '12 344',
      mail: '',
      password: '',
      storeData: 'Yes',
      submitted: false
    }
  }
}
</script>

<style>
</style>
