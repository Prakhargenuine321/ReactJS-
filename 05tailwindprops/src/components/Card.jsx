import React from 'react'




// 3)hum default-value bhi set kar sakte hain jaise JS maein karte hain
// jissae agar kisi nae "props" pass nahi kiya hai toh bhi kaam ho jaye.

function Card({username, btnText = "Visit Me"}) { //1)hum yahan par "props" bhi likh sakte hain aur "object-destructuring" bhi kar sakte hain
    //but "object-destructuring" ka benefit hai ki baar-baar "props.username" karke access nahi karna padega.

    //2)jab bhi App.jsx maein iss component maein parameter/properties pass hogi
    //woh yahan "props" maein accept hogi aur and it will be utilized.

    // console.log(username);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
  )
}

export default Card