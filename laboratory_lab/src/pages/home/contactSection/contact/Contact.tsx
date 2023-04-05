export interface Props {
  children: React.ReactNode;
}

const Contact = (props:Props) => {
  return (
    <section>
      <div className="wrapper contact">
        <div className="contact__opacity" id = "contact">{props.children}</div>
      </div>
    </section>
  );
};

export default Contact;
