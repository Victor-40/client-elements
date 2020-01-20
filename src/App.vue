<template>
  <div id="app">
    <div class="wrapper">
      <!-- <header id="pageHeader">Header</header> -->
      <article id="mainArticle"><router-view/></article>
      <nav id="mainNav">
        <p><router-link to="/">Home</router-link></p>
        <p><router-link to="/status">Status VMs</router-link></p>
        <p><router-link to="/about">About</router-link></p>
      </nav>
    </div>
  </div>
</template>

<style>
      .wrapper {
        display: grid;
        grid-template-areas: "nav article";
        grid-template-rows: 1fr;
        grid-template-columns: 10% 1fr;
        grid-gap: 10px;
        /* height: 100vh; */
        margin: 0;
      }
      
      nav    {
        padding: 20px;
        background: lightgray;
      }
      #mainArticle {
        grid-area: article;
      }
      #mainNav {
        grid-area: nav;
      }


</style>
