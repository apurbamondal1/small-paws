import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <footer className="footer p-10 bg-black text-white xl:px-36">
        <div>
          <span className="footer-title font-medium text-[22px] text-white">
            QUICK LINKS
          </span>
          <Link className="link link-hover">FAQ</Link>
          <Link className="link link-hover">Contact Us</Link>
          <Link className="link link-hover">Track Order</Link>
        </div>
        <div>
          <span className="footer-title font-medium text-[22px] text-white">
            OUR POLICIES
          </span>
          <Link className="link link-hover">Privacy Policy</Link>
          <Link className="link link-hover">Refund Policy</Link>
          <Link className="link link-hover">Shipping Policy</Link>
          <Link className="link link-hover">Terms of service</Link>
        </div>
        <div>
          <span className="footer-title font-medium text-[22px] text-white">
            OUR GOAL
          </span>
          <Link className="link link-hover">Our Brand is all about</Link>
          <Link className="link link-hover"> supporting abandoned</Link>
          <Link className="link link-hover"> pets in the streets. We will</Link>
          <Link className="link link-hover"> pets in the streets. We will</Link>
          <Link className="link link-hover"> them good shelter , good </Link>
          <Link className="link link-hover"> foods and a warm </Link>
          <Link className="link link-hover">belonging </Link>
        </div>
      </footer>
      <footer className="footer px-10  border-t bg-violet-400 py-10  text-white  border-base-300">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 Tiny paws official |</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
