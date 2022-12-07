<template>
  <Head>
    <Title>Login</Title>
    <Meta name="description" content="page for login" />
  </Head>
  <div class="login-form-container">
    <p class="login-title">Login</p>
    <form @submit="onSubmit" class="login-form">
      <label for="username">
        <span>Username: </span>
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        spellcheck="false"
      />
      <label for="password">
        <span>Password: </span>
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        spellcheck="false"
      />
      <div class="checkbox-label-container">
        <input type="checkbox" name="keep-logged-in" id="keep-logged-in" />
        <label id="check-box-label" for="keep-logged-in"
          >Keep me Logged in</label
        >
      </div>
      <button>Login</button>
    </form>
    <p class="link-to-register">
      Don't have an account create one
      <NuxtLink to="/register">here</NuxtLink>
    </p>
  </div>
</template>
<style scoped>
.login-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.login-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  border-radius: 1px;
}
.login-form label {
  font-size: 1.25rem;
  margin-bottom: 5px;
}
.login-form input[type="text"],
.login-form input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-bottom: 10px;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.061);
  width: 300px;
}
.login-form div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}
.login-form #check-box-label {
  margin-bottom: 0;
  font-size: 1rem;
  cursor: pointer;
}
.login-form input[type="checkbox"] {
  font-size: 2rem;
  cursor: pointer;
  margin-left: 10px;
}
.login-form button {
  padding: 10px;
  width: 40%;
  margin: auto;
  font-size: 1rem;
  margin-top: 5px;
  cursor: pointer;
  background: rgb(53, 79, 223);
  border-radius: 5px;
  border: none;
  color: white;
}
.link-to-register {
  margin-bottom: 15px;
}
</style>
<script setup>
definePageMeta({
  layout: "background",
});
const onSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("calling");
    const data = await $fetch("/api/login", {
      method: "post",
      body: { test: 123 },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
</script>
