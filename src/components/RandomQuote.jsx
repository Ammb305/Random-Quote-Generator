import React, { useState } from 'react'
import '../index.css'
import twitter_x from '../components/assets/twitter_x.png'
import reload from '../components/assets/reload.png'

const RandomQuote = () => {
   
    const [quote, setQuote] = useState([]);

    const QuoteGenerator = () => {
        let api = 'https://api.quotable.io/random';
        fetch(api).then(res=>res.json()).then(results=>{
            setQuote(results)
        })
    }

    const share = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`)
    }

  return (
    <>
    <h1 className='text-gray-900 font-bold'>Random Quote Generator</h1>
    <div className="relative">
    <div className="absolute  -inset-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-75 blur animate-tilt"></div>    
    <div className='relative flex flex-col items-center m-auto mt-[60px] bg-black w-[800px] rounded-lg'>
        <div className="quote py-[60px] px-[110px] text-white text-[32px] text-center font-mono font-semibold">"{quote.content}"</div>
        <div>
            <div className="line w-[680px] h-[1.5px] bg-white "></div>
            <div className="bottom flex flex-row justify-between items-center mx-0 my-[30px]">
                <div className="author text-white text-[30px] font-display">- {quote.author}</div>
                <div className="icons flex flex-row gap-[50px] cursor-pointer h-[40px]">
                    <span className='animate-tilt text-pink-600 -rotate-6' onClick={() => {QuoteGenerator()}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        </span>
                        <span onClick={() => {share()}}><svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" fill="#000" rx="60"></rect><path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg></span>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )

}
export default RandomQuote