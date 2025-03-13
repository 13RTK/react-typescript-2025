import styles from './Container.module.css';

function Container({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export default Container;
