import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  const database= firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase, database, googleAuthProvider}

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses=[]
//         snapshot.forEach((child)=>{
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })

//     console.log(expenses)
//     })
  
    // database.ref('expenses').on('value', (snapshot)=>{
    //     const expenses=[]
    //     snapshot.forEach((child)=>{
    //         expenses.push({
    //             id: child.key,
    //             ...child.val()
    //         })
    //     })
    //     console.log(expenses)
    // })

    // database.ref('expenses').on('child_removed', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val())
    // })

    // database.ref('expenses').on('child_changed', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val())
    // })

    // database.ref('expenses').on('child_added', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val())
    // })

    // database.ref('expenses').push({
    //     description: 'reeses pieces',
    //   amount: 99,
    //   createdAt: 3000,
    //   notes: ''
    // })
    // database.ref('expenses/-LVPmZsc52mIqRzZ50Ss').update({
    //     description: 'dead',
    //     amount: 50000000000
    // })
//   database.ref('expenses').push({
//       description: 'reeses pieces',
//       amount: 99,
//       createdAt: 3000,
//       notes: ''
//   })
//   database.ref('expenses').push({
//     description: 'rent',
//     amount: 90000,
//     createdAt: -3000,
//     notes: 'expensive'
// })
// database.ref('expenses').push({
//     description: 'dog shots',
//     amount: 1800,
//     createdAt: 0,
//     notes: 'falls under the dog monthly plan'
// })
//   database.ref('notes').push({
//       title: 'To Do',
//       body: 'go for a run'
//   })

//   database.ref('notes/-LVPkzVn8T6UP-PZdx-t').update({
//     title: 'Wham',
//     body: 'kneedeep in the hoopla'
// })
//   database.ref('notes').set(notes)
//  const firebaseNotes = {
//      notes:{
//         '12':{
//             body: 'woop woop note 1',
//             title: 'first note'
//         },
//         '1500000': {
//             body: 'woop woop note 2',
//             title: 'second note'
//         }
//      }
//  }
//   const notes = [{
//       id: 12,
//       body: 'woop woop note 1',
//       title: 'first note'
//   },{
//     id: 150000,
//     body: 'woop woop note 2',
//     title: 'second note'
//   }]


 
//   const onValueChange = database.ref()
//     .on('value', (snapshot)=>{
//         const val=snapshot.val()
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   })

//   setTimeout(()=>{
//     database.ref().update({
//         name: 'Alexandra Todd',
//         'job/title': 'Software Engineer',
//         'job/company': 'Wizards of the Coast'
//     })
//   }, 3000)
//   database.ref().set({
//       name: 'Alex Todd',
//       age: 28,
//       stressLevel: 10,
//       job: {
//           title: 'software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Florence',
//           state: 'Kentucky'
//       }
//   }).then(()=>{
//       console.log('data is saved')
//   }).catch((err)=>{
//       console.log('This failed! Error:', err)
//   })


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


