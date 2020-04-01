<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Please enter your full name to continue</h2>

    <form v-on:submit="validateVoter">
      <input type="text" v-model="loginData.voterName" placeholder="Full Name">
      <br>
      <input type="submit" value = "Take me to the voting form">
      <br>
      <br>
      <span v-if="loginResponse">
        <b> {{ loginResponse.data}} </b>
      </span>
      <br>
      </form>
      <br>
      <p class="copyright">© Petrit Krasniqi 2020 </p>
    </div>
</template>

<script>
export default {

  name: 'response',
  data() {
  return {
   msg: 'Welcome to my Vue.js voting app which leverages Hyperledger Fabric and IBM blockchain platform to ensure correct election results',
   loginData: {},
   loginResponse: {
      data: ""
   }
  };
  },

  methods: {
  async validateVoter(){

  if(!this.loginData.voterName) {
        console.log("!thislogin");
        let response = 'Please enter your name to continue';
        this.loginResponse.data = response;
  } else {
     console.log('Petrit Krasniqi')
     this.$router.push('VotingForm')
  }
}
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}


</style>
