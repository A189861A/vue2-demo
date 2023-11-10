<template>
    <div class="container">
        <div class="header">
            <slot name="header">header</slot>
        </div>
        <div class="body">
            <div class="left">
                <slot name="nav">
                    <nav class="nav-left">
                        <router-link :to="item.path" v-for="(item, i) in routes" :key="i">{{ item.name }}</router-link>
                    </nav>
                </slot>
            </div>
            <div class="main">
                <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
                <slot></slot>
            </div>
        </div>
        <div class="footer">
            <slot name="footer">footer</slot>
        </div>
    </div>
</template>
<script>
import {routes} from '../router/index'
export default {
    name: "baseLayout",
    data() {
        return {
            routes
        }
    }
}
</script>
<style scoped>
.container{
    height: 100%;
    width: 100%;
}
.header{
    height: 5vh;
    background: rgba(255, 0, 0, 0.3);
}
.body{
    display: flex;
    height: 90vh;
}
.footer{
    height: 5vh;
    background: rgba(255, 125, 0, 0.3);
}
.left{
    width: 20vw;
    background: rgba(0, 125, 0, 0.3);
}
.main{
    width: 80vw;
    background: rgba(125, 125, 125, 0.3);
}
</style>