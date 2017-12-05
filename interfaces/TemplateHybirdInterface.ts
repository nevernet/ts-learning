import {TemplateInterface} from "./TemplateInterface";
import {UserInterface} from "./UserInterface";
import {TemplateFunInterface} from "./TemplateFunInterface";
/**
 * Created by qinxin on 16/9/13.
 */

export interface TemplateHybirdInterface extends TemplateInterface  {
    aFun: TemplateFunInterface;
    list: UserInterface[];
}
