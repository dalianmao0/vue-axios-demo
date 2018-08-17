<template>
  <div class="home">
    <ul>
      <li @click="publish()">发表内容</li>
      <li>登陆 | 注册</li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    publish: function () {
      console.log('1111')
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('/static/img/bg.jpg') no-repeat;
  background-size: auto 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}
li:nth-child(1) {
  margin-right: 2rem;
}
</style>
