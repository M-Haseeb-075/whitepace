import { useState } from 'react'

function HeroCompSix() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col gap-[90px] justify-center items-center w-full h-[280px] pb-8">
        <div className="flex justify-center items-center w-[30%] h-[100px]">
            <div className='flex '>
                <h1 className='text-[50px] font-[700] whitespace-nowrap'>Our sponsors</h1>
            </div>
        </div>
            <div className="flex justify-around items-center w-full h-[100px]">
            <div><svg width="56" height="69" viewBox="0 0 56 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.3673 38.6165C44.4968 29.2027 53.4321 23.6816 53.4321 23.6816C53.4321 23.6816 49.9508 18.6449 44.1 17.3492C38.2521 16.0507 35.3252 17.6731 32.4041 18.8899C29.4802 20.1098 28.0211 20.1098 28.0211 20.1098C23.8016 20.1098 20.717 15.6421 12.6777 17.6761C7.13915 19.0738 1.30867 25.4674 0.255239 33.0984C-0.798195 40.7322 1.47507 50.4728 5.85804 58.022C10.241 65.5771 14.7058 68.4164 17.8748 68.4981C21.0439 68.5768 24.2072 66.2278 28.0211 65.6558C31.8381 65.0897 34.1871 67.0391 37.931 68.0925C41.6603 69.1431 42.9677 68.1684 47.2631 64.5149C51.5702 60.8613 55.4689 50.3824 55.4689 50.3824C55.4689 50.3824 48.2378 48.0361 46.3673 38.6165Z" fill="black"/>
<path d="M38.0856 11.259C42.2293 7.03659 40.8258 0.499939 40.8258 0.499939C40.8258 0.499939 35.0071 1.52131 31.1084 5.57745C27.2127 9.63656 27.8576 16.0477 27.8576 16.0477C27.8576 16.0477 33.9418 15.4787 38.0856 11.259Z" fill="black"/>
</svg>
</div>
            <div><svg width="288" height="63" viewBox="0 0 288 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9_2498)">
<path d="M287.647 28.5491V23.4444H281.379V15.5085L281.168 15.5742L275.281 17.396L275.165 17.4316V23.4447H265.873V20.0949C265.873 18.5351 266.218 17.3415 266.897 16.5455C267.572 15.759 268.537 15.3591 269.769 15.3591C270.654 15.3591 271.57 15.57 272.493 15.9859L272.724 16.0903V10.7144L272.615 10.6739C271.755 10.3611 270.584 10.2036 269.134 10.2036C267.306 10.2036 265.645 10.606 264.196 11.4034C262.746 12.202 261.606 13.342 260.807 14.7914C260.011 16.2391 259.607 17.9112 259.607 19.7616V23.4444H255.243V28.5491H259.607V50.0543H265.873V28.5491H275.165V42.2153C275.165 47.8436 277.79 50.6959 282.967 50.6959C283.817 50.6959 284.713 50.5951 285.627 50.3977C286.558 50.1949 287.191 49.9925 287.565 49.7763L287.647 49.7269V44.575L287.392 44.7454C287.052 44.9746 286.629 45.1618 286.132 45.3011C285.634 45.4429 285.217 45.5139 284.895 45.5139C283.682 45.5139 282.785 45.1835 282.228 44.5312C281.665 43.873 281.379 42.7221 281.379 41.1121V28.5491H287.647ZM241.252 45.5148C238.977 45.5148 237.185 44.7522 235.921 43.25C234.65 41.7402 234.006 39.5877 234.006 36.8528C234.006 34.0312 234.65 31.8228 235.922 30.2863C237.186 28.76 238.962 27.9853 241.2 27.9853C243.373 27.9853 245.102 28.7251 246.341 30.1855C247.586 31.6535 248.218 33.8442 248.218 36.6986C248.218 39.5882 247.624 41.8078 246.452 43.2926C245.289 44.7662 243.539 45.5148 241.252 45.5148ZM241.53 22.8034C237.191 22.8034 233.746 24.0891 231.288 26.6249C228.833 29.1609 227.588 32.6705 227.588 37.0569C227.588 41.2232 228.803 44.5744 231.2 47.0159C233.598 49.4582 236.86 50.6953 240.896 50.6953C245.101 50.6953 248.479 49.3916 250.934 46.8207C253.39 44.2526 254.634 40.7762 254.634 36.4923C254.634 32.2608 253.467 28.8846 251.163 26.4595C248.859 24.0332 245.617 22.8034 241.53 22.8034ZM217.487 22.8034C214.535 22.8034 212.094 23.5668 210.229 25.0721C208.353 26.5864 207.401 28.5724 207.401 30.9757C207.401 32.2249 207.607 33.3345 208.011 34.2757C208.418 35.22 209.047 36.0514 209.883 36.7492C210.713 37.4413 211.994 38.1663 213.692 38.9039C215.119 39.4978 216.183 40.0001 216.859 40.396C217.52 40.7841 217.989 41.1741 218.253 41.554C218.511 41.9258 218.641 42.4346 218.641 43.0624C218.641 44.8502 217.318 45.72 214.594 45.72C213.583 45.72 212.431 45.5066 211.169 45.086C209.915 44.6718 208.732 44.0651 207.661 43.2873L207.401 43.0986V49.1993L207.496 49.2442C208.383 49.6581 209.501 50.0071 210.818 50.2817C212.133 50.5566 213.327 50.6964 214.365 50.6964C217.568 50.6964 220.147 49.9293 222.028 48.415C223.922 46.8904 224.882 44.8575 224.882 42.3711C224.882 40.5774 224.365 39.0393 223.347 37.7988C222.335 36.5684 220.58 35.4388 218.132 34.4403C216.181 33.6485 214.931 32.9911 214.416 32.4866C213.919 31.9991 213.666 31.3098 213.666 30.4368C213.666 29.663 213.978 29.043 214.617 28.5409C215.262 28.0364 216.159 27.7797 217.284 27.7797C218.328 27.7797 219.396 27.9465 220.458 28.2734C221.519 28.6002 222.451 29.0379 223.23 29.5734L223.486 29.7503V23.9633L223.387 23.9206C222.669 23.6092 221.723 23.3427 220.573 23.1265C219.428 22.9117 218.39 22.8034 217.487 22.8034ZM191.068 45.5148C188.795 45.5148 187.001 44.7522 185.738 43.25C184.466 41.7402 183.823 39.5882 183.823 36.8528C183.823 34.0312 184.467 31.8228 185.739 30.2863C187.002 28.76 188.778 27.9853 191.018 27.9853C193.189 27.9853 194.919 28.7251 196.158 30.1855C197.403 31.6535 198.035 33.8442 198.035 36.6986C198.035 39.5882 197.44 41.8078 196.269 43.2926C195.105 44.7662 193.356 45.5148 191.068 45.5148ZM191.347 22.8034C187.008 22.8034 183.561 24.0891 181.106 26.6249C178.65 29.1609 177.405 32.6705 177.405 37.0569C177.405 41.2249 178.621 44.5744 181.018 47.0159C183.415 49.4582 186.677 50.6953 190.713 50.6953C194.918 50.6953 198.296 49.3916 200.752 46.8207C203.207 44.2526 204.452 40.7762 204.452 36.4923C204.452 32.2608 203.284 28.8846 200.98 26.4595C198.675 24.0332 195.434 22.8034 191.347 22.8034ZM167.894 28.0527V23.4444H161.705V50.0537H167.894V36.442C167.894 34.1275 168.413 32.226 169.437 30.7898C170.448 29.3707 171.795 28.6516 173.44 28.6516C173.997 28.6516 174.623 28.7445 175.301 28.9284C175.971 29.1112 176.457 29.3097 176.744 29.5187L177.004 29.7093V23.3989L176.904 23.3554C176.327 23.1077 175.512 22.9828 174.48 22.9828C172.925 22.9828 171.533 23.4882 170.341 24.4833C169.295 25.358 168.538 26.5572 167.96 28.0527H167.894ZM150.622 22.8034C147.783 22.8034 145.25 23.4191 143.096 24.633C140.937 25.8496 139.268 27.5866 138.132 29.7952C137.001 31.9986 136.427 34.5722 136.427 37.4424C136.427 39.9566 136.984 42.2638 138.084 44.2973C139.185 46.3341 140.743 47.9276 142.715 49.0328C144.685 50.1365 146.961 50.6961 149.481 50.6961C152.423 50.6961 154.934 50.1014 156.947 48.9286L157.029 48.8814V43.1469L156.768 43.339C155.856 44.0109 154.837 44.5472 153.741 44.9336C152.647 45.3196 151.649 45.5148 150.775 45.5148C148.346 45.5148 146.397 44.7463 144.982 43.2311C143.564 41.7141 142.845 39.5837 142.845 36.9031C142.845 34.2055 143.595 32.0205 145.072 30.4082C146.546 28.8007 148.499 27.9853 150.877 27.9853C152.911 27.9853 154.894 28.6819 156.769 30.0578L157.029 30.2484V24.2062L156.945 24.1584C156.239 23.7589 155.276 23.4289 154.081 23.1788C152.892 22.9291 151.728 22.8034 150.622 22.8034ZM132.165 23.4447H125.976V50.0537H132.165V23.4447ZM129.134 12.109C128.115 12.109 127.227 12.4597 126.497 13.1547C125.764 13.8516 125.392 14.7291 125.392 15.7646C125.392 16.7838 125.759 17.6453 126.485 18.3237C127.207 19.0001 128.098 19.3429 129.134 19.3429C130.17 19.3429 131.064 19.0001 131.794 18.3248C132.529 17.6453 132.901 16.7841 132.901 15.7646C132.901 14.7653 132.539 13.8968 131.824 13.1828C131.111 12.4701 130.205 12.109 129.134 12.109ZM113.692 21.4814V50.0537H120.008V12.9236H111.266L100.155 40.5027L89.3718 12.9236H80.2741V50.0534H86.2096V21.4786H86.4134L97.7999 50.0537H102.279L113.488 21.4814H113.692Z" fill="#706D6E"/>
<path d="M29.7617 29.9622H0.647125V0.516663H29.7617V29.9622Z" fill="#F1511B"/>
<path d="M61.9075 29.9615H32.7935V0.515991H61.9075V29.9615Z" fill="#80CC28"/>
<path d="M29.7609 62.4841H0.647125V33.0389H29.7609V62.4841Z" fill="#00ADEF"/>
<path d="M61.9075 62.4841H32.7935V33.0389H61.9075V62.4841Z" fill="#FBBC09"/>
</g>
<defs>
<clipPath id="clip0_9_2498">
<rect width="287" height="62" fill="white" transform="translate(0.647156 0.5)"/>
</clipPath>
</defs>
</svg>
</div>
            <div><svg width="281" height="71" viewBox="0 0 281 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9_2505)">
<path d="M90.5051 55.626L93.991 47.5757C97.7581 50.3709 102.762 51.8245 107.71 51.8245C111.365 51.8245 113.67 50.4268 113.67 48.3024C113.614 42.3764 91.7983 47.0166 91.6296 32.1457C91.5734 24.5985 98.3204 18.7843 107.879 18.7843C113.557 18.7843 119.236 20.182 123.284 23.3686L120.023 31.5867C116.312 29.2386 111.702 27.5615 107.316 27.5615C104.336 27.5615 102.369 28.9591 102.369 30.7481C102.425 36.5623 124.409 33.3757 124.634 47.5757C124.634 55.2906 118.055 60.7134 108.61 60.7134C101.694 60.7134 95.3404 59.0922 90.5051 55.626ZM224.264 44.6686C222.521 47.6875 219.26 49.756 215.493 49.756C209.927 49.756 205.429 45.2835 205.429 39.7489C205.429 34.2142 209.927 29.7418 215.493 29.7418C219.26 29.7418 222.521 31.8103 224.264 34.8292L233.879 29.5182C230.28 23.1449 223.365 18.7843 215.493 18.7843C203.854 18.7843 194.409 28.1764 194.409 39.7489C194.409 51.3213 203.854 60.7134 215.493 60.7134C223.421 60.7134 230.28 56.4087 233.879 49.9796L224.264 44.6686ZM129.469 1.39771H141.501V59.9308H129.469V1.39771ZM238.601 1.39771V59.9308H250.634V42.3764L264.915 59.9308H280.32L262.16 39.078L278.971 19.6229H264.24L250.634 35.7796V1.39771H238.601ZM177.26 44.7804C175.517 47.6316 171.919 49.756 167.871 49.756C162.304 49.756 157.806 45.2835 157.806 39.7489C157.806 34.2142 162.304 29.7418 167.871 29.7418C171.919 29.7418 175.517 31.978 177.26 34.8851V44.7804ZM177.26 19.6229V24.3749C175.292 21.0764 170.401 18.7843 165.284 18.7843C154.714 18.7843 146.393 28.0646 146.393 39.693C146.393 51.3213 154.714 60.7134 165.284 60.7134C170.401 60.7134 175.292 58.4213 177.26 55.1229V59.8749H189.292V19.6229H177.26Z" fill="black"/>
<path d="M16.1199 44.7244C16.1199 48.8055 12.8026 52.1039 8.69821 52.1039C4.59379 52.1039 1.27652 48.8055 1.27652 44.7244C1.27652 40.6433 4.59379 37.3448 8.69821 37.3448H16.1199V44.7244ZM19.8307 44.7244C19.8307 40.6433 23.148 37.3448 27.2524 37.3448C31.3568 37.3448 34.6741 40.6433 34.6741 44.7244V63.1732C34.6741 67.2543 31.3568 70.5527 27.2524 70.5527C23.148 70.5527 19.8307 67.2543 19.8307 63.1732V44.7244Z" fill="#E01E5A"/>
<path d="M27.2521 15.0945C23.1477 15.0945 19.8304 11.7961 19.8304 7.71498C19.8304 3.63387 23.1477 0.335449 27.2521 0.335449C31.3565 0.335449 34.6738 3.63387 34.6738 7.71498V15.0945H27.2521ZM27.2521 18.8402C31.3565 18.8402 34.6738 22.1386 34.6738 26.2197C34.6738 30.3008 31.3565 33.5992 27.2521 33.5992H8.64166C4.53724 33.5992 1.21997 30.3008 1.21997 26.2197C1.21997 22.1386 4.53724 18.8402 8.64166 18.8402H27.2521Z" fill="#36C5F0"/>
<path d="M56.9951 26.2197C56.9951 22.1386 60.3124 18.8402 64.4168 18.8402C68.5212 18.8402 71.8385 22.1386 71.8385 26.2197C71.8385 30.3008 68.5212 33.5992 64.4168 33.5992H56.9951V26.2197ZM53.2843 26.2197C53.2843 30.3008 49.967 33.5992 45.8626 33.5992C41.7582 33.5992 38.4409 30.3008 38.4409 26.2197V7.71498C38.4409 3.63387 41.7582 0.335449 45.8626 0.335449C49.967 0.335449 53.2843 3.63387 53.2843 7.71498V26.2197Z" fill="#2EB67D"/>
<path d="M45.8626 55.7937C49.967 55.7937 53.2843 59.0921 53.2843 63.1732C53.2843 67.2543 49.967 70.5527 45.8626 70.5527C41.7582 70.5527 38.4409 67.2543 38.4409 63.1732V55.7937H45.8626ZM45.8626 52.1039C41.7582 52.1039 38.4409 48.8055 38.4409 44.7244C38.4409 40.6433 41.7582 37.3448 45.8626 37.3448H64.473C68.5774 37.3448 71.8947 40.6433 71.8947 44.7244C71.8947 48.8055 68.5774 52.1039 64.473 52.1039H45.8626Z" fill="#ECB22E"/>
</g>
<defs>
<clipPath id="clip0_9_2505">
<rect width="280" height="71" fill="white" transform="translate(0.825439)"/>
</clipPath>
</defs>
</svg>
</div>
            <div><svg width="211" height="71" viewBox="0 0 211 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M90.2977 37.3327C90.2977 47.3769 82.4804 54.7783 72.8868 54.7783C63.2932 54.7783 55.476 47.3769 55.476 37.3327C55.476 27.2177 63.2932 19.8871 72.8868 19.8871C82.4804 19.8871 90.2977 27.2177 90.2977 37.3327ZM82.676 37.3327C82.676 31.0561 78.1453 26.7616 72.8868 26.7616C67.6283 26.7616 63.0976 31.0561 63.0976 37.3327C63.0976 43.5464 67.6283 47.9039 72.8868 47.9039C78.1453 47.9039 82.676 43.5386 82.676 37.3327Z" fill="#EA4335"/>
<path d="M127.858 37.3327C127.858 47.3769 120.041 54.7783 110.447 54.7783C100.854 54.7783 93.0363 47.3769 93.0363 37.3327C93.0363 27.2256 100.854 19.8871 110.447 19.8871C120.041 19.8871 127.858 27.2177 127.858 37.3327ZM120.236 37.3327C120.236 31.0561 115.706 26.7616 110.447 26.7616C105.189 26.7616 100.658 31.0561 100.658 37.3327C100.658 43.5464 105.189 47.9039 110.447 47.9039C115.706 47.9039 120.236 43.5386 120.236 37.3327Z" fill="#FBBC05"/>
<path d="M163.854 20.9411V52.2613C163.854 65.1449 156.294 70.4069 147.358 70.4069C138.946 70.4069 133.883 64.7517 131.974 60.1268L138.61 57.3503C139.791 60.1897 142.687 63.5404 147.35 63.5404C153.071 63.5404 156.615 59.9931 156.615 53.3153V50.8062H156.349C154.643 52.922 151.357 54.7704 147.21 54.7704C138.531 54.7704 130.581 47.1724 130.581 37.3956C130.581 27.5481 138.531 19.8871 147.21 19.8871C151.349 19.8871 154.636 21.7355 156.349 23.7884H156.615V20.949H163.854V20.9411ZM157.155 37.3956C157.155 31.2527 153.078 26.7615 147.89 26.7615C142.632 26.7615 138.226 31.2527 138.226 37.3956C138.226 43.4756 142.632 47.9039 147.89 47.9039C153.078 47.9039 157.155 43.4756 157.155 37.3956Z" fill="#4285F4"/>
<path d="M175.787 2.58295V53.7084H168.353V2.58295H175.787Z" fill="#34A853"/>
<path d="M204.756 43.0744L210.671 47.0385C208.762 49.878 204.161 54.7703 196.211 54.7703C186.351 54.7703 178.987 47.1093 178.987 37.3247C178.987 26.9502 186.413 19.8792 195.358 19.8792C204.364 19.8792 208.77 27.0839 210.21 30.9773L211 32.9594L187.799 42.6182C189.575 46.1183 192.337 47.9037 196.211 47.9037C200.092 47.9037 202.784 45.9846 204.756 43.0744ZM186.546 36.7977L202.056 30.3245C201.203 28.1457 198.636 26.6277 195.616 26.6277C191.742 26.6277 186.351 30.0649 186.546 36.7977Z" fill="#EA4335"/>
<path d="M27.3368 32.7942V25.3928H52.1502C52.3928 26.6828 52.518 28.2087 52.518 29.8604C52.518 35.4134 51.0077 42.28 46.1405 47.1723C41.4063 52.1275 35.3575 54.7703 27.3446 54.7703C12.4925 54.7703 0.00366211 42.6103 0.00366211 27.6817C0.00366211 12.7531 12.4925 0.593079 27.3446 0.593079C35.561 0.593079 41.4141 3.83364 45.8119 8.05739L40.616 13.28C37.4625 10.3069 33.19 7.99447 27.3368 7.99447C16.4912 7.99447 8.00875 16.7802 8.00875 27.6817C8.00875 38.5832 16.4912 47.3689 27.3368 47.3689C34.3715 47.3689 38.378 44.5295 40.9446 41.9496C43.0261 39.8574 44.3955 36.8685 44.9354 32.7864L27.3368 32.7942Z" fill="#4285F4"/>
</svg>
</div>
        </div>
    </div>
    </>
  )}
  export default HeroCompSix