<template>
<div class="test-container">
  <Contact :href="href" :value="value"/>

</div>
</template>

<script>
import Contact from './'
export default {
    components:{
        Contact,
    },
    data(){
        return {
            value:2933272753,
            href:'tencent://message/?Menu=yes&uin=2933272753&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45',
            // mailto:'mailto:277995998@qq.com',
            // mail:'277995998@qq.com'
        }
    }
}
</script>

<style>
.test-container
{
    padding-top: 200px;
    margin: 0 auto;
    width: 400px;
    height: 400px;
}
</style>