import { Sun, Users2, Phone, MessagesSquare, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src="/arc.svg" priority alt="" width={50} height={50} />
      <div>
        <Link href="/friends">
          <Users2 />
        </Link>
        <Link href="/call">
          <Phone />
        </Link>
        <Link href="/chats">
          <MessagesSquare />
        </Link>
        <Link href="/settings">
          <Settings />
        </Link>
        <Sun />
      </div>
    </aside>
  );
}
