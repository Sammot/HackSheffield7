"use strict"

class StagedConfig {
    /**
     * A manager for staged UIs
     * @param {element} element 
     * @param {CallableFunction} endCallback 
     */
    constructor(element, endCallback = () => {}) {
        this.element = element
        this.endCallback = endCallback

        this.stages = Array.from(this.element.children)
        // console.log(this.stages)
        this.stage = 0

        this.show()
    }

    /**
     * Goes to a specific UI level/stage
     * @param {number} stage 
     */
    goto(stage) {
        this.stage = stage
        this.show()
    }

    iterate() {
        this.stage++
        this.show()
    }

    show() {
        for (let i = 0; i < this.stages.length; i++) {
            this.stages[i].classList.add('hidden')

            if (i == this.stage) {
                this.stages[i].classList.remove("hidden")
            }
        }

        if (this.stage == this.stages.length) {
            this.endCallback()
        }
    }
}