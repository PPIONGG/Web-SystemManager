import { ReqApiGetTaskCutting, ReqPooDetail } from "./registerResponse";

export interface register {
    apiGetTaskCutting : ReqApiGetTaskCutting | null
    barCodePoodetail : ReqPooDetail[]
}