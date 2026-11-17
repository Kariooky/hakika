import Jar from "@/components/Jar";
import OrderForm from "@/components/OrderForm";
import { IMAGES, waLink } from "@/lib/config";

const uses = [
  ["On toast", "Thick, with banana or honey."],
  ["In smoothies", "A spoonful makes it creamier and keeps you full."],
  ["In baking", "Swap it into cookies, brownies and banana bread."],
  ["In cooking", "Stir into sauces, curries and dressings."],
];

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#top">Hakika Foods</a>
          <nav>
            <a href="#story">Our story</a>
            <a href="#uses">Ways to eat it</a>
            <a href="#wholesale">Wholesale</a>
            <a className="keep" href="#order">Order</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section
          className={`hero${IMAGES.heroBg ? " has-bg" : ""}`}
          style={IMAGES.heroBg ? { backgroundImage: `url(${IMAGES.heroBg})` } : undefined}
        >
          <div className="wrap">
            <div className="cloth">
              <div className="field">
                <div>
                  <h1>Hakika</h1>
                  <p className="meaning">Swahili for “to be sure.” Be sure of what’s in your jar.</p>
                  <p className="lead">Cashew butter made in small batches from Tanzanian cashews.</p>
                  <div className="actions">
                    <a className="btn" href="#order">Order a jar</a>
                    <a className="btn ghost" href="#story">Our story</a>
                  </div>
                </div>
                <Jar photo={IMAGES.heroJar} />
              </div>
              <p className="jina">
                <span lang="sw">Hakika ni tamu</span>
                <small>Truly, it’s delicious.</small>
              </p>
            </div>
          </div>
        </section>

        <section id="order">
          <div className="wrap">
            <h2>Order on WhatsApp</h2>
            <p className="intro">
              Pick your jars, add your name and delivery area, and we’ll open WhatsApp with your
              order ready to send. We confirm delivery cost and timing there.
            </p>
            <OrderForm />
            <p className="hint">
              Prefer to chat first? <a href={waLink("Hello Hakika, I have a question.")}>Message us directly</a>.
            </p>
          </div>
        </section>

        <section className="story" id="story">
          <div className="wrap">
            <h2>Made in our kitchen</h2>
            <div>
              <p>Hakika started small, in a home kitchen, with one idea: cashew butter you can be sure about.</p>
              <p>Our cashews come from Tanzania. We prepare them in small batches and jar them ourselves, so every jar gets real attention.</p>
              <p>The name blends ours: the founder’s and his wife’s, with an H added. It also means “to be sure” in Swahili, which is the promise we make with every jar.</p>
            </div>
          </div>
        </section>

        <section className="uses" id="uses">
          <div className="wrap">
            <h2>Ways to eat it</h2>
            <ul>
              {uses.map(([t, d]) => (
                <li key={t}><b>{t}</b><span>{d}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wholesale" id="wholesale">
          <div className="wrap">
            <h2>Run a café, gym or shop?</h2>
            <p>We’d like to supply you. Message us for wholesale prices and delivery.</p>
            <a className="btn" href={waLink("Hello Hakika, I’d like to ask about wholesale.")}>Ask about wholesale</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Hakika Foods. Made in Kenya with Tanzanian cashews.</span>
          <a href={waLink("Hello Hakika, I have a question.")}>WhatsApp us</a>
        </div>
      </footer>
    </>
  );
}