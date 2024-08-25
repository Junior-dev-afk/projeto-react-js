class Notify {

    constructor(){
        
        this.color_error = "red"
        this.color_sucess = "green"
        this.color_info = "blue"
        this.container = false
        this.quantidade = 0
        this.tempo_ms = 7000

    }

    #iniciarTemporizador (noty) {
        setTimeout (()=>{

            let opacity = 1
            
            const interval = setInterval(()=>{

                opacity = opacity - 0.01

                noty.style.opacity = opacity

                if ( opacity <= 0 ) {
                    noty.remove()
                    clearInterval(interval)
                }

            }, 10)
        }, this.tempo_ms)
    }

    #createNotify (color, msg) {

        if (this.container === false) {
            this.container = document.createElement("div")

            this.container.style.cssText = `
                width:400px;
                min-width:300px;
                position:fixed;
                top:20px;
                right:20px;
                display:flex;
                flex-direction:column;
                justify-content:start;
                align-items: end;
                opacity:1;
            `

            document.getElementById("container").appendChild(this.container)
        }

        const div = document.createElement("div")

        div.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: start;
            word-break: break-all;
            padding: 20px;
            color: white;
            background-color: ${color};
            border-radius:10px;
            margin-block:10px;
        `

        div.innerHTML = msg

        this.container.appendChild(div)

        this.quantidade ++

        this.#iniciarTemporizador(div)

    }

    error (msg) {
        const color = this.color_error
        this.#createNotify(color, msg)
    }

    sucess (msg) {
        const color = this.color_sucess
        this.#createNotify(color, msg)
    }

    info (msg) {
        const color = this.color_info
        this.#createNotify(color, msg)
    }

}

const noty = new Notify()

export default noty