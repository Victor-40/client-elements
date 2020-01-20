<template>
  <div id="app">
    <el-container>
      <el-aside>
        <div id="nav">
          <router-link to="/">Home</router-link><br><br>
          <router-link to="/status">Status</router-link><br><br>
          <router-link to="/about">About</router-link>
        </div>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container> 
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    width: 100%;
    
  }
  /* el-container {
    max-width: 100%;
  } */
</style>
