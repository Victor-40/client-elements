<template>
  <div>
    <h2>VMs current status</h2>
    <div class="st-wrapper">
      <div id="mainFree">
        <h3>Free</h3>
        <hr>
        <ul>
          <li v-for="item in freeVm" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div id="mainBusy">
        <h3>Busy</h3> 
        <hr>
        <ul id="busyRed">
          <li v-for="item in busyVm" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
.st-wrapper {
  display: grid;
  grid-template-areas: "free busy";
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  /* height: 100vh; */
  margin: 0;
}
free,
busy {
  padding: 20px;
}
#mainFree {
  grid-area: free;
  padding-left: 40px;
}
#mainBusy {
  grid-area: busy;
  padding-left: 40px;
}
#busyRed {
  color: red;
}
ul > li {
  font-weight: 600;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cfg: {},
      freeVm: [],
      busyVm: []
    };
  },
  methods: {
    getStatus() {
      const path = "http://localhost:5000/api/cfg";
      axios
        .get(path)
        .then(res => {
          this.cfg = res.data;
          // eslint-disable-next-line
          for (let key in this.cfg) {
            if (this.cfg[key].status === "free") {
              this.freeVm.push(key);
            } else {
              this.busyVm.push(key);
            }
          }
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  created() {
    this.getStatus();
  }
};
</script>
