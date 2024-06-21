import styles from "./CardSection.module.css";

interface CardSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CardSection({ title, children }: CardSectionProps) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
