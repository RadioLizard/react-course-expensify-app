import {login, logout} from '../../actions/auth'

test('Should render correct login action', ()=>{
    const action=login(333)
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 333
    })
})

test('Should render correct logout action', ()=> {
    const action=logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
}) 