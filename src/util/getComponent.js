import Vue from 'vue'
/**
 * 获取组件渲染的根元素
 */
export default function(comp,props){
    const vm = new Vue({
        render:(h)=>h(comp,{props})
    }).$mount()
    return vm.$el;
}
