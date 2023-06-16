import "bootstrap/dist/css/bootstrap.min.css";

import members from "../../../assets/icons/membership.svg";
import coach from "../../../assets/icons/facilities.svg";
import offline from "../../../assets/icons/offline class.svg";
import online from "../../../assets/icons/online class.svg";
import appreciation from "../../../assets/icons/workout video.svg";
import "./LandingPageJumbotron.css";

const LandingPageJumbotron = () => {
  return (
    <>
      <div
        className="row m-0"
        style={{ backgroundColor: "var(--Neutral-White-100)" }}>
        <div className="row d-flex justify-content-between p-0 mb-4">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="col-lg-8 col-11 row mt-5 jumbotron-left">
              <div>
                <h1>
                  Find{" "}
                  <span style={{ color: "var(--primary-700)" }}>
                    the Right Training for
                  </span>{" "}
                  Your Healthy Lifestyle!
                </h1>
                <p>
                  We believe that everyone has unique needs and preferences when
                  it comes to training. Therefore, we offer a variety of
                  different training programs to meet the needs of each of our
                  customers.
                </p>
              </div>
              <div>
                <button
                  className="btn ps-lg-5 pe-lg-5 me-3"
                  style={{
                    backgroundColor: "var(--primary-500)",
                    color: "var(--primary-100)",
                  }}>
                  Log in
                </button>
                <button
                  className="btn pe-lg-4 ps-lg-4"
                  style={{
                    color: "var(--primary-500)",
                    borderColor: "var(--primary-500)",
                  }}>
                  Join Member
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-0 jumbotron-right">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/gif-1.gif?alt=media&token=f371325e-ebb6-4743-8114-fda3bb17b639"
              }
              alt="gif 1"
            />
          </div>
        </div>
        <div className="col-12 row mb-5 mt-5 text-center d-flex justify-content-center icon">
          <div className="col-4 col-md-2 p-0">
            <img src={members} alt="Members" />
            <h3>10M+</h3>
            <p>Members</p>
          </div>
          <div className="col-4 col-md-2 p-0">
            <img src={coach} alt="Best Coach" />
            <h3>35</h3>
            <p>Best Coach</p>
          </div>
          <div className="col-4 col-md-2 p-0">
            <img src={offline} alt="Offline Class" />
            <h3>50+</h3>
            <p>Offline Class</p>
          </div>
          <div className="col-4 col-md-2 p-0">
            <img src={online} alt="Online Class" />
            <h3>70+</h3>
            <p>Online Class</p>
          </div>
          <div className="col-4 col-md-2 p-0">
            <img src={appreciation} alt="Appreciation" />
            <h3>100+</h3>
            <p>Appreciation</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reach">
          <h3
            className="p-5 text-center t-3"
            style={{ color: "var(--primary-600)", fontWeight: "bold" }}>
            Reach Optimal Health with GoFit!
          </h3>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/classy-3b1b1.appspot.com/o/gif-2.gif?alt=media&token=ef971e99-737d-4af6-9da4-50a947c7af95"
            }
            alt="gif2"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageJumbotron;
