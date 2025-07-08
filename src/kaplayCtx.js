import kaplay from "kaplay";

 const k=kaplay({
    height:2020,
    width:1580,
    letterbox:true,
    background:[0, 0, 0],
    global:false,
    touchToMouse:true,
    buttons:{
        jump:{
            keyboard:["ArrowUp", "Space"],
            mouse:["left", "right"],
            gamepad:[0, 1],

        },
     
    },
       debugKey:"d",
    debug:false,

})
export default k;

