import { Models } from "@rematch/core"
import { chatModel } from "./chat"
import { authenModel } from "./auth"
import {notificationModel} from "./notification"

export interface RootModel extends Models<RootModel>{
    chatModel: typeof chatModel
    authenModel: typeof authenModel,
    notificationModel: typeof notificationModel,
}


export const models: RootModel = {
    chatModel,
    authenModel,
    notificationModel,
}