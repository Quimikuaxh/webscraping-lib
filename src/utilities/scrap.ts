import axios from 'axios';
import xpath from 'xpath-html';

class Scrap {
    static async getHTML(url: string){
        const response = await axios.get(url);
        if (response.status != 200){
            throw new Error(`Data could not be retrieved from url ${url}. ` + response.statusText);
        }
        return response.data;
    }

    static findElementByXpath(html: string, xpathSelector: string){
        return xpath.fromPageSource(html).findElement(xpathSelector);
    }

    static getAttribute(element, attributeName: string){
        const value = element.getAttribute(attributeName);
        if(value){
            return value;
        }
        else{
            return undefined
        }
    }
}
export default Scrap;

