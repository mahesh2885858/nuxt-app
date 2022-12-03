<template>
  <div class="register-form-container">
    <h2>Register</h2>
    <form
      @submit="
        (e) => {
          e.preventDefault();
        }
      "
    >
      <div class="field name">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Name" spellcheck="false" />
      </div>
      <div class="field email">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Email" spellcheck="false" />
      </div>
      <div class="field username">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          spellcheck="false"
        />
      </div>
      <div class="field password">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          spellcheck="false"
        />
      </div>
      <div class="field cpassword">
        <label for="cpassword">Cofirm Password:</label>
        <input
          type="password"
          id="cpassword"
          placeholder="Cofirm Password"
          spellcheck="false"
        />
      </div>

      <div class="terms">
        <input type="checkbox" id="terms" />
        <label for="terms">Accept Terms and Conditions</label>
      </div>
      <button>Register</button>
    </form>
    <p>Already have an account <NuxtLink to="/login">Click here</NuxtLink></p>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "background",
});
</script>
<style scoped>
.register-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* height: 100vh; */
  background: #ffffff;
  padding: 20px;
  gap: 15px;
}
.register-form-container > h2 {
  margin-bottom: 10px;
}
.register-form-container form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
}
.register-form-container form .field {
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.register-form-container form .field label {
  font-size: 1.05rem;
}
.register-form-container form .field input {
  font-size: 1rem;
  padding: 5px;
  background: rgba(0, 0, 0, 0.061);
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
}
.register-form-container form .terms {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
}
.register-form-container button {
  width: 100%;
  height: 30px;
  border: none;
  background: rgb(53, 79, 223);
  border-radius: 5px;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  margin-top: 10px;
}
@media (min-width: 550px) {
  .register-form-container {
    width: 75%;
  }
}
@media (min-width: 900px) {
  .register-form-container {
    width: 35%;
  }
  .register-form-container h2 {
    font-size: 1.75rem;
  }
  .register-form-container form .field label {
    font-size: 1.15rem;
  }
  .register-form-container form .field input {
    font-size: 1.05rem;
    padding: 10px 10px 10px 15px;
  }
  .register-form-container button {
    width: 70%;
    margin: auto;
  }
}
</style>
