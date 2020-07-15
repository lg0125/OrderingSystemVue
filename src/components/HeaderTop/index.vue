<template>
  <div>
    <slot name="left"></slot>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="javascript:;">{{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
</style>