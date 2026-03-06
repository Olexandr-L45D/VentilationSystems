import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ContactMapModal from "../../components/ContactMapModal/ContactMapModal";
import PdfActionsCondition from "../../components/ConditionsMenu/ConditionsMenu";
import css from "./CompanyTermsPage.module.css";
import Haria from "../../assets/images/Haria.png";

export default function CompanyTermsPage() {
  return (
    <main className={css.page}>
      {/* HERO */}
      <header className={css.hero}>
        <div className={css.wrapperTop}>
          <h1 className={css.heroTitle}>Company & Terms</h1>

          <figure className={css.titleHari}>
            <img
              className={css.imagesHaria}
              src={Haria}
              alt="Haria company logo"
            />
          </figure>

          <p className={css.heroText}>
            Everything you need to know about our company and cooperation terms
          </p>
        </div>
      </header>

      {/* ABOUT */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>About the Company</h2>

          <article className={css.content}>
            <p>
              We are a B2B supplier of industrial ventilation, valves and heat
              exchangers for factories, production plants, bakeries, paint shops
              and industrial facilities.
            </p>

            <p>
              Our expertise includes air cooling, dust extraction, vapor exhaust
              systems and custom ventilation solutions for demanding industrial
              environments.
            </p>
          </article>
        </div>
      </section>

      {/* TEAM */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Team & Management</h2>

          <article className={css.content}>
            <ul className={css.list}>
              <li>Management</li>
              <li>Sales Managers</li>
              <li>Logistics Department</li>
              <li>Accounting</li>
            </ul>

            <p className={css.note}>
              You always know who is responsible for your order.
            </p>
          </article>
        </div>
      </section>

      {/* COOPERATION */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Cooperation Terms</h2>

          <ul className={css.list}>
            <li>B2B cooperation (companies, factories, distributors)</li>
            <li>Wholesale and dealer partnerships available</li>
            <li>Minimum order quantity may apply</li>
            <li>Order processing time: 1–3 business days</li>
          </ul>
        </div>
      </section>

      {/* PAYMENT */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Payment Terms</h2>

          <ul className={css.list}>
            <li>Bank Transfer (cashless)</li>
            <li>Invoice payment</li>
            <li>Prepayment / postpayment by agreement</li>
          </ul>
        </div>
      </section>

      {/* DELIVERY */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Delivery Terms</h2>

          <ul className={css.list}>
            <li>EXW / FCA / courier services</li>
            <li>Delivery time depends on destination</li>
            <li>Responsibility according to Incoterms</li>
            <li>
              EXW Black Icon Srl — Via Santa Maria, 84, 36030 Sarcedo (VI),
              Italy
            </li>
          </ul>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Documents</h2>

          <div className={css.docActions}>
            <PdfActionsCondition
              viewUrl="/pdfs/mnItalvent_1.pdf"
              downloadUrl="/pdfs/mnItalvent_1.pdf"
            />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>Contacts & Location</h2>

          <address className={css.contacts}>
            <p>
              Via Santa Maria, 84 <br />
              36030 Sarcedo (VI), Italy
            </p>

            <p>
              <AiFillPhone /> +39 366 388 3621
            </p>

            <p>
              <AiFillPhone /> +39 338 65 28 541
            </p>

            <p>
              <MdEmail /> lyubov@blackicon.it
            </p>

            <ContactMapModal />
          </address>
        </div>
      </section>
    </main>
  );
}
