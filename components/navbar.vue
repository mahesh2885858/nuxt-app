<template>
  <nav>
    <div class="logo"><NuxtLink to="/">Logo</NuxtLink></div>

    <svg
      @click="toggleDrawer()"
      class="burger"
      viewbox="0 0 50 50"
      height="50"
      width="50"
    >
      <rect
        class="burger-top"
        height="4.5"
        rx="2.5"
        width="25"
        x="12.5"
        y="12.5"
        fill="white"
      />
      <rect
        class="burger-middle"
        height="4.5"
        rx="2.5"
        width="25"
        x="12.5"
        y="22.5"
        fill="white"
      />
      <rect
        class="burger-bottom"
        height="4.5"
        rx="2.5"
        width="25"
        x="12.5"
        y="32.5"
        fill="white"
      />
    </svg>

    <ul>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>
  <div class="drawer-overlay" @click="toggleDrawer()">
    <div
      class="drawer"
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
    >
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <br />
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">Register</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:global(body) {
  height: 100%;
  width: 100%;
}
nav {
  background: #3540dbd8;
  color: white;
  padding: 0.75em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  transition: 0.8s all;
}
nav svg {
  background: #2b36dd6d;
  border-radius: 10px;
  cursor: "pointer";
  transition: 0.8s all;
  z-index: 1000;
}
nav .move-svg {
  position: absolute;
  right: 12px;
  top: 12px;
  transform: translateY(30px);
  z-index: 1000;
  background: #343ec2;
  transition: 0.8s all;
}
nav svg .burger-top,
nav svg .burger-middle,
nav svg .burger-bottom {
  transition: 0.8s all;
}
nav .move-svg .line-top,
nav .move-svg .line-bottom {
  y: 22.5;
  transition: 0.8s all;
}
nav .move-svg .line-top {
  transform-origin: center;
  rotate: 45deg;
  transition: 0.8s all;
}
nav .move-svg .line-bottom {
  transform-origin: center;

  rotate: -45deg;
  transition: 0.8s all;
}

nav .move-svg .line-middle {
  height: 0;
  width: 0;
}

nav .logo a {
  font-size: 1.75em;
  padding: 0, 0.25em;
  border-radius: 0.25em;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
}
nav ul {
  display: none;
}
/* drawer */
.drawer-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: 0.8s all;
}
.drawer {
  width: 0;
  height: 95%;
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 200;
  background: #343ec2;
  border-radius: 10px 0px 0px 10px;
  transition: 0.8s all;

  overflow-x: hidden;
}
.drawer-open {
  right: 0;
  width: 250px;
  padding: 40px 0 0 25px;
  height: 95%;
  box-shadow: 5px 5px 4px 6px rgba(31, 77, 166, 0.82);
  -webkit-box-shadow: 5px 5px 4px 6px rgba(31, 77, 166, 0.82);
  -moz-box-shadow: 5px 5px 4px 6px rgba(31, 77, 166, 0.82);
  transition: 0.8s all;
}
.drawer-overlay-open {
  right: 0;
  width: 100%;
  height: 100%;
  transition: 0.8s all;
}
.drawer ul {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.drawer ul li {
  list-style: none;
  text-decoration: none;
  display: block;
}
.drawer ul li a {
  list-style: "none";
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
  gap: 10px;
}

@media (min-width: 480px) {
  nav svg {
    display: none;
  }
  nav ul {
    display: unset;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  nav ul li {
    list-style: none;
    text-decoration: none;
    color: white;
  }
  nav ul li a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
  }
  .drawer-overlay {
    display: none;
  }
}
</style>
<script setup>
const toggleDrawer = () => {
  const elemOverlay = document.getElementsByClassName("drawer-overlay")[0];
  const elem = document.getElementsByClassName("drawer")[0];
  const nav = document.querySelector("nav");
  const elem1 = document.getElementsByClassName("burger")[0];
  const lineTop = document.getElementsByClassName("burger-top")[0];
  const lineMiddle = document.getElementsByClassName("burger-middle")[0];
  const lineBottom = document.getElementsByClassName("burger-bottom")[0];
  nav.style.height = "74px";
  elem.classList.toggle("drawer-open");
  elemOverlay.classList.toggle("drawer-overlay-open");
  elem1.classList.toggle("move-svg");
  lineTop.classList.toggle("line-top");
  lineMiddle.classList.toggle("line-middle");
  lineBottom.classList.toggle("line-bottom");
};
</script>
