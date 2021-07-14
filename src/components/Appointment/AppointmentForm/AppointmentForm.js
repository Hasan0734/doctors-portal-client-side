import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
  overlay: {
    background: "#03031c99",
    backdropFilter: "blur(10px)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();
    fetch("https://calm-shelf-07611.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment booking successfully");
          reset();
        }
      });
  };

  const bg = {
    overlay: {
      background: "#FFFF00",
    },
  };
  return (
    <div>
      <Modal
        style={bg}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="text-color text-center">{appointmentOn}</h5>
        <p className="text-center">
          <small className="text-secondary text">
            On {date.toDateString()}
          </small>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4"
          style={{ width: "500px" }}
        >
          <div className="form-group">
            <select
              className="form-control"
              {...register("time", { required: true })}
            >
              <option disabled={true} value="Not Set">
                Select Time
              </option>
              <option value="8:00 AM to 9:00 AM">8:00 AM to 9:00 AM</option>
              <option value="10:05 AM - 11:30 AM">10:05 AM - 11:30 AM</option>
              <option value="8:00 AM to 9:00 AM">5:00 PM - 6:30 PM</option>
              <option value="8:00 AM to 9:00 AM">7:00 AM - 8:30 AM</option>
              <option value="8:00 AM to 9:00 AM">8:00 AM - 9:00 AM</option>
              <option value="8:00 AM to 9:00 AM">8:00 AM - 9:00 AM</option>
            </select>
            {errors.time && (
              <span className="text-danger">Name is required</span>
            )}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              {...register("name", { required: true })}
              placeholder="Name"
            />

            {errors.name && (
              <span className="text-danger">Name is required</span>
            )}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              {...register("phone", { required: true })}
              placeholder="Phone"
            />
            {errors.phone && (
              <span className="text-danger">Phone is required</span>
            )}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </div>
          <br />
          <div className="row form-group">
            <div className="col-md-4">
              <select
                className="form-control"
                {...register("gender", { required: true })}
                placeholder="Gender"
              >
                <option disabled={true} value="Not Set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not Set">Others</option>
              </select>
              {errors.gender && (
                <span className="text-danger">Gender is required</span>
              )}
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                {...register("weight", { required: true })}
                type="number"
                placeholder="Weight"
              />
              {errors.weight && (
                <span className="text-danger">Weight is required</span>
              )}
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                {...register("age", { required: true })}
                type="number"
                placeholder="Age"
              />
              {errors.age && (
                <span className="text-danger">Age is required</span>
              )}
            </div>
          </div>
          <br />
          <div className="form-group text-end">
            <button type="submit" className="btn px-3 main-button">
              SEND
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
