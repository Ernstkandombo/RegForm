<template>
    <div>
        <div class="container my-5">
            <div class="Applogo mb-5">
                <nuxt-link to="/"><img width="65px" src="https://i.dlpng.com/static/png/6723736_preview.png"></nuxt-link>
            </div>
            <div class="RegisterForm">
                <h2>Register Today</h2>
                <small class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora quod ab voluptatum nesciunt corrupti soluta veniam, dicta maiore</small>
                <form @submit.prevent="SubmitForm">
                    <div class="row align-items-center mt-3">
                        <div class="col-md-6 col-sm-12 mt-4">
                            <input v-model="firstName" type="text" class="form-control" placeholder="First Name">
                        </div>
                        <div class="col-md-6 col-sm-12 mt-4">
                            <input v-model="lastName" type="text" class="form-control" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                          <input v-model="email" type="text" class="form-control" placeholder="email">
                        </div>
                    </div>
                    <div class="row align-items-center mt-4">
                        <div class="col">
                          <input v-model="Telephone" type="text" class="form-control" placeholder="Phone">
                        </div>
                    </div>
                   
                    <div class="row align-items-center mt-4">
                        <div class="col">
                          <textarea v-model="address" row="3" class="form-control" placeholder="address"></textarea>
                        </div>
                    </div>

                    <hr>

                    <div class="row align-items-center px-3 mt-4">
                        <button class="btn btn-secondary btn-block">Register</button>
                    </div>  
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appRegisterForm',
    data() {
      return {
        firstName:'',
        lastName:'',
        email:'',
        Telephone:'',
        address: ''
      }
    },
    methods: {
      SubmitForm(){
       this.$axios
       .post('/api/users',{
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        Telephone: this.Telephone,
        address: this.address
       }).then(Response =>{
         console.log(Response);
       }).catch(error =>{
         console.log(error);
       })
      },
      formatNames(files) {
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} Files Uploaded`
        }
      }
    }
}
</script>

<style>
.Applogo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    
}
.RegisterForm{
    max-width: 560px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
textarea {
   resize: none;
}
</style>
