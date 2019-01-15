<template>
<div class="mes">

    <div class="">
        <h3><b>SEND US A MESSAGE</b></h3>
        <p class="mb-30 mr-100 mr-sm-0">We’d love to hear from you – please get in touch for comments, requests,
            advertising partnerships or job inquiries.</p>
        <form class="form-block form-bold form-mb-20 form-h-35 form-brdr-b-grey pr-50 pr-sm-0">
            <div class="row">

                <div class="col-sm-6">
                    <p class="color-ash">Full Name*</p>
                    <div class="pos-relative">
                        <input class="pr-20" type="text" value="Leonard">
                        <i class="abs-tbr lh-35 font-13 color-green ion-android-done"></i>
                    </div><!-- pos-relative -->
                </div><!-- col-sm-6 -->

                <div class="col-sm-6">
                    <p class="color-ash">Email*</p>
                    <div class="pos-relative">
                        <input class="pr-20" type="email">
                        <i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
                    </div><!-- pos-relative -->
                </div><!-- col-sm-6 -->

                <div class="col-sm-6">
                    <p class="color-ash">Your Phone*</p>
                    <div class="pos-relative">
                        <input class="pr-20" type="text">
                        <i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
                    </div><!-- pos-relative -->
                </div><!-- col-sm-6 -->

                <div class="col-sm-6">
                    <p class="color-ash">Company*</p>
                    <div class="pos-relative">
                        <input class="pr-20" type="text">
                        <i class="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
                    </div><!-- pos-relative -->
                </div><!-- col-sm-6 -->

                <div class="col-sm-12">
                    <div class="pos-relative pr-80">
                        <p class="color-ash">Message*</p>
                        <h4><b>Tell us about your question</b></h4>
                        <textarea class="mb-0"></textarea>
                        <button class="abs-br font-20 plr-15 btn-fill-primary" type="submit"><i class="ion-ios-paperplane"></i></button>
                    </div><!-- pos-relative -->
                </div><!-- col-sm-6 -->

            </div><!-- row -->
        </form>
    </div><!-- col-md-6 -->
</div>
</template>

<script>
    export default {
        name: "Messenge"
    }
</script>

<style scoped>

</style>
