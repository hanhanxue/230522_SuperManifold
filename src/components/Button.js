
import styles from './Button.module.scss'

// THE BUTTON COMPONENT WILL HAVE STYLING
// BUT NOT SPECIFY BEHAVIOR

const Button = ({onClick, kind, size, children}) => {

  const styleSize = () => {
    switch (size) {
      case 'sm':
        return `type-sm ${styles.sm} `
        case 'lg':
          return `type-lg ${styles.lg} `

    default:
      return `type-sm ${styles.noSize} `
    }
  }

  const styleKind = () => {
    switch (kind) {
      case 'ghost':
        return `${styles.ghost} `
        case 'outlined':
          return `${styles.outlined} `

    default:
      return `${styles.noKind} `
    }
  }

    return (
      <button onClick={onClick} className={`${styles.button} ${styleSize()} ${styleKind()}`}>
        <span>
        {children}
        </span>
      </button>
    );
  }

  export default Button



  
  // px-4 
  // bg-zinc-100 mr-4 py-3 rounded-xl 
  // hover:bg-zinc-200 
  // active:bg-zinc-400 
  // active:text-white