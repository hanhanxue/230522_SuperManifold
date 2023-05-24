export enum LogoTypes {
    Icon,
    Wordmark,
    Logo,
}


interface ISuperManifoldLogoProps {
    fillColor: string
    variant: LogoTypes

}


const SuperManifoldLogo: React.FC<ISuperManifoldLogoProps> = ({ fillColor, variant }) => {



    const logos = [
        <svg width="69" height="36" viewBox="0 0 69 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 3V33H66V3H36ZM60 21H54V27H48V21H42V15H48V9H54V15H60V21ZM48 15V21H54V15H48Z" fill={`${fillColor}`}/>
        <path d="M18.3491 21C20.0445 21 21.4188 19.6569 21.4188 18C21.4188 16.3431 20.0445 15 18.3491 15C16.6537 15 15.2793 16.3431 15.2793 18C15.2793 19.6569 16.6537 21 18.3491 21Z" fill={`${fillColor}`}/>
        <path d="M3 3V33H33V3H3ZM18 27C13.0275 27 9 22.9724 9 18C9 13.0276 13.0275 9 18 9C22.9725 9 27 13.0276 27 18C27 22.9724 22.9725 27 18 27Z" fill={`${fillColor}`}/>
        </svg>
,
<svg width="264" height="36" viewBox="0 0 264 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 3V33H66V3H36ZM60 21H54V27H48V21H42V15H48V9H54V15H60V21ZM48 15V21H54V15H48Z" fill={`${fillColor}`}/>
<path d="M176.013 13.6706C178.449 12.7354 180.939 10.5278 182.135 7.39587H176.643V6.00391H184.082C183.94 6.71076 183.614 8.34198 182.081 10.5169C183.408 11.5391 184.571 12.5396 185.702 13.6597L184.473 14.8668C183.473 13.7032 182.374 12.6266 181.211 11.6153C180.004 13.0072 178.568 14.1817 176.872 14.8777L176.013 13.6706Z" fill={`${fillColor}`}/>
<path d="M196.153 9.39648V10.9407H186.518V9.39648H196.153Z" fill={`${fillColor}`}/>
<path d="M198.013 13.6381C199.764 11.6481 200.199 8.28778 200.286 5.93884L201.743 6.06932C201.438 11.485 200.122 13.6055 199.242 14.7039L198.013 13.6381ZM205.386 5.88445C205.69 9.51662 206.952 12.1918 208.072 13.6708L206.756 14.693C205.016 12.4202 204.309 9.05989 204.059 6.05845L205.386 5.88445ZM208.398 6.11283C208.398 6.75443 207.887 7.27642 207.234 7.27642C206.593 7.27642 206.071 6.75443 206.071 6.11283C206.071 5.46033 206.604 4.94922 207.234 4.94922C207.876 4.94922 208.398 5.46033 208.398 6.11283ZM206.734 6.11283C206.734 6.3847 206.963 6.61308 207.245 6.61308C207.528 6.61308 207.746 6.37383 207.746 6.11283C207.746 5.83009 207.517 5.61259 207.234 5.61259C206.974 5.61259 206.734 5.8192 206.734 6.11283Z" fill={`${fillColor}`}/>
<path d="M219.643 9.39648V10.9407H210.008V9.39648H219.643Z" fill={`${fillColor}`}/>
<path d="M224.221 8.44008C223.438 8.88594 222.895 9.13606 222.481 9.31006L221.764 7.93983C223.547 7.35259 225.189 6.37387 226.277 5.02539H227.756C228.365 5.73227 229.409 6.85235 232.269 7.93983L231.518 9.31006C231.127 9.13606 230.54 8.8642 229.865 8.47269V9.25568H224.221V8.44008ZM222.873 10.1909H231.127V15.2803H229.757V14.8779H224.243V15.2803H222.873V10.1909ZM224.243 11.4198V13.66H229.757V11.4198H224.243ZM229.137 8.02683C227.919 7.20034 227.31 6.51523 226.984 6.15636C226.396 6.88499 225.711 7.49397 224.885 8.02683H229.137Z" fill={`${fillColor}`}/>
<path d="M237.195 14.1598C238.043 13.8009 239.055 13.2681 239.957 12.3328C239.37 10.5929 239.294 8.91818 239.239 7.89595H235.662V9.00518H238.598C238.609 9.94041 238.532 11.539 238.435 12.4742C238.369 13.1485 238.163 13.9858 237.097 13.9858H236.02L235.792 12.6156H236.706C236.847 12.6156 236.999 12.5612 237.064 12.3546C237.227 11.8544 237.238 10.5385 237.238 10.2232H235.662V11.0279C235.662 11.7347 235.542 12.5938 235.422 13.2355C235.259 14.1054 234.944 14.7362 234.618 15.3125L233.465 14.2794C234.052 13.279 234.335 12.1262 234.335 10.9626V6.61275H239.185C239.174 6.38437 239.12 5.26427 239.109 5.00327H240.49C240.49 5.37301 240.49 5.61226 240.512 6.61275H242.23C241.675 6.12337 241.469 5.94938 240.947 5.65577L241.86 4.89453C242.382 5.17727 242.687 5.39478 243.437 6.03638L242.795 6.61275H243.763V7.89595H240.566C240.653 8.92905 240.762 9.95129 240.979 10.9626C241.262 10.4515 241.588 9.77729 241.915 8.41794L243.22 8.85293C242.774 10.3971 242.219 11.5499 241.49 12.583C241.686 12.9853 242.023 13.7139 242.317 13.7139C242.513 13.7139 242.654 13.4747 242.73 13.3116C242.795 13.1702 243.002 12.3872 243.067 12.1371L244.035 13.0071C243.709 14.3338 243.383 15.3017 242.404 15.3017C241.425 15.3017 240.805 14.1707 240.544 13.6922C239.598 14.6166 238.696 15.0733 238.076 15.356L237.195 14.1598Z" fill={`${fillColor}`}/>
<path d="M246.581 10.2227C246.222 10.6685 246.08 10.799 245.874 10.9839L245.417 9.23309C246.961 7.46049 247.19 5.59004 247.244 5.01367L248.571 5.16592C248.516 5.62266 248.418 6.48177 247.886 7.81937V15.2903H246.581V10.2227ZM248.016 12.2236C249.408 11.0927 250.278 9.8203 251.018 8.11298H248.462V6.78627H251.376V5.04631H252.747V6.78627H255.813V8.11298H253.138C253.279 8.46098 254.226 10.6359 255.987 12.1149L255.291 13.5612C254.878 13.148 253.649 11.93 252.747 9.85294V12.3215H254.182V13.5939H252.747V15.2903H251.376V13.5939H249.952V12.3215H251.376V9.7442C250.778 11.2014 249.908 12.539 248.766 13.6265L248.016 12.2236Z" fill={`${fillColor}`}/>
<path d="M18.3491 21C20.0445 21 21.4188 19.6569 21.4188 18C21.4188 16.3431 20.0445 15 18.3491 15C16.6537 15 15.2793 16.3431 15.2793 18C15.2793 19.6569 16.6537 21 18.3491 21Z" fill={`${fillColor}`}/>
<path d="M3 3V33H33V3H3ZM18 27C13.0275 27 9 22.9724 9 18C9 13.0276 13.0275 9 18 9C22.9725 9 27 13.0276 27 18C27 22.9724 22.9725 27 18 27Z" fill={`${fillColor}`}/>
<path d="M69 18.75H76.4697L80.8367 26.756L85.2802 18.75H92.4435V33H87.0615V24.1129L82.0625 33H79.2853L74.3054 24.1129V33H69V18.75Z" fill={`${fillColor}`}/>
<path d="M107.936 30.7016H99.7963L98.7046 33H93.1885L100.237 18.75H107.553L115.004 33H109.047L107.936 30.7016ZM103.799 22.2359L101.463 27.1391H106.193L103.799 22.2359Z" fill={`${fillColor}`}/>
<path d="M121.841 18.75L130.115 26.8518V18.75H135.516V33H130.077L121.151 24.3619V33H115.75V18.75H121.841Z" fill={`${fillColor}`}/>
<path d="M142.453 33H137.016V18.75H142.453V33Z" fill={`${fillColor}`}/>
<path d="M159.41 18.75V22.2359H149.335V24.0171H159.199V27.5222H149.335V33H143.953V18.75H159.41Z" fill={`${fillColor}`}/>
<path d="M171.766 18.4814C180.96 18.4814 182.147 22.8675 182.147 25.549V26.1236C182.147 28.7859 180.979 33.2677 171.766 33.2677H170.904C161.672 33.2677 160.504 28.7859 160.504 26.1236V25.549C160.504 22.8675 161.672 18.4814 170.904 18.4814H171.766ZM176.516 25.683C176.516 24.17 175.539 22.3121 171.325 22.3121C167.035 22.3121 166.135 24.17 166.135 25.683V25.9129C166.135 27.4068 167.112 29.4179 171.325 29.4179C175.539 29.4179 176.516 27.4835 176.516 25.9512V25.683Z" fill={`${fillColor}`}/>
<path d="M188.854 18.75V28.9203H198.737V33H183.414V18.75H188.854Z" fill={`${fillColor}`}/>
<path d="M200.102 18.75H210.214C218.431 18.75 220.5 22.1401 220.5 25.4919V26.0665C220.5 29.3034 218.719 33 210.234 33H200.102V18.75ZM205.541 29.2268H209.582C214.332 29.2268 214.85 27.1391 214.85 25.8941V25.7792C214.85 24.5343 214.332 22.4849 209.582 22.4849H205.541V29.2268Z" fill={`${fillColor}`}/>
<path d="M77.6077 17.5181C69.7357 17.5181 68.9121 14.3195 68.9121 12.4617V12.2701H74.8879C74.9454 13.0363 75.3476 14.2812 78.4504 14.2812H78.6228C81.6681 14.2812 82.1087 13.63 82.1087 12.9405V12.9213C82.1087 12.1935 81.7447 11.7338 78.7568 11.6381L76.1137 11.5615C70.5976 11.4082 69.1228 9.47377 69.1228 7.27114V7.09877C69.1228 4.78123 70.6742 2.75098 77.3204 2.75098H79.025C86.0734 2.75098 87.6823 4.99191 87.6823 7.25198V7.40522H81.7639C81.7065 6.88808 81.4 5.8921 78.3164 5.8921H78.1248C75.271 5.8921 74.9837 6.39009 74.9837 6.94553V6.96469C74.9837 7.53929 75.4051 7.99896 78.0865 8.05642L80.653 8.11389C86.0734 8.2671 88.1803 9.53121 88.1803 12.4042V12.6724C88.1803 15.0665 86.8395 17.5181 79.3506 17.5181H77.6077Z" fill={`${fillColor}`}/>
<path d="M89.0908 3H94.5495V9.37802C94.5495 11.121 95.3156 13.2086 98.9164 13.2086C102.46 13.2086 103.264 11.121 103.264 9.37802V3H108.704V9.79938C108.704 12.5574 107.382 17.4798 99.3186 17.4798H98.5525C90.2592 17.4798 89.0908 12.5574 89.0908 9.79938V3Z" fill={`${fillColor}`}/>
<path d="M115.453 12.7873V17.25H110.016V3H121.889C127.156 3 128.65 5.08769 128.65 7.71168V8.01814C128.65 10.6038 127.098 12.7873 121.889 12.7873H115.453ZM115.453 9.22478H121.237C122.482 9.22478 123.038 8.70765 123.038 7.92237V7.8649C123.038 7.04131 122.521 6.56249 121.237 6.56249H115.453V9.22478Z" fill={`${fillColor}`}/>
<path d="M145.847 3V6.48588H135.447V8.26712H145.636V11.7339H135.447V13.6875H146V17.25H130.084V3H145.847Z" fill={`${fillColor}`}/>
<path d="M152.939 17.25H147.5V3H160.448C164.604 3 166.443 4.34072 166.443 6.65826V6.86894C166.443 8.93749 164.642 9.79938 163.57 10.0484C165.332 10.4506 166.5 11.5998 166.5 13.4385V15.5454C166.5 16.5413 166.634 16.9052 166.768 17.1542V17.25H161.214C161.08 17.0968 161.041 16.9052 161.041 16.503V14.8367C161.041 13.2086 160.294 12.3659 158.149 12.3659H152.939V17.25ZM152.939 8.91833H159.183C160.39 8.91833 160.831 8.38205 160.831 7.69252V7.67338C160.831 7.00301 160.409 6.46671 159.183 6.46671H152.939V8.91833Z" fill={`${fillColor}`}/>
</svg>  
    ]



return (
    <>
    {    variant === LogoTypes.Icon && logos[0]}
{    variant === LogoTypes.Logo && logos[1]}
    </>
 
)


}


export default SuperManifoldLogo





// export default function SuperManifoldLogo( ): React.FC<ISuperManifoldLogoProps>  {
// export default function SuperManifoldLogo({ fillColor, variant }) : React.FC<ISuperManifoldLogoProps> {

// export default function SuperManifoldLogo({ fillColor: string, variant }) {
