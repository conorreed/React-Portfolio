import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Contact Me</h1>
      <div className="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          {/* Additional content or information can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
