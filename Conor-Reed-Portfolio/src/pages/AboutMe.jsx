const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">About Me</h1>
      <div className="row">
        <div className="col-md-4">
          <img src="/AboutMePhoto.jpg" className="img-fluid rounded-circle" alt="Profile" />
        </div>
        <div className="col-md-8">
          <p>
            Hey, my name is Conor Reed, and I have always had a passion for learning and competition. From a young age, I was interested in learning about the past and finding ways to relate it to the present. It came as no surprise when I decided to get a bachelors degree in History.
            While in community college, I had dabbled in programming courses where I learned the basics of C++. At the time, this did not seem like the correct path because I was not able to see myself using it. Recently, I completed a 3-month full-stack web development boot camp where I was able to receive comprehensive training in many different technologies such as HTML, CSS, JavaScript, MySQL, MongoDB, React, and others. What began as a path for a stable career ended up sparking a desire to learn more while continuing to grow as a web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
