// 02 EXTERNAL

// 03 REACT / NEXTJS

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './ViewerWrapper.module.scss'


const ViewWrapper = ({ children }: {
    children: React.ReactNode;
  }) => {
  return (
    <>
      <section className={`${styles.section}`}>
        {/* SECTION */}
        {children}
      </section>
      {/* SECTION */}
    </>
  );
};

export default ViewWrapper;