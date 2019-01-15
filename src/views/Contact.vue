<template>
    <div class="contact">
        <section class="ptb-0">
            <div class="mb-30 brdr-ash-1 opacty-5"></div>
            <div class="container">
                <a class="mt-10" href="index.html"><i class="mr-5 ion-ios-home"></i>Home<i class="mlr-10 ion-chevron-right"></i></a>
                <a class="mt-10 color-ash" href="04_FAQs.html">CONTACT</a>
            </div><!-- container -->
        </section>
        <div class="container">
            <div class="row ctact">
                <div class="col-sm-12 col-md-8">
                    <Messenge/>
                </div>
                <div class="col-sm-12 col-md-4">
                     <Infor/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Messenge from "../components/contact/Messenge";
    import Infor from "../components/contact/Infor";
    export default {
        name: "Contact",
        components: {Infor, Messenge}
    }
</script>

<style scoped>

</style>
