<template>
    <div >
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <!-- 失活的组件将会被缓存！ -->
      <keep-alive>
        <!-- 动态组件 -->
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </div>
</template>
<script>
import tabPosts from '@/components/tabPosts.vue';
import tabArchive from '@/components/tabArchive.vue';
export default {
    data() {
        return {
            currentTab: "Posts",
            tabs: ["Posts", "Archive"]
        }
    },
    computed: {
        currentTabComponent: function() {
        return "tab" + this.currentTab;
        }
    },
    components: {
        tabPosts,
        tabArchive
    },
    methods: {

    },
    mounted(){
     
    }   
}
</script>