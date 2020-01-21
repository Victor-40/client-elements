<template>
  <div class="find">
    <h2>Find setups and make XLS-config</h2>
    <h4>Input Build tag:</h4>
    <el-input class="input"
      placeholder="Input build tag"
      v-model="tag"
      clearable
      minlength="5"
      @input="buildMake"
    >
    </el-input>
    <h4>Input Build number:</h4>
    <el-input class="input"
      placeholder="Input build number"
      v-model="build"
      clearable
      maxlength="4"
      minlength="4"
    >
    </el-input>
    <!-- <p>Tag: {{ tag }}</p>
    <p style="margin-bottom: 30px;">Build: {{ build }}</p> -->

    <div style="margin-bottom: 30px; margin-top: 30px;">
      <h4>Select products:</h4>
      <el-checkbox-group  v-model="checkedNames" v-for="lb in prodList" :key="lb">
        <el-checkbox class='ech' :label=lb></el-checkbox>
      </el-checkbox-group>
    </div>

    <el-button type="primary" @click="findSetups">Find Setups</el-button>
    <p>{{ setupsCount }} Setup(s) was founded:</p>
    <div v-for="setup in cfg" :key="setup">{{ setup }} <br /></div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
.find {
  margin-left: 40px;
}
.ech {
  margin-bottom: 10px;
  font-weight: 700;
}
.input {
  font-weight: 600;
  font-size: 1.1em;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tag: "",
      build: "",
      cfg: {},
      bt: {},
      checkedNames: ["CFW", "EFD.LAB", "EFD.NX", "EFD.PRO", "EFD.SE", "EFD.V5"],
      prodList: ["CFW", "EFD.LAB", "EFD.NX", "EFD.PRO", "EFD.SE", "EFD.V5"],
      setupsCount: 0,
      checkList: ["selected and disabled", "Option A"],
    };
  },
  methods: {
    buildMake: function() {
      // const aa = this.tag.split('-')[0];
      this.build = "";
      this.tag = this.tag.replace("git--", "");
      this.build = this.tag.match(/\.(\d\d\d\d)_/)[1];
      if (this.build) {
        this.build = this.build;
      } else {
        this.build = "";
      }
    },
    findSetups: function() {
      const path = "http://127.0.0.1:5000/api/findsetups";
      this.bt.build = this.build;
      this.bt.tag = this.tag;
      this.bt.products = this.checkedNames;
      axios
        .post(path, this.bt)
        .then(res => {
          this.cfg = res.data;
          this.setupsCount = this.cfg.length;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  }
};
</script>
