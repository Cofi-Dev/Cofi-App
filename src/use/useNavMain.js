import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useNavMain () {
    const store = useStore()
    const items = [
        { text: 'Plugins', to: { name: 'plugins' }, icon: 'none' },
        { text: 'Rankings', to: { name: 'rankings' }, icon: '' },
        { text: 'Settings', to: { name: 'settings' }, icon: '' },
        { text: 'Customize', to: { name: 'customize' }, icon: '' },
        { text: 'Premium', to: { name: 'premium' }, icon: '' }
    ]

    return {
        isOpen: computed(() => store.getters['nav/isOpen']),
        items
    }
}
