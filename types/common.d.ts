export type Record<K extends keyof any, T> = {
    [P in K]: T;
};

export interface JSONObject {
    [key: string]: JSONObject | any;
}
