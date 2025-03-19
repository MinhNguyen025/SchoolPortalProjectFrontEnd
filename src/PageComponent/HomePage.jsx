import React from "react";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import { Link } from "react-router-dom";
import timetable1 from "../images/timetable_1.png";
import timetable2 from "../images/timetable_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel />

      <div className="container mt-5">
        {/* Giới thiệu hệ thống */}
        <div className="row align-items-center">
          <div className="col-md-8 text-color">
            <h1 className="mb-4">School Portal Management System</h1>
            <p className="lead">
              Welcome to the School Portal, where organization meets efficiency.
              Our platform streamlines the complex task of scheduling courses,
              managing resources, and facilitating collaboration among faculty
              and students. Experience the ease of a modern academic timetable
              management system.
            </p>
            <p>
              Say goodbye to manual scheduling headaches and hello to a smarter
              way of managing academic timetables. Whether you're a student
              looking for your class schedule or an administrator coordinating
              courses, our system ensures smooth operations and effective
              communication at every step.
            </p>
            <Link to="/user/login" className="btn btn-primary mt-3">
              Get Started
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={timetable2}
              alt="Timetable Preview"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <hr className="my-5" />

        {/* Giới thiệu tính năng quản lý */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={timetable1}
              alt="Schedule Overview"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-8 text-color">
            <h2 className="mb-4">Efficient School Management System</h2>
            <p className="lead">
              In today's fast-paced academic environment, effective time management
              is essential for success. Our system provides tools and resources to help
              students and faculty optimize their schedules, prioritize tasks, and maximize
              productivity.
            </p>
            <p>
              With customizable calendars, task lists, and timely reminders, our platform
              empowers you to stay organized and focused even when juggling multiple classes,
              assignments, or extracurricular activities.
            </p>
            <Link to="/user/login" className="btn btn-primary mt-3">
              Get Started
            </Link>
          </div>
        </div>

        <hr className="my-5" />

        {/* Phần tính năng nổi bật */}
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Our Key Features</h2>
            <p className="text-muted">Designed to simplify your academic life</p>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Interactive Timetables</h5>
                <p className="card-text">
                  Easily navigate your schedule with dynamic, user-friendly timetables that adapt to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Resource Management</h5>
                <p className="card-text">
                  Efficiently manage classroom assignments, course materials, and more – all in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Real-Time Notifications</h5>
                <p className="card-text">
                  Stay updated with instant alerts on schedule changes, deadlines, and campus events.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* Phần đánh giá từ người dùng */}
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>What Our Users Say</h2>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "This platform has transformed the way I manage my academic schedule.
                    The interface is intuitive and the features are exactly what I needed!"
                  </p>
                  <footer className="blockquote-footer">Jane Doe, Student</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "As an administrator, coordinating courses and managing resources used to be a headache.
                    Now everything is streamlined and efficient thanks to this system."
                  </p>
                  <footer className="blockquote-footer">John Smith, Administrator</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
