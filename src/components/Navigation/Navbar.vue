<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item">
                <router-link :to="item.to">
                    <span>
                        {{ item.text }}
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import useNavMain from '@/use/useNavMain'

    export default {
        name: 'NamNavBar',
        setup () {
            console.log(useNavMain().items)
            return {
                ...useNavMain()
            }
        }
    }
</script>

<style lang="scss">
//
</style>
