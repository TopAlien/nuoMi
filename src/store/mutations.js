// this.$store.commit() 触发
export const setIsAuthenticated = (state, data)=>{
  state.isAuthenticated = data;
}

export const setUser = (state, data)=>{
  state.user = data;
}