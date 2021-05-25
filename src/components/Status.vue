<template>
  <span data-testid="status-label" :class="label.color">
    {{ label.text }}
  </span>
</template>

<script>
import { STATUS } from "@/constants";

export default {
  name: "Status",
  props: ["status"],
  computed: {
    label() {
      const color = `Status__${this.status}`;

      if (this.status === STATUS.ERROR) {
        return {
          text: "Finished with errors",
          color,
        };
      } else if (this.status === STATUS.WARNING) {
        return {
          text: "Finished with warnings",
          color,
        };
      } else if (this.status === STATUS.SUCCESS) {
        return {
          text: "Finished",
          color,
        };
      }

      return {
        text: "Invalid Status",
        color: null,
      };
    },
  },
};
</script>

<style lang="css" scoped>
.Status__error {
  color: red;
}
.Status__warning {
  color: orange;
}
.Status__success {
  color: green;
}
</style>
