import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/johnnash03/todo-app"
        target="_blank"
        title="Github profile"
        rel="noopener noreferrer"
      >
        <Image
          className="github"
          src="/icon-github.svg"
          alt="github icon"
          width={50}
          height={50}
        />
        <p> github </p>
      </a>
    </footer>
  );
}
