<template>
    <v-app>
        <component :is="layout">
            <router-view />
        </component>
    </v-app>
</template>


<script>
const defaultLayout = 'default'
    export default {
        name: 'App',
        metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Karim Glass',
        // all titles will be injected into this template
        titleTemplate: '%s | Glass and aluminum'
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || defaultLayout) + '-layout'
            }
        },

    }
</script>
