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
          <a className="logo" href="#top">
            {IMAGES.logo && <img src={IMAGES.logo} alt="" width={40} height={40} />}
            Hakika Foods
          </a>
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
                  <p className="lead">Cashew butter made in small batches from East African cashews.</p>
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
              {IMAGES.logo && (
                <img className="stamp" src={IMAGES.logo} alt="Hakika Foods stamp" width={130} height={130} />
              )}
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
            <h2>A Little Kitchen, A Lot of Love.</h2>
            <div className="prose">
              <p className="lede">Every good thing has a beginning. Ours began with our first baby, who was just eight months old.</p>
              <p>As new parents, we were discovering the world of introducing our little one to different nuts and seeds. We wanted to make a simple cashew powder that we could incorporate into his meals. One day, my husband decided to put the cashews into a blender, expecting to get just that.</p>
              <p>But something unexpected happened.</p>
              <p className="pull">Instead of powder, we got cashew butter!</p>
              <p>What started as a little kitchen experiment quickly became one of our favourite discoveries. We began exploring all the wonderful ways we could enjoy it. On toast, stirred into porridge, blended into smoothies, added to recipes or simply enjoyed by the spoonful. Before long, cashew butter had become a staple in our home.</p>
              <p>And somewhere along the way, we realised that this little discovery was something worth sharing.</p>
              <p>We thought about other families, other kitchens and all the little moments around food that bring people together. We wanted more people to experience the simple goodness of cashews in a way that was honest, wholesome and delicious.</p>
              <p className="pull">And so, Hakika was born.</p>
              <p>What began with two parents trying something new for their baby grew into a passion to share something we genuinely loved with the world.</p>
              <p>Today, we bring that same love and intention into every jar. We celebrate the goodness of Tanzanian and coastal Kenyan cashews, carefully prepared in small batches, with attention to what goes into every product and, most importantly, what goes onto your family’s table.</p>
              <p>For us, Hakika is more than cashew butter. It is a reminder that sometimes the most beautiful things come from the simplest beginnings.</p>
              <p className="pull">A little curiosity. A happy accident. A kitchen filled with love.</p>
              <p className="sign">From our family kitchen to yours, Hakika. Made with love. Made with certainty.</p>
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
          <span className="foot">
            {IMAGES.logo && <img src={IMAGES.logo} alt="" width={44} height={44} />}
            © {new Date().getFullYear()} Hakika Foods. Made in Kenya with Kenyan and Tanzanian cashews.
          </span>
          <a href={waLink("Hello Hakika, I have a question.")}>WhatsApp us</a>
        </div>
      </footer>
    </>
  );
}