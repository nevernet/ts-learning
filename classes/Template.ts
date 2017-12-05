import {AbstractTemplate} from "./AbstractTemplate";

/**
 * Created by qinxin on 16/9/13.
 */

export class Template extends AbstractTemplate {

    private static varStatic: any[];


    constructor() {
        super();
        Template.varStatic = [1, "aa"];
        console.log("construct from Template");
    }

    getBody(): string {
        return "body from Template";
    }

    testThis(): void {
        console.log("body from testThis:", this.getBody());
    }

    static testStatic(): void {
        console.log("static method");

        //at here "this" is static, because the method is static
        console.log("from this:", this.varStatic);
    }
}
