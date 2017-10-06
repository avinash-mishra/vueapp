<template>
<div class="panel panel-default">
  <div class="panel-heading">
    {{title}}
  </div>
  <br>
  <div class="panel-body">
    <div class="vcdata" style="width: 75%; margin-left:12%">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="vc_number" label="VC#" width="350"> </el-table-column>
        <el-table-column prop="vc_name" label="VC Name" width="390"> </el-table-column>
        <el-table-column prop="vc_gener" label="Gener"> </el-table-column>
      </el-table>
    </div>

    <br>
    <div class="">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content" id="wrapper">
            <el-button class="button" type="info">Setting Activity & Component</el-button>
            <!-- <input type="button" name="" value=""> -->
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content" id="wrapper">
            <router-link :to="{ name: 'setting_keywords', params: {id: 1} }" class=" button btn btn-primary">Setting Keywords</router-link>
            <!-- <el-button class="button" type="info">Setting Keywords</el-button> -->
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content" id="wrapper">
            <router-link :to="{ name: 'keyword_histroy', params: {id: 1} }" class=" button btn btn-primary">History</router-link>
            <!-- <el-button class="button" type="info">History</el-button> -->
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content" id="wrapper">
            <router-link :to="{ name: 'keyword_search', params: {id: 1} }" class=" button btn btn-primary">Search Keywords</router-link>
            <!-- <el-button class="button" type="info">Search Keywords</el-button> -->
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="">
      <el-form ref="form" :model="form" label-width="120px">
        <div class="">
          <div id="main" class="bg-purple" :span="25">
            <div class="">
              <h4>Main Activity name</h4>
              <el-row :gutter="15">
                <el-col :span="18">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="Please input" v-model="form.input1"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-button type="primary">Update</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="">
              <el-row :gutter="12" v-for="(row, key) in form.rowsMain" :key="key">
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <el-input placeholder="Please input Activity name" v-model="row.value"></el-input>
                  </div>
                  <div class="grid-content bg-color" style="margin-left:30px">
                    <el-row :gutter="10" v-for="(column, index) in rowsMainComponent" :key="index">
                      <el-col :span="19">
                        <div class="grid-content">
                          <el-input placeholder="Please input component name" v-model="form.inputMainComponent[index].text"></el-input>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <div class="grid-content">
                          <el-button icon="delete" v-on:click="removeRowMainComponent(index)"></el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="2">
                        <div class="grid-content">
                          <el-button type="info" v-on:click="addRowMainComponent()">+</el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content">
                    <el-button icon="delete" v-on:click="removeRowMain(key)"></el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="2">
                  <div class="grid-content">
                    <el-button type="info" v-on:click="addRowMain()">++</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div id="support" class="bg-purple">
            <div class="">
              <h4>Support Activity name</h4>
              <el-row :gutter="15">
                <el-col :span="18">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="Please input" v-model="form.input2"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-button type="primary">Update</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="">
              <el-row :gutter="12" v-for="(row, key) in form.rowsSupport" :key="key">
                <el-col :span="18">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="Please input component name" v-model="row.value"></el-input>
                  </div>
                  <div class="grid-content bg-color" style="margin-left:30px">
                    <el-row :gutter="10" v-for="(column, index) in rowsSupportComponent" :key="index">
                      <el-col :span="19">
                        <div class="grid-content">
                          <el-input placeholder="Please input component name" v-model="form.inputSupportComponent[index].text"></el-input>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <div class="grid-content">
                          <el-button icon="delete" v-on:click="removeRowSupportComponent(index)"></el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="2">
                        <div class="grid-content">
                          <el-button type="info" v-on:click="addRowSupportComponent()">+</el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div class="grid-content">
                    <el-button icon="delete" v-on:click="removeRowSupport(key)"></el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="2">
                  <div class="grid-content">
                    <el-button type="info" v-on:click="addRowSupport()">++</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-form>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Setting Activity & Component",
      rows: [],
      tableData: [{
        vc_number: 'ja-02',
        vc_name: 'AAA hotel group',
        vc_gener: 'Hotel'
      }],

      rowsMainComponent: [],
      rowsSupportComponent: [],

      form: {
        input1: '',
        input2: '',
        rowsMain: [],
        rowsSupport: [],
        inputMain: [],
        inputMainComponent: [],
        inputSupport: [],
        inputSupportComponent: []
      },
    }
  },
  methods: {
    addRowMain() {
      this.form.rowsMain.push({
          key: '',
          value: ''
      });
    },
    addRowSupport() {
      this.form.rowsSupport.push({
          key: '',
          value: ''
      });
    },
    addRowMainComponent(index) {
      this.rowsMainComponent.push("");
      this.form.inputMainComponent.push({
        text: ""
      });
    },
    addRowSupportComponent() {
      this.rowsSupportComponent.push("");
      this.form.inputSupportComponent.push({
        text: ""
      });
    },
    removeRowMain(key) {
      this.form.rowsMain.splice(key, 1);
    },
    removeRowSupport(key) {
      this.form.rowsSupport.splice(key, 1);
    },
    removeRowMainComponent(index) {
      this.rowsMainComponent.splice(index, 1);
    },
    removeRowSupportComponent(index) {
      this.rowsSupportComponent.splice(index, 1);
    }
  }
}
</script>

<style lang="css">
@import url("//unpkg.com/element-ui@1.4.6/lib/theme-default/index.css");
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-color {
      background-color:#999999
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .button {
      width: 220px;
  }
  #main {
      float: left;
      width: 49%;
  }
  #support {
      float: right;
      width: 49%;
  }

</style>
