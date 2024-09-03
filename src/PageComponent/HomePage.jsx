import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import { Link } from "react-router-dom";
import timetable1 from "../images/timetable_1.png";
import timetable2 from "../images/timetable_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1>School Portal Management System</h1>
            <p>
            Welcome to the School Portal, where organization meets efficiency. Our platform streamlines the complex task of scheduling courses, managing resources, and facilitating collaboration among faculty and students. With intuitive features and user-friendly interfaces, we empower educational institutions to optimize their timetables with ease.

Say goodbye to manual scheduling headaches and hello to a smarter way of managing academic timetables. Whether you're a student looking for your class schedule or an administrator coordinating courses, our system ensures smooth operations and effective communication at every step.
            </p>
            <p>
              Say goodbye to manual scheduling headaches and hello to a smarter
              way of managing academic timetables. Whether you're a student
              looking for your class schedule or an administrator coordinating
              courses, our system ensures smooth operations and effective
              communication at every step.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={timetable2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={timetable1}
              alt="Logo"
              width="350"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8 text-color">
            <h1 className="ms-5">Efficient Time Management System</h1>
            <p className="ms-5">
              In today's fast-paced academic environment, effective time
              management is essential for success. Our Time Management System
              provides tools and resources to help students and faculty optimize
              their schedules, prioritize tasks, and make the most of their
              time. With features like customizable calendars, task lists, and
              reminders, users can stay organized and focused on their academic
              goals.
            </p>
            <p className="ms-5">
              By leveraging technology to streamline time management processes,
              our system empowers users to be more productive and efficient in
              their daily activities. Whether you're juggling multiple classes,
              assignments, or extracurricular activities, our platform provides
              the tools you need to stay on track and achieve your objectives.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
