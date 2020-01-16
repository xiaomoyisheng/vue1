<template>
  <div>
      用户
      {{ $route.params.name }}
      <!-- http://localhost:8081/#/user/%E6%9D%8E%E8%8A%B1%E8%8A%B1?age=20  类似查询这种-->
    <!--  我今年{{$route.query.age}}岁 -->
    <router-link to="more" append>更多</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
