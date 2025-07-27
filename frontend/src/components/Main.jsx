import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const Main = () => {
    return (
        <section className="flex h-screen overflow-hidden w-screen flex-col items-center bg-[url('/hero-background.png')] bg-cover">
            <div className="flex h-screen w-screen justify-between">
                <div className="ml-28 mt-55 flex">
                        
                            <svg
                            className="mt-20 rotate-[-40deg]"
                            xmlns="http://www.w3.org/2000/svg"
                            width={164}
                            height={164}
                            viewBox="0 0 24 24"
                            style={{
                                filter: `drop-shadow(0 0 7px #fff) drop-shadow(0 0 65px #fff) drop-shadow(0 0 120px #fff)`,
                            }}
                            >
                            <path
                                fill="currentColor"
                                d="m16.112 20l-.689-.688l1.575-1.6l-1.575-1.576l.689-.713l1.6 1.6l1.575-1.6l.713.714l-1.6 1.575l1.6 1.6l-.713.688l-1.575-1.575zM6.5 19q.617 0 1.059-.441Q8 18.117 8 17.5t-.441-1.059Q7.117 16 6.5 16t-1.059.441Q5 16.883 5 17.5t.441 1.059Q5.883 19 6.5 19m0 1q-1.038 0-1.77-.73T4 17.5t.73-1.77T6.5 15q.887 0 1.572.551q.686.551.863 1.426q1.167-.102 1.962-.96q.795-.857.795-2.017v-3.711q0-1.864 1.319-3.182t3.181-1.318h1.881l-2.075-2.075l.714-.714L20 6.289l-3.288 3.288l-.714-.688l2.056-2.1h-1.862q-1.461 0-2.48 1.019t-1.02 2.48V14q0 1.575-1.088 2.713q-1.088 1.137-2.658 1.27q-.165.886-.856 1.451Q7.398 20 6.5 20M4.689 8.577L4 7.889l1.575-1.6L4 4.714L4.689 4l1.6 1.6L7.864 4l.713.713l-1.6 1.576l1.6 1.6l-.713.688l-1.575-1.575z"
                            ></path>
                            </svg>

                        <div>
                            <div className="bg-clip-text text-transparent text-[24px]"
                            style={{
                                backgroundImage: `
                                radial-gradient(490px circle at 27% 60%, rgba(255, 255, 255, 1) 4%, rgba(255, 255, 255, 0) 44%),
                                radial-gradient(380px circle at 78% 18%, rgba(255, 79, 79, 0.3) 0%, rgba(255, 79, 79, 0.8) 30%, rgba(255, 79, 79, 0) 80%),
                                radial-gradient(100px circle at 73% 72%, rgba(255, 79, 79, 0.9) 0%, rgba(255, 79, 79, 0) 100%)
                                `,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                        <h1 className="sequelFont tracking-wider">Win with <span className="sequelFont-Bold">Tactics.</span></h1>
                        <h1 className="sequelFont ml-36 tracking-wider">Not just <span className="sequelFont-Bold">Aim!</span></h1>
                        </div>
                        <p className="ml-51 mt-2 text-[#626A76]">Track your matches, build strategies, and outsmart the meta</p>
                        </div>
                    </div>
                
        <div className="flex items-end mb-25">

                    <div>
                        <div className="relative mr-70 mt-25 flex">
        
          <div className="bg-clip-text text-transparent text-[12px]"
                style={{
                    backgroundImage: `
                    radial-gradient(400px circle at 15% 95%, rgba(255, 255, 255, 0.95) 5%, rgba(255, 255, 255, 0) 55%),
                    radial-gradient(200px circle at 78% 58%, rgba(255, 79, 79, 1) 0%, rgba(255, 79, 79, 0.8) 30%, rgba(255, 79, 79, 0) 80%),
                    radial-gradient(100px circle at 73% 72%, rgba(255, 79, 79, 0.9) 0%, rgba(255, 79, 79, 0) 100%)
                    `,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
        <h1 className="sequelFont tracking-wider">Increase your round</h1>
        <h1 className="sequelFont-Bold ml-6 tracking-wider">
            Winrate<span className="sequelFont"> by up to </span>72%
        </h1>
    </div>

                        <svg xmlns="http://www.w3.org/2000/svg" 
                                width={96} 
                                height={96} 
                                className="absolute ml-100 mt-[-60px]"
                                style={{ filter: `drop-shadow(0 0 15px #FF5252) drop-shadow(0 0 55px #FF5252) drop-shadow(0 0 120px #FF5252)`,}}
                                viewBox="0 0 16 16">
                                <path fill="#FF5252" 
                                fillRule="evenodd" 
                                d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686" clipRule="evenodd"></path></svg> 
                        </div>
                        <div className=" text-[#626A76] flex flex-col gap-1 mt-8 ml-25">
                                    <div className="flex items-center gap-3"><FaCheckCircle size={16} 
                                                                                            color="#FF5252"
                                                                                            style={{ filter: `drop-shadow(0 0 5px #FF5252) drop-shadow(0 0 30px #FF5252)`,}}/>
                                                                                            Build and share your personal strategies
                                    </div>
                                    <div className="flex items-center gap-3"><FaCheckCircle size={16} 
                                                                                            color="#FF5252"
                                                                                            style={{ filter: `drop-shadow(0 0 5px #FF5252) drop-shadow(0 0 30px #FF5252)`,}}/>
                                                                                            Browse community strats that actually work
                                    </div>
                                                                <div className="flex items-center gap-3"><FaCheckCircle size={16} 
                                                                                            color="#FF5252"
                                                                                            style={{ filter: `drop-shadow(0 0 5px #FF5252) drop-shadow(0 0 30px #FF5252)`,}}/>
                                                                                            Track your match-history and game data
                                    </div>

                        </div>
                    </div>
                </div>
            </div>
            <a href="" className="robotoBold px-6 py-2 rounded-3xl border-1 border-[#FF5252] text-[#FF5252] mb-30 text-2xl hover:bg-[#FF5252] hover:text-[#0A0F17] transition duration-300">CREATE TACTICS</a>
        </section>
    );

};

export default Main;
