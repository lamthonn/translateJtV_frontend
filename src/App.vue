<template>
  <nav
    class="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark"
  >
    <div class="container">
      <h3>DICTIONARY JTV</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/"><strong>Trang Chủ</strong></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/"><strong>Báo Cáo</strong></router-link>
          </li>
          <button type="button" class="btn btn-dark ms-3">Get Started</button>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style>
/* Color of the navbar BEFORE scroll */
.navbar-scroll {
  background-color: #ffc017;
}

/* Color of the navbar AFTER scroll */
.navbar-scrolled {
  background-color: #fff;
}

.router-link-exact-active {
  margin: 0 1rem;
  text-decoration: none;
  color: black;
}

.nav-item {
  display: flex;
  align-items: center;
}
</style>
