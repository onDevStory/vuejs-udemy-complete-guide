<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- .trim -->
            <input type="text" id="email" class="form-control" v-model.trim="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!-- .lazy input 대신 change 이후에 동기화 -->
            <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <!-- .number 를 쓰지 않으면 문자열을 반환하여 .length를 구할 수 있다 -->
            <input type="number" id="age" class="form-control" v-model.number="userData.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea id="message" rows="5" class="form-control" v-model="message" placeholder="This is the default message."></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender"> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="priority in priorities">{{priority}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Age: {{userData.age}}</p>
            <!-- style="white-space: pre" 공백을 있는 그대로 표시. line break 표시해줌 -->
            <p style="white-space: pre">Message: <br>{{message}}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{item}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selectedPriority}}</p>
            <p>Switched: {{dataSwitch}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue';

export default {
  components: {
    appSwitch: Switch
  },
  data: function() {
    return {
      userData: {
        email: '',
        password: '',
        age: ''
      },
      message: '',
      sendMail: [],
      gender: 'Male',
      selectedPriority: 'High',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: true,
      isSubmitted: false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
}
</script>

<style>
</style>
