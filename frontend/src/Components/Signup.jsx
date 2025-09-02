"use client"

import { useState } from "react"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"

function Signup({ navigateToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const validateName = (name) => {
    if (!name) return "Name is required"
    if (name.length < 3) return "Name must be at least 3 characters"
    return ""
  }

  const validateEmail = (email) => {
    if (!email) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Enter a valid email address"
    return ""
  }

  const validatePassword = (password) => {
    if (!password) return "Password is required"
    if (password.length < 6) return "Password must be at least 6 characters"
    return ""
  }

  const validatePhoneNumber = (phone) => {
    if (!phone) return "Phone number is required"
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) return "Enter a valid 10-digit phone number"
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }))
    }
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }))
    }
    if (name === "password") {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }))
    }
    if (name === "phoneNumber") {
      setErrors((prev) => ({ ...prev, phoneNumber: validatePhoneNumber(value) }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)
    const phoneError = validatePhoneNumber(formData.phoneNumber)

    if (nameError || emailError || passwordError || phoneError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        phoneNumber: phoneError
      })
      return
    }

    try {
      await axios.post("http://localhost:5000/signup", formData)
      setSuccessMessage("Signup successful!")
      setErrorMessage("")
      setTimeout(() => {
        navigateToLogin()
      }, 1500)
    } catch (error) {
      if (error.response?.status === 400) {
        if (window.confirm("User already exists. Do you want to login instead?")) {
          navigateToLogin()
        }
      } else {
        setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.")
        setSuccessMessage("")
      }
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center font-sans relative overflow-hidden">
      {/* Logo in top-left corner */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/amaLogo.jpg" 
          alt="Logo" 
          className="w-36 h-auto object-contain"
        />
      </div>

      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hacker.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

      <div className="absolute inset-0 animated-bg">
        <div className="floating-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
      </div>

      {/* Main container - Centered signup form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl flex flex-col overflow-hidden">
          
          {/* Signup Card with Multicolor Gradient Animation */}
          <div className="flex items-center justify-center p-6">
            <div className="animated-login-card">
              <div className="bg-[#e0e5ec]/70 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center 
                  shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
                  hover:shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff] 
                  transition-all duration-300 w-[500px] relative z-10 login-content h-[550px]">
                
                <h1 className="text-[#6d7582] text-3xl font-semibold mb-6">Sign Up</h1>

                {successMessage && <p className="text-green-600 font-medium mb-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 font-medium mb-4">{errorMessage}</p>}

                {/* Name Input */}  
                <div className="w-full mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#e0e5ec]/80 rounded-xl 
                              shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] 
                              text-[#6d7582] placeholder-[#a3b1c6] focus:outline-none 
                              transition-all duration-300 text-lg"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2 ml-1">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div className="w-full mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#e0e5ec]/80 rounded-xl 
                              shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] 
                              text-[#6d7582] placeholder-[#a3b1c6] focus:outline-none 
                              transition-all duration-300 text-lg"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2 ml-1">{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div className="w-full mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-4 pr-12 bg-[#e0e5ec]/80 rounded-xl 
                              shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] 
                              text-[#6d7582] placeholder-[#a3b1c6] focus:outline-none 
                              transition-all duration-300 text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6d7582] 
                               hover:text-[#4b5563] transition-colors"
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                  {errors.password && <p className="text-red-500 text-sm mt-2 ml-1">{errors.password}</p>}
                </div>

                {/* Phone Number Input */}
                <div className="w-full mb-6">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#e0e5ec]/80 rounded-xl 
                              shadow-[inset_10px_10px_20px_#a3b1c6,inset_-10px_-10px_20px_#ffffff] 
                              text-[#6d7582] placeholder-[#a3b1c6] focus:outline-none 
                              transition-all duration-300 text-lg"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-2 ml-1">{errors.phoneNumber}</p>}
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-10 py-4 bg-[#e0e5ec]/80 rounded-xl 
                             shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
                             text-[#6d7582] hover:shadow-[0_0_10px_#4b658b,0_0_20px_#ad2424] 
                             hover:-translate-y-0.5 transition-all duration-300 
                             active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] 
                             text-lg font-medium"
                >
                  Sign Up
                </button>

                <p className="text-[#6d7582] text-base mt-3">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={navigateToLogin}
                    className="text-[#6d7582] font-medium hover:underline focus:outline-none hover:text-[#5a6473] transition-colors duration-300"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          height: 100vh;
          width: 100%;
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        /* Animated Login Card Container */
        .animated-login-card {
          position: relative;
          padding: 6px;
          border-radius: 28px;
          background: linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff, #ff00ff, #ff0000);
          background-size: 400% 400%;
          animation: gradient-flow 8s ease infinite;
           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .login-content {
          position: relative;
          z-index: 2;
        }

        /* Add a subtle pulse effect to the entire card */
        .animated-login-card::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 28px;
          background: linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff, #ff00ff, #ff0000);
          background-size: 400% 400%;
          animation: gradient-pulse 4s ease infinite;
          z-index: 1;
          filter: blur(8px);
          opacity: 0.7;
        }

        @keyframes gradient-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Professional subtle gradient animation */
        .animated-bg {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.15), rgba(55, 65, 81, 0.2), rgba(17, 24, 39, 0.25));
          background-size: 200% 200%;
          animation: subtleFlow 15s ease-in-out infinite;
        }

        @keyframes subtleFlow {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Particles */
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%);
          border-radius: 50%;
          pointer-events: none;
          animation: gentleFloat 20s infinite linear;
        }

        .particle-1 { width: 3px; height: 3px; left: 15%; animation-delay: 0s; }
        .particle-2 { width: 4px; height: 4px; left: 25%; animation-delay: 3s; }
        .particle-3 { width: 2px; height: 2px; left: 35%; animation-delay: 6s; }
        .particle-4 { width: 3px; height: 3px; left: 45%; animation-delay: 9s; }
        .particle-5 { width: 4px; height: 4px; left: 55%; animation-delay: 12s; }
        .particle-6 { width: 2px; height: 2px; left: 65%; animation-delay: 15s; }
        .particle-7 { width: 3px; height: 3px; left: 75%; animation-delay: 18s; }
        .particle-8 { width: 4px; height: 4px; left: 85%; animation-delay: 1.5s; }
        .particle-9 { width: 2px; height: 2px; left: 20%; animation-delay: 4.5s; }
        .particle-10 { width: 3px; height: 3px; left: 40%; animation-delay: 7.5s; }
        .particle-11 { width: 4px; height: 4px; left: 60%; animation-delay: 10.5s; }
        .particle-12 { width: 2px; height: 2px; left: 80%; animation-delay: 13.5s; }

        /* Gentle upward floating motion */
        @keyframes gentleFloat {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(0);
            opacity: 0;
          }
        }

        .gradient-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Professional subtle orbs with muted colors */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: professionalPulse 25s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, rgba(30, 58, 138, 0.1) 50%, transparent 80%);
          top: 20%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(ellipse, rgba(55, 65, 81, 0.3) 0%, rgba(17, 24, 39, 0.1) 50%, transparent 80%);
          bottom: 10%;
          right: -5%;
          animation-delay: 12s;
        }

        /* Subtle professional pulsing animation */
        @keyframes professionalPulse {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1) translate(20px, -20px);
            opacity: 0.3;
          }
        }

        /* Removed hover speed-up for more professional feel */
        .animated-bg:hover {
          animation-duration: 15s;
        }
      `}</style>
    </div>
  )
}

export default Signup