import {TemplateInterface} from "../interfaces/TemplateInterface";
/**
 * Created by qinxin on 16/9/13.
 */

export abstract class AbstractTemplate implements TemplateInterface {
    TemplateWidth: string;

    abstract getBody(): string;

    setVariable(name: string, value: any): void {
    }

    getHtml(template: string): string {
        return null;
    }


}
