/*
 * @Author: yangyuan
 * @Date: 2020-06-02 15:12:39
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-06-02 15:59:59
 * @Description:
 */
type triggerType = "blur" | "change";

type dataType =
    | "date"
    | "array"
    | "string"
    | "number"
    | "boolean"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "object"
    | "enum"
    | "url"
    | "email"
    | "any";

type ruleItem = {
    required?: boolean;
    message?: string;
    trigger: triggerType;
    min?: number;
    max?: number;
    validator?: (rule, value: any, callback: Function) => void;
    type?: dataType;
};

export interface rules {
    [key: string]: Array<ruleItem>;
}
