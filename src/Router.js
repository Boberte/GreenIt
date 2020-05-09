import VueRouter from 'vue-router';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';
import Welcome from './components/Welcome.vue';
import GreenScreenTool from './components/GreenScreenTool.vue';

export default new VueRouter({
    routes: [
        {
            path: '/About',
            component: About
        },
        {
            path: '/Gallery',
            component: Gallery
        },
        {
            path: '/GreenScreenTool',
            component: GreenScreenTool
        },
        {
            path: '/',
            component: Welcome
        }
    ]
})