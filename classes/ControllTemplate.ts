import {Template} from "./Template";
import {ControllTemplateInterface} from "../interfaces/ControllTemplateInterface";
/**
 * Created by qinxin on 16/9/13.
 */

export class ControllTemplate extends Template implements ControllTemplateInterface {
    constructor() {
        super();
        console.log("constructor from ControllTemplate");
    }

    getName(): string {
        return "getName from controller Template\n";
    }

}
