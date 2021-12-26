<template>
  <div id="app">
<!--         <div class="navbar">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">Buckle</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav> -->
                        <router-link to="/">Buckle</router-link> |
                        <router-link to="/about">Anúncios</router-link>
                        <router-view/>


                    <!-- Right aligned nav items -->

<!--                         <b-nav-item-dropdown right> -->
                            <!-- Using 'button-content' slot -->
<!--                             <template #button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
