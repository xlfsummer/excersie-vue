export default {
    props:{ },
    template: `
        <button
            v-bind="$attrs"
            v-on="$listeners"
            @mousedown="clickEffect"
            style="
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
                width: 120px;
                height: 50px;
                color: #fff;
                background: #cc3;
                border: none;
            ">
        <div style="
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 2;
        ">
        <slot/>
        </div></button>
    `,
    methods:{
        /** @param {MouseEvent} $event */
        clickEffect($event){
            let button = $event.currentTarget;
            let pos = this.getMouseRelativePos($event);
            let span = this.createAnimateElement(button, pos);
            button.appendChild(span);
        },
        getMouseRelativePos($event){
            /** @type {HTMLButtonElement} */
            let button = $event.currentTarget;
            let buttonRect = button.getBoundingClientRect();
            return {
                x: $event.clientX - buttonRect.x,
                y: $event.clientY - buttonRect.y,
                w: buttonRect.width,
                h: buttonRect.height
            };
        },
        /** 
         * @param {HTMLButtonElement} button
         * @param {{x: number, y: number, w: number, h: number}} pos
        */
        createAnimateElement(button, pos){
            let circleDiameter = 2 * Math.max(pos.w, pos.h)
            let span = document.createElement("span");
            let spanCenterX = pos.x;
            let spanCenterY = pos.y;
            let s = span.style;
            
            s.position = "absolute";
            s.zIndex = "1";
            s.display = "block";
            s.width = circleDiameter + "px";
            s.left = spanCenterX - circleDiameter/2 + "px";
            s.height = circleDiameter + "px";
            s.top = spanCenterY - circleDiameter/2 + "px";
            s.borderRadius = "100%";
            s.transform = "scale(0)";
            s.opacity = "0.15";
            s.background = "#000"
            s.transition = "all 1s";

            setTimeout(()=>{
                s.transform = "scale(1)";
                s.opacity = "0";
            })

            // 加锁, transition 的各属性都会触发一次 transitionend
            let transitionListernCalled = false;
            span.addEventListener("transitionend", ev=>{
                if(!transitionListernCalled){
                    transitionListernCalled = true;
                    span.parentNode.removeChild(span);
                }
            });

            return span;
        }
    }
}