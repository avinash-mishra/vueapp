<template>
    <div class="container-fluid" id="app">

    <div v-for="machine in machines">

      <div class="container-fluid machine-contents">

        <draggable v-model="machine.jobs">
          <transition-group name="list-complete">
            <div v-for="(job, index) in machine.jobs"
                 v-bind:key="job.jobNumber"
                 class="list-complete-item"
            >
              <div>
                {{ job.jobNumber }}
              </div>
              <div>
                <br>
                <button v-on:click="removeJob(machine.id, job.jobNumber, machine.jobs, index)">Remove</button>
              </div>
            </div>
          </transition-group>
        </draggable>

      </div>

    </div>

  </div>
</template>
<script>

import draggable from 'vuedraggable'

export default {
  name: "app",
  components: {
    draggable,
  },
  data: () => ({
      machines: [
      	{
        	name: "H1",
          id: 1,
          jobs: [
          	{
            	jobNumber: "14037-12"
            },
            {
            	jobNumber: "14038-13"
            },
            {
            	jobNumber: "14048-15"
            }
          ]
        }
    ],
    rows: [
        {message: ''},
        {message: ''}
    ]
  }),
  methods: {
  		removeJob: function(machineId, jobNumber, jobs, index) {
      	// Remove job from GUI
        jobs.splice(index, 1);
      }
    }
}
</script>
<style>
.list-complete-item {
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}

</style>
