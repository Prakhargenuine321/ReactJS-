import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//daekho 'react' aur 'vite+react' ya phir koi aur library ya framework hi kyun na ho
//sab "bundler" hi use karte hain jisse syntax accha ho and it will convert JSX format
//into 'object' form as we have created into "./03cutsomReact" jissae ki baad
//maein hum parsing karke "tree" form maein convert karte hain.

function MyApp(){
  return(
    <div>
      <h1>Custom React App!</h1>
    </div>
  )
}


//waise dimaag maein yaeh aata hai jab BTS yahi hota hai ki "JSX to object" 
//toh kyun na hum direct object pass kar daein aur step bacha laein.

//but aisa thodi na hota hai bhai jisnae "react" banaya hai woh humsae kuch expect karta hai
//isliye hum apnae aap sae kaise "prop" ka naam dae sakte hain that is why hum isko direct-run
//nahi kar skate hain.


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


//but hum agar 

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Prakhar Patel";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherUser
)



//jyada antar nahi hai yahan hum "react" ka render use kar rahe hain aut 
//"./03cutsomReact" par hum humara khud ka "render" use kar rahe thae jo ki aek "function" call thi.

ReactDOM.createRoot(document.getElementById('root')).render(
  //but as we know "MyApp" hai aek function hi toh hum usae function ki tarah bhi
  //declare kar sakte hain but aisa karna nahi hai but cool banne kae liye kar sakte ho.
  reactElement
)

//so bhai git repo bhi padh sakte ho but aaram sae as it's not one-day match
