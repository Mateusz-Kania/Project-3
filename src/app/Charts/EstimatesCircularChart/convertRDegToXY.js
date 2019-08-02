
export default function createXYfromRDeg(r,deg){
    return{
        x:r*Math.sin(deg*Math.PI / 180),
        y:r*Math.cos(deg*Math.PI / 180),
    }
}