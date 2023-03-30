import React from "react";
import logo from "../../assets/logo/logo.png";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200">
        <div>
          <Image
            src={logo}
            style={{ width: "200px", objectFit: "contain" }}
            alt="Logo"
          />
          <p>Ekpoloke, A Bangladeshi Ecommerce Platform.</p>
          <div className={`${styles.footerSocialLinks}`}>
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
        <div className={`${styles.footerLinks}`}>
          <h2 className="font-bold text-2xl">Quick Links</h2>
          <Link href={`/help`} className="link link-hover">
            Help Center
          </Link>
          <Link href={`/cart`} className="link link-hover">
            Cart
          </Link>
          <Link href={`/favorites`} className="link link-hover">
            Favorites
          </Link>
          <Link href={`/account/orders`} className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div className={`${styles.footerLinks}`}>
          <h2 className="font-bold text-2xl">Company</h2>
          <Link href={`/about`} className="link link-hover">
            About us
          </Link>
          <Link href={`/contact`} className="link link-hover">
            Contact
          </Link>
          <Link href={`/jobs`} className="link link-hover">
            Jobs
          </Link>
          <Link href={`/press`} className="link link-hover">
            Press kit
          </Link>
        </div>
        <div className={`${styles.footerLinks}`}>
          <h2 className="font-bold text-2xl">Legal</h2>
          <Link href={`/terms`} className="link link-hover">
            Terms of use
          </Link>
          <Link href={`/privacy`} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={`/cookie`} className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="w-full flex items-center justify-center py-5 bg-base-200">
        <span>&copy; 2022 Ekpoloke. All Rights Reserved</span>
      </footer>
    </>
  );
};

export default Footer;
