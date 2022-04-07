import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com dispositivo fisico: IP da máquina
 * Android com Emulador : comonando no shell - adb reverse tpc:"porta exp - 3333 " tpc: "igual o anterior"
 * Android com Emulador : 10.0.2.2 (Android Studio)
 * Android com Emulador : 10.0.3.2 (Genymotion)
 * Android com dispositivo físico: IP da máquina
 */