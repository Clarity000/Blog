export function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-us">
        <h5>Contact us...</h5>
      </div>
      <form action="" className="imputs">
        <input type="email" className="email-imput" name="email" />
        <input type="text" className="message-imput" name="message" />
        <div className="contact-button">
          <button>send</button>
        </div>
      </form>
    </section>
  );
}
