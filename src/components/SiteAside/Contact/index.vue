<template>
  <div class="contact-container">
    <div class="wrap">
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </div>
    <div class="wrap">
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{data.mail}}</span>
      </a>
    </div>
    <div class="wrap">
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode"/>
      </div>
    </div>
    <div class="wrap">
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop"><img :src="data.weixinQrCode" /></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Icon from "@/components/Icon";
// import {serve} from '@/config.js'
export default {
  components: {
    Icon,
  },
  computed:{
    ...mapState('setting',['loading','data']),
    // qqQrCodeUrl(){
    //   return serve + this.data.qqQrCode;
    // },
    //  weixinQrCodeUrl(){
    //   return serve + this.data.weixinQrCode;
    // }
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  background-color: @dark;
  text-align: left;
  .wrap {
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
      a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: @gray;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    &:hover{
      color: @primary;
    }
  }
  .icon{
    padding-right: 10px;
    font-size: 26px;
  }
    .pop {
      padding-left: 10px;
    position: absolute;
    left: 0;
    bottom: 30px;
    transform: scaleY(0);
    border-radius: 5px;
    transform-origin: center bottom;
    transition: .3s;
    img {
      width: 150px;
      height: 150px;
      }
 &::after {
        content: "";
        position: absolute;
        display: block;
        width: 8px;
        height: 8px;
        left: 50%;
        bottom: 2px;
        background-color: rgb(235,237,245);
        transform:  rotate(45deg);
    }
      
  }
  }
}
</style>