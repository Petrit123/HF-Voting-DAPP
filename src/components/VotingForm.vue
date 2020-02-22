<template>
 <div class="posts">
  <h1>2020 Student Union Election</h1>
  <input type="radio" id="one" value="Student1" v-model="picked">
  <label for="one">Nick</label>
  <br>
  <input type="radio" id="two" value="Student2" v-model="picked">
  <label for="two">Rama</label>
  <br>
  <input type="radio" id="two" value="Student3" v-model="picked">
  <label for="two">Jason</label>
  <br>
  <input type="radio" id ="two" value="Student4" v-model="picked">
  <label for="two">Petrit</label>
  <br>
  <br>
  <span v-if="picked">
    Picked:
    <b> {{ picked}} </b>
  </span>
  <br>
  <br>
  <form v-on:submit="castVote">
   <input type="text" v-model="input.voterName" placeholder="Full Name">
   <br>
   <input type="submit" value ="Submit vote">
   <br>
   <br>
   </form>

   <br>
   <span v-if="response">
     <b> {{ response }} </b>
  </span>
  <br>

 </div>
</template>

<script>

export default {
  name: "response",
  data() {
    return {
      input: {},
      picked: null,
      response: null
    };
  },
  methods: {
    async castVote() {

    console.log("picked ");
    console.log(this.picked);
    console.log("voterName: ");
    console.log(this.input.voterName);
    this.response = null;

    // Error checking -- making sure that the user has selected a candidate
    if (this.picked == null) {
       console.log('this.picked === null')

       let response = "You have to select a candidate to vote for!";
       this.response = response;
    } else if (this.input.voterName == undefined) {
      console.log('this.voterName === undefined')

      let response = "You have to enter your name to cast a vote!";
      this.response = response;

    } else {
        let response = `Successfully recorded vote for ${this.picked}. Thanks for doing your part!`;

        this.response = response;

        console.log("cast vote");
        console.log(this.input);
    }
  }
  }
};
</script>
