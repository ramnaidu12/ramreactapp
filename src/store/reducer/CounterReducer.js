const initialState = {
    count:0,
    istouch:""
}

const CounterRedecer2 = (state=initialState,action)=>{
    if(action.type === 'Barcelona'){
        return{...state,count:state.count+1 ,istouch:state.istouch="Barcelona", }
        }
        if(action.type === 'Xavi'){
            return{...state,count:state.count+1 ,istouch:state.istouch="Xavi", }
            }
            if(action.type === 'Robin'){
                return{...state,count:state.count+1 ,istouch:state.istouch="Robin", }
                }
                if(action.type === 'Andrea'){
                    return{...state,count:state.count+1 ,istouch:state.istouch="Andrea", }
                    }
                    if(action.type === 'Neymer'){
                        return{...state,count:state.count+1 ,istouch:state.istouch="Neymer", }
                        }
                        if(action.type === 'Messi'){
                            return{...state,count:state.count+1 ,istouch:state.istouch="Messi", }
                            }
                            if(action.type === 'vilan'){
                                return{...state,count:state.count+1 ,istouch:state.istouch="vilan", }
                                }
                                if(action.type === 'vincent'){
                                    return{...state,count:state.count+1 ,istouch:state.istouch="vincent", }
                                    }
   
   
    return state
}
export default CounterRedecer2