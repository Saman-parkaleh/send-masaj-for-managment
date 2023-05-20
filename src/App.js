import "./App.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const onsubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zuajjy9",
        "template_qfi6oey",
        e.target,
        "NAszIguKv1UQOiBKI"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success(" massage send for sucses", {
              position: toast.POSITION.TOP_CENTER,
              closeOnClick: true,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="containor  d-flex justify-content-center ">
      <div className=" box ">
        <div className=" heder  pt-5">
          <h4 className=" text-center justify-content-center">
            send masaj for managment
          </h4>
        </div>
        <form className="" onSubmit={onsubmit}>
          <div className="form-group">
            <input
              className="form-control p-3"
              placeholder="your Name "
              type="text"
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control p-3 "
              placeholder="your email "
            />
          </div>
          <div>
            <textarea
              name="message"
              className="form-control p-3"
              placeholder="fecher "
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn fw-buld form-control p-3 mt-5"
              value="Send "
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
