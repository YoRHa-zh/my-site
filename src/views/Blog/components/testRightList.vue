<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from './RightList';
export default {
    components:{RightList},
    data(){
        return {
            list:[
                {name:1,isSelected:false},
                {name:2,isSelected:false},
                {name:3,isSelected:false,children:[{name:'3-1',isSelected:false},{name:'3-2',isSelected:true},{name:'3-3',isSelected:false,children:[{name:'3-3-1',isSelected:false},{name:'3-3-2',isSelected:false}]}]},
                {name:4,isSelected:false},
            ]
        }
    },
    methods:{
        handleSelect(e){
            console.log(e)
        }
    }
}
</script>

<style>

</style>