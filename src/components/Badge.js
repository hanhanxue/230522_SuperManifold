
import styles from './Badge.module.scss'

// THE BUTTON COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR

export default function Badge({children}) {

    return (

    <div className={`${styles.badge} `}>
        <span className={`type-sm font-medium`}>{children}</span>
    </div>
    );
  }


  // px-4 
  // bg-zinc-100 mr-4 py-3 rounded-xl 
  // hover:bg-zinc-200 
  // active:bg-zinc-400 
  // active:text-white