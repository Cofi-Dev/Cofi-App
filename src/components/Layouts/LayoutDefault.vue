<template>
    <div class="cofi-layout-default">
        <CofiNavBar />
        <div class="cofi-layout-default__content">
            <slot />
        </div>
    </div>
</template>

<script>
    import CofiNavBar from '@/components/Navigation/Navbar'

    export default {
        name: 'CofiLayoutDefault',
        components: {
            CofiNavBar
        }
    }
</script>

<style lang="scss">
  .cofi-layout-default {
    &__content {
      padding-top: em(40px);
      padding-bottom: em(104px);

      @include breakpoint($bp) {
        padding-left: em(88px);
      }
    }
  }
</style>
