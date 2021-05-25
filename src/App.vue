<template>
  <div id="app">
    <Status :status="status" />
    <button @click="updateStatus">Update Status</button>
  </div>
</template>

<script>
import Status from "@/components/Status";
import { generateRandomStatus } from "@/reducers";

export default {
  name: "App",
  components: {
    Status,
  },
  data() {
    return {
      status: null,
    };
  },
  created() {
    this.updateStatus;
  },
  methods: {
    updateStatus() {
      this.status = generateRandomStatus();
    },
  },
};
</script>
