const app = Vue.createApp({
    //template: "<h2>{{ persona }}</h2>",

    data() {
        return{
            persona: "Arsene",
            role: "MT-ALmighty",
            trait: "Mighty Gaze",
            s1: "Megidolaon"
        }
    }
});
app.mount("#app");