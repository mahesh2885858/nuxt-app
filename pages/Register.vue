<template>
  <div class="register-form-container">
    <h2>Register</h2>
    <form @submit="onSubmit">
      <div class="field name">
        <label for="name">Name:</label>
        <input
          type="text"
          :value="inputs.name.value"
          @input="(e) => onInput(e, 'name')"
          id="name"
          placeholder="Name"
          spellcheck="false"
        />
        <p v-if="inputs.name.error.length >= 1" style="color: red">
          {{ inputs.name.error }}
        </p>
      </div>
      <div class="field email">
        <label for="email">Email:</label>
        <input
          type="email"
          :value="inputs.email.value"
          @input="(e) => onInput(e, 'email')"
          id="email"
          placeholder="Email"
          spellcheck="false"
        />
        <p v-if="inputs.email.error.length >= 1" style="color: red">
          {{ inputs.email.error }}
        </p>
      </div>
      <div class="field username">
        <label for="username">Username:</label>
        <input
          :value="inputs.username.value"
          @input="(e) => onInput(e, 'username')"
          type="text"
          id="username"
          placeholder="Username"
          spellcheck="false"
        />
        <p v-if="inputs.username.error.length >= 1" style="color: red">
          {{ inputs.username.error }}
        </p>
      </div>
      <div class="field password">
        <label for="password">Password:</label>
        <input
          type="password"
          :value="inputs.password.value"
          @input="(e) => onInput(e, 'password')"
          id="password"
          placeholder="Password"
          spellcheck="false"
        />
        <p v-if="inputs.password.error.length >= 1" style="color: red">
          {{ inputs.password.error }}
        </p>
      </div>
      <div class="field cpassword">
        <label for="cpassword">Cofirm Password:</label>
        <input
          type="password"
          id="cpassword"
          :value="inputs.cpassword.value"
          @input="(e) => onInput(e, 'cpassword')"
          placeholder="Cofirm Password"
          spellcheck="false"
        />
        <p v-if="inputs.cpassword.error.length >= 1" style="color: red">
          {{ inputs.cpassword.error }}
        </p>
      </div>

      <div class="terms">
        <input
          type="checkbox"
          id="terms"
          :value="inputs.isTermsAccedpted.value"
          @input="(e) => onInput(e, 'isTermsAccedpted')"
        />
        <label for="terms">Accept Terms and Conditions</label>
      </div>
      <p v-if="inputs.isTermsAccedpted.error.length >= 1" style="color: red">
        {{ inputs.isTermsAccedpted.error }}
      </p>
      <button>Register</button>
    </form>
    <p>Already have an account <NuxtLink to="/login">Click here</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "background",
});
const inputs = reactive({
  name: {
    value: "",
    error: "",
  },

  email: {
    value: "",
    error: "",
  },
  username: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  cpassword: {
    value: "",
    error: "",
  },
  isTermsAccedpted: {
    value: false,
    error: "",
  },
});
const onInput = (e: Event, field: keyof typeof inputs) => {
  if (field === "isTermsAccedpted") {
    inputs[field].value = (e.target as HTMLInputElement).checked;
    inputs[field].error = "";
    return;
  } else {
    inputs[field].value = (e.target as HTMLInputElement).value;
    inputs[field].error = "";
  }
};
const onSubmit = async (e: Event) => {
  e.preventDefault();
  const inputValues: {
    field: keyof typeof inputs;
    length?: number;
    checked?: boolean;
  }[] = [
    { field: "name", length: inputs.name.value.trim().length },
    { field: "email", length: inputs.email.value.trim().length },
    { field: "username", length: inputs.username.value.trim().length },
    { field: "password", length: inputs.password.value.trim().length },
    { field: "cpassword", length: inputs.cpassword.value.trim().length },
    { field: "isTermsAccedpted", checked: inputs.isTermsAccedpted.value },
  ];
  inputValues.forEach((input) => {
    if (input.field === "isTermsAccedpted") {
      if (!input.checked) {
        inputs[input.field].error = "Please accept terms and conditions";
      } else return;
    } else {
      if (input.length! <= 3) {
        inputs[
          input.field
        ].error = `${input.field} should be more than 3 characters`;
      } else return;
    }
  });
  const data = await fetch("/api/test");
  console.log(await data.json());
};
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
