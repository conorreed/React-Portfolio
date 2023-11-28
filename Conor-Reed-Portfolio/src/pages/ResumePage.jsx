import Resume from '../components/Resume';

const ResumePage = () => {
  return (
    <div className="container mt-5">
      <h2 className="display-4">Resume</h2>
      <div className="row">
        <div className="col-md-8">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
