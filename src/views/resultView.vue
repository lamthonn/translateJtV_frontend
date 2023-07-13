<template>
  <div class="container">
    <div class="listResult">
      <ul>
        <li class="result">
          <img
            src="../assets/image_illustration/heo2.jpg"
            alt=""
            class="illustration"
          />
          <div class="description">
            <div class="japanese">
              <i class="fa-solid fa-headphones"></i>
              <p>どのバラにもトゲはありません！</p>
            </div>
            <div class="vnmese">
              <p>Hoa Hồng nào chả có gai!</p>
            </div>
            <div class="select">
              <div class="view-full">
                <router-link to="/report" type="button"
                  >Xem toàn bộ ngữ cảnh<i class="fa-solid fa-expand"></i
                ></router-link>
              </div>
              <div class="comment">
                <router-link to="/report" type="button"
                  >Thảo luận<i class="fa-solid fa-comments"></i
                ></router-link>
              </div>
            </div>
            <div class="ht-rp">
              <div class="hagtag">
                <p class="ht-style">#dulich</p>
                <p class="ht-topic">#vanviet</p>
              </div>
              <div class="report">
                <router-link
                  to="/report"
                  type="button"
                  class="btn btn-dark ms-3"
                  >Báo cáo<i class="fa-solid fa-comments"></i
                ></router-link>
              </div>
            </div>
          </div>
        </li>
        <hr />
        <li class="result">
          <img
            src="../assets/image_illustration/heo2.jpg"
            alt=""
            class="illustration"
          />
          <div class="description">
            <div class="japanese">
              <i class="fa-solid fa-headphones"></i>
              <p>どのバラにもトゲはありません！</p>
            </div>
            <div class="vnmese">
              <p>Hoa Hồng nào chả có gai!</p>
            </div>
            <div class="select">
              <div class="view-full">
                <router-link to="/report" type="button"
                  >Xem toàn bộ ngữ cảnh<i class="fa-solid fa-expand"></i
                ></router-link>
              </div>
              <div class="comment">
                <router-link to="/report" type="button"
                  >Thảo luận<i class="fa-solid fa-comments"></i
                ></router-link>
              </div>
            </div>
            <div class="ht-rp">
              <div class="hagtag">
                <p class="ht-style">#dulich</p>
                <p class="ht-topic">#vanviet</p>
              </div>
              <div class="report">
                <router-link
                  to="/report"
                  type="button"
                  class="btn btn-dark ms-3"
                  >Báo cáo<i class="fa-solid fa-comments"></i
                ></router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultView",
};
</script>

<style>
.result {
  display: flex;
  justify-content: space-between;
}

.result .illustration {
  width: 35%;
  height: 250px;
}

.result .description {
  width: 63%;
}

.result .description .japanese {
  display: flex;
  font-size: 23px;
}

.description .japanese p {
  font-weight: 600;
  padding-left: 20px;
}

.result .description .vnmese {
  font-size: 18px;
}

.result .description .select {
  display: flex;
}

.description .select a {
  text-decoration: none;
  color: #919191;
  border: 1px solid;
  border-radius: 2px;
  padding: 5px 30px 5px 35px;
}

.select a i {
  padding-left: 5px;
}

.select .view-full {
  margin-right: 20px;
}

.result .description .ht-rp {
  display: flex;
}

.description .ht-rp .hagtag {
  display: flex;
}
</style>
