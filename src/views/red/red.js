import TrafficLights from "../../components/trafficLights/TrafficLights.vue"

export default {
    name: "Red",
    components: {
        TrafficLights
    },
    data() {
        return {
            time: 10,
            isTrue: true
        }
    },
    methods: {
        routing() {
            setTimeout(() => this.$router.push({path: "/yellow"}), this.time * 1000) // Функция перехода
        },
        timer() {
            this.a = setInterval(() => this.time--, 1000) // Функция таймера
        },
        blinking() {
            setTimeout(() => {setInterval(() => this.isTrue = !this.isTrue, 500)}, (this.time - 3) * 1000) // Функция мигания сигнала светофора
        },
        setSessionTime() {
            sessionStorage.timeRed = this.time // Функция для того, чтобы задать время в сессионное хранилище
        },
        setTime() {
            this.time = +sessionStorage.timeRed // Функция для того, чтобы извлечь время из сессионного хранилища
        }
    },
    watch: {
        time() {
            this.setSessionTime(); // Отслеживание времени и обновление сессионного хранилища
        }
    },
    mounted() {
        if (sessionStorage.timeRed) { // Проверка на наличие времени в сессионном хранилище
            this.setTime()
        }
        this.routing()
        this.timer()
        this.blinking()
    },
    beforeUnmount() {
        clearInterval(this.a)
        sessionStorage.timeRed = 10
        sessionStorage.to = "/green" // Определение пути, куда будет произведен роутинг после желтого
    }
}