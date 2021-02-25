<template>
    <div class="nam-layout-default">
        <div class="nam-layout-default__content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .nam-layout-default {
    &__content {
      padding-top: em(40px);
      padding-bottom: em(104px);

      @include breakpoint($bp) {
        padding-left: em(88px);
      }
    }
  }
</style>
