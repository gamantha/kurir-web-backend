<template>
  <div>
    <div class="line"></div>
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router="router"
      >
      <el-menu-item index="proposal">
        <router-link to="proposal">Proposal List</router-link>
      </el-menu-item>
      <el-menu-item index="user">
        <router-link to="user">User List</router-link>
      </el-menu-item>
      <el-menu-item index="/">
        <router-link
            v-on:click.native="onClickLogout"
            to="/">
            Logout
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeIdx: 'proposal',
      router: true,
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIdx = key;
    },
    async onClickLogout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style>

</style>
