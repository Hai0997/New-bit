<template>
  <div class="home">
    <NewBit/>
    <section>
      <div class="container">
        <div class="row">

          <div class="col-md-12 col-lg-8">
            <Recent/><!-- col-md-9 -->
          </div>
          <div class="d-none d-md-block d-lg-none col-md-3"></div>
          <div class="col-md-6 col-lg-4">
            <Sidebar/>
          </div>

        </div><!-- row -->
      </div><!-- container -->
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NewBit from "../components/content/New-bit";
import Recent from "../components/content/Recent";
import Sidebar from "../components/content/Sidebar";

export default {
  name: 'home',
  components: {
      Sidebar,
      Recent,
      NewBit,
  }
}
</script>
