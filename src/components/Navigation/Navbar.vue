<template>
    <nav class="cofi-nav-bar">
        <div class="cofi-nav-bar__inner">
            <div class="cofi-nav-bar__box">
                <ul class="cofi-nav-bar-list">
                    <li v-for="item in items" :key="item">
                        <router-link :to="item.to">
                            <span>
                                {{ item.text }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import useNavMain from '@/use/useNavMain'

    export default {
        name: 'CofiNavBar',
        setup () {
            return {
                ...useNavMain()
            }
        }
    }
</script>

<style lang="scss">
    .cofi-nav-bar {
        align-self: end;
        display: flex;
        justify-content: flex-end;

        &__inner {
            overflow: hidden;
        }

        &__box {
            display: flex;
            grid-gap: em(8px);
            overflow-x: auto;
            padding-bottom: em(40px);
            margin-bottom: em(-40px);
        }

        &__list {
        display: grid;
        grid-template-columns: auto;
        grid-auto-flow: column;
        overflow: hidden;
        border-radius: var(--radius);
        flex-shrink: 0;
        grid-gap: em(2px);

            &--dropdown {
                grid-auto-flow: row;
                transform: rotateX(-75deg);
                transition: transform 0.3s;
                transform-origin: 0 0;
                overflow: hidden;
            }

            &--active {
                transform: rotateX(0);
            }
        }

        &__dropdown {
        opacity: 0;
        transform-origin: 0 0;
        pointer-events: none;
        transition: opacity 0.3s;
        position: absolute;
        z-index: var(--z-index-pawn);
        padding-top: em(8px);
        padding-bottom: em(8px);

            &--active {
                opacity: 1;
                pointer-events: auto;
            }
        }
    }
</style>
