import { useContext, } from "react"
import { productContext } from "../App"
// Custom Hook
const useSetting = () => {
    // UseConext Of Product Array
    let product: any = useContext(productContext);
    // Fucntion For Without Tag
    function settingWithoutTag(name: string, desc: string, price: string, tag: string, stock: string) {
        let obj = {
            name: name,
            desc: desc,
            price: price,
            tag: tag,
            stock: stock
        }
        product.setProduct([...product.product, obj])
    }
    // Function For Wit Tag
    function settingWithTag(name: string, desc: string, price: string, tag: string, stock: string) {
        let obj = {
            name: name + " " + tag,
            desc: desc,
            price: price,
            tag: tag,
            stock: stock
        }
        product.setProduct([...product.product, obj])
    }
    // Export Both Method
    return { settingWithoutTag, settingWithTag };
}
export default useSetting