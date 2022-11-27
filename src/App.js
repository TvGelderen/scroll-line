import React from 'react'
import { motion } from 'framer-motion'

const svgVariants = {

}

const pathVariants = {

}

function App() {
  let path = document.querySelector('path')
  let pathLength = path.getTotalLength()

  path.style.strokeDasharray = pathLength + ' ' + pathLength
  path.style.strokeDashoffset = pathLength

  window.addEventListener('scroll', () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    let drawLength = pathLength * scrollPercentage

    path.style.strokeDashoffset = pathLength - drawLength
  })

  return (
    <div>
      <div className='line-container'>
        <svg width="1142" height="6057" viewBox="0 0 1142 6057" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M858 2.5C948.667 115.333 1066.7 373.1 813.5 501.5C560.3 629.9 357.333 864.333 287.5 965.5C179.166 1102.17 12.4 1404.9 212 1522.5C461.5 1669.5 1134.5 1639 1139 1754.5C1142.6 1846.9 896.834 1926.67 773.5 1955C531.334 1999.33 80 2128.2 212 2289C377 2490 804.5 2382.5 773.5 2570C742.5 2757.5 181 2561.5 60.4999 2860C-60.0001 3158.5 42.7957 3500.76 60.4999 3537.5C127 3675.5 894 3385.5 773.5 3675.5C739.5 3786.83 633.1 4015.8 479.5 4041C287.5 4072.5 131.5 4125.5 287.5 4241.5C443.5 4357.5 515 4331 613 4415.5C711 4500 1036.5 4794 934 4923.5C831.5 5053 564 5080 613 5334C662 5588 769 5588.5 813.5 5650.5C849.1 5700.1 786.667 5941.5 751 6056" stroke="#FF0000" stroke-width="5"/>
        </svg>
      </div>
    </div>
  );
}

export default App;
