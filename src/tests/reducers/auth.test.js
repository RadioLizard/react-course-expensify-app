import authReducer from '../../reducers/auth'

test('Should correctly login', ()=>{
    const action={
        type: 'LOGIN',
        uid: '333'
    }
    const state=authReducer({}, action)
    expect(state).toEqual({
        uid: '333'
    })
})

test('Should correctly logout', ()=>{
    const action={
        type: 'LOGOUT'
    }
    const state=authReducer({}, action)
    expect(state).toEqual({})
})