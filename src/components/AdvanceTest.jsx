// import React, { useState } from 'react'

// const AdvanceTest = () => {
// const[username, setUsername] = useState("")
//     return (
//         <>
//             <div>
//            <h1 className='text-sky-300 p-5 text-2xl'>Enter your name :</h1> 
//             <input
//             type="text"
//              className='border-zinc-600 px-4 py-2 text-xl'
//             placeholder='enter anything '
//             value={username}
//             onChange={(e)=>{
//                 setUsername(e.target.value)
//             console.log(username);

//             }}
//              />
//             </div>
//         </>
//     )
// }

// export default AdvanceTest


// import axios from 'axios'
// import React, { useState } from 'react'

// const AdvanceTest = () => {
//     const [user, setUser]=useState([])
//     const getUsers= async ()=>{
//         const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//         setUser(data)
//        console.log(data)
//     }
   
//     return (
//         <>
//             <div className='parent p-5'>
//                 <button onClick={getUsers}  className='bg-blue-200 text-white px-4 py-2 rounded font-bold'>
//                     Get Data
                    
//                 </button>
//                 <div>
//                     <ul>
//                         {user.map((e)=>{
//                           return <li> {e.username} </li>  
//                         })}
//                     </ul>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AdvanceTest