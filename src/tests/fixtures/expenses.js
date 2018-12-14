import moment from 'moment'

const expenses=[
    {
        id: '1',
        description:'gum',
        notes: '',
        amount: 195,
        createdAt: 0
    },{
        id: '2',
        description: 'rent',
        notes: '',
        amount: 1095,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: '3',
        description: 'credit card',
        notes: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses