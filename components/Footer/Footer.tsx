

import logo from "../../assets/logo/logo.png";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import styles from './styles.module.css'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="p-10 bg-gray-200">
          <div className="lg:flex lg:gap-40">
            <div>
              <Image
                src={logo}
                style={{ width: "200px", objectFit: "contain" }}
                alt="Logo"
              />
              <p>Ekpoloke, A Bangladeshi Ecommerce Platform.</p>
              <div className={styles.footerSocialLinks}>

                <Link href="">
                  <FiFacebook />
                </Link>
                <Link href="">
                  <FiTwitter />
                </Link>
                <Link href="">
                  <FiLinkedin />
                </Link>
                <Link href="">
                  <FiInstagram />
                </Link>

              </div>
            </div>

            <div className={styles.footerLinks}>
              <h2 className="font-bold text-2xl lg:pt-1 pt-8">Quick Links</h2>
              <div className="p-2">
                <Link href={`/helpCenter`} className="block">
                  Help Center
                </Link>
                <Link href={`/cart`} className='block'>
                  Cart
                </Link>
                <Link href={`/favorites`} className='block'>
                  Favorites
                </Link>
                <Link href={`/account/orders`} className='block'>
                  Advertisement
                </Link>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h2 className="font-bold text-2xl lg:pt-1 pt-8">Company</h2>
              <Link href={`/about`} className='block pt-2'>
                About us
              </Link>
              <Link href={`/contact`} className='block'>
                Contact
              </Link>
              <Link href={`/jobs`} className='block'>
                Jobs
              </Link>
              <Link href={`/press`} className='block'>
                Press kit
              </Link>
            </div>
            <div className={styles.footerLinks}>
              <h2 className="font-bold text-2xl lg:pt-1 pt-8">Legal</h2>
              <Link href={`/terms`} className='block pt-2'>
                Terms of use
              </Link>
              <Link href={`/privacy`} className='block'>
                Privacy policy
              </Link>
              <Link href={`/cookie`} className='block'>
                Cookie policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="w-full flex items-center bg-gray-200 justify-center py-5 bg-base-200">
        <span>&copy; 2023 Ekpoloke. All Rights Reserved</span>

      </footer>
    </>
  );
};

export default Footer;
