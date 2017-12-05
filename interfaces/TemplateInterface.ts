/**
 * Created by qinxin on 16/9/9.
 */

export const TemplateWidth = 100;

export interface TemplateInterface {

    TemplateWidth: string;

    setVariable(name: string, value: any): void;
    getHtml(template: string): string;
}
