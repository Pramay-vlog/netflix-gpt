import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleCheckLoginCondition = (success) => {
    console.log("🚀 ~ handleCheckLoginCondition ~ success:", success)
    setShowLoginForm(success)
  }

  return (
    <div className='relative'>

      <Header isShowLoginForm={handleCheckLoginCondition} />

      <div className="relative flex justify-center items-center h-3/6">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Netflix Hero BG"
          className='h-full'
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-black opacity-55"></div>

        {!showLoginForm && (
          <div className='absolute flex flex-col justify-center items-center gap-2.5 z-10'>
            <h1 className='font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl drop-shadow-2xl'>Unlimited movies, TV shows and more</h1>
            <h4 className='font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl drop-shadow-2xl'>Watch anywhere. Cancel anytime.</h4>
            <h4 className='font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl drop-shadow-2xl'>Ready to watch? Enter your email to create or restart your membership.</h4>
          </div>
        )}

      </div>

    </div>
  )
}

export default Login
