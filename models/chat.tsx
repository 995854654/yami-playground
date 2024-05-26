import { createModel } from "@rematch/core";
import type { RootModel } from '@/models'

type ChatStateType = {
    question: string,
    prompt: string,
    count: number
}



export const chatModel = createModel<RootModel>()({
	state: {
        question: "",
        prompt: "",
        count: 0
    } as ChatStateType,
	reducers: {
		incrementForCount(state:ChatStateType, payload: number) : ChatStateType{
            state.count = state.count + payload
			return state
		},
	},
	effects: (dispatch) => ({
		incrementForCountAsync(payload: number, state) {
			dispatch.count.increment(payload)
		},
	}),
})