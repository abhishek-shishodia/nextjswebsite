import styles from "@/app/styles/navbar.module.css"

import Image from "next/image";
import Nav from "@/app/components/Nav";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">

                    <Image src="/logo.gif" alt="my logo image"  width={220} height={100}/>

                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;