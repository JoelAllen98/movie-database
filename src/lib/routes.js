import { Boot } from '../pages/Boot'
import { Home } from '../pages/Home'
import { About } from '../pages/About'



export default {
    root: 'home',
    routes: [
        { 
            path: 'home', 
            component : Home,
        },
        {
            path: 'about',
            component: About,
        },
        {
            path: 'about/:message',
            component: About,
        }
    ],
}