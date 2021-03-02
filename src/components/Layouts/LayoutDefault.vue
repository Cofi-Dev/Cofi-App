<template>
    <div class="cofy-layout-default">
        <div class="cofy-layout-default__content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .cofy-layout-default {
    &__content {
      padding-top: em(40px);
      padding-bottom: em(104px);

      @include breakpoint($bp) {
        padding-left: em(88px);
      }
    }
  }
</style>
