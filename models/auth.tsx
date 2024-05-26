import { createModel } from "@rematch/core";
import type { RootModel } from '@/models'
import {CustomStatus} from "@/utils/customStatus"
import { getAPIRequest } from "@/utils/httpRequest"
import api from "@/config/api"
import { APIResponse } from "@/models/base/response";


type AuthenticationState = {
    isAuthenticated: boolean
}

export const authenModel = createModel<RootModel>()({
    state:{
        isAuthenticated: false
    } as AuthenticationState,
    reducers: {
      changeAuthenticatedStatus: (state:AuthenticationState,payload:boolean) => {
        return {
            isAuthenticated: payload
        }
      }
    },
    effects: (dispatch) => ({
        async verify_authen_state(){
            let token = sessionStorage.getItem("token")
            let token_type = sessionStorage.getItem("token_type")
            let response:APIResponse = await getAPIRequest(api.refresh_token, {
                "Authorization": `${token_type} ${token}`
            })

            if (response.success === false && 
                (response.code === CustomStatus.AUTH_1001_LOGIN_EXPIRED || response.code === CustomStatus.HTTP_401_UHTTP_401_UNAUTHORIZED)){
                dispatch.notificationModel.changeState({notifyType:"error", message: response.msg})
                dispatch.authenModel.changeAuthenticatedStatus(false)
            }
        }
    })
})