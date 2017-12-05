import {TemplateIndexableInterface} from "../interfaces/TemplateIndexableInterface";
import {UserInterface} from "../interfaces/UserInterface";
import {User} from "./User";
/**
 * Created by qinxin on 16/9/13.
 */


class TemplateIndexable implements TemplateIndexableInterface {
    [s: string]: UserInterface;
}

export class IndexableTest {

    test(): void {
        let ti = new TemplateIndexable();

        let aa : User = {name: "Holo", age: 30};
        ti["Holo"] = aa;
        ti["Digo"] = {name: "Digo", age: 30};

        console.log(typeof  ti["Holo"]);
        console.log(ti);
    }
}