<template>
<div>
  <md-field>
    <label>Name</label>
    <md-input v-model="name"></md-input>
  </md-field>
  <md-field>
    <md-select v-model="faculty" name="faculty" placeholder="Faculty">
      <md-option value="Allied Health Science">Allied Health Science</md-option>
      <md-option value="Architecture">Architecture</md-option>
      <md-option value="Arts">Arts</md-option>
      <md-option value="Commerce and Accountacy">Commerce and Accountacy</md-option>
      <md-option value="Communication Arts">Communication Arts</md-option>
      <md-option value="Dentistry">Dentistry</md-option>
      <md-option value="Economics">Economics</md-option>
      <md-option value="Education">Education</md-option>
      <md-option value="Engineering">Engineering</md-option>
      <md-option value="Fine and Applied Arts">Fine and Applied Arts</md-option>
      <md-option value="Medicine">Law</md-option>
      <md-option value="Medicine">Medicine</md-option>
      <md-option value="Nursing">Nursing</md-option>
      <md-option value="Pharmaceutical Sciences">Pharmaceutical Sciences</md-option>
      <md-option value="Political Science">Political Science</md-option>
      <md-option value="Psychology">Psychology</md-option>
      <md-option value="Science">Science</md-option>
      <md-option value="Sport Science">Sport Science</md-option>
      <md-option value="Veterinary Science">Veterinary Science</md-option>
    </md-select>
  </md-field>
  <br/>
  <span class="md-title">Contact</span>
  <md-field>
    <label>Phone</label>
    <md-input v-model="contact.phone"></md-input>
  </md-field>
  <md-field>
    <label>Email</label>
    <md-input v-model="contact.email"></md-input>
  </md-field>
    <md-field>
    <label>LINE</label>
    <md-input v-model="contact.line"></md-input>
  </md-field>

  <md-button class="md-raised" @click="submit">Submit</md-button>
</div>
</template>

<script>
export default {
  name: "Chapter-3-1",
  data() {
    return {
      name: "",
      faculty: "",
      contact: {
        phone: "",
        email: "",
        line: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.faculty, this.contact);
    }
  }
};
</script>
