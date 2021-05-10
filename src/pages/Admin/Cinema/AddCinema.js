import { Navbar, Footer } from "../../../components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { FetchCinema} from "../../../Redux/Actions/cinema" */
import { useForm } from "react-hook-form";
import "../styles/style.css";
import { AddCinema } from '../../../Redux/Actions/cinema'
import { useHistory } from "react-router";

const AddCinemaAdmin = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [logo, SetLogo] = useState([]);
  const dispatch = useDispatch();
  const formData = new FormData();

  const addData = (data) => {
    formData.append("logo", logo[0]);
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("street", data.street);
    formData.append("street_number", data.street_number);
    dispatch(AddCinema(formData, history));
  };

  return (
    <>
      <Navbar />
      <section className="container-fluid bg-grey">
        <div className="row">
          <div className="col-12 col-md-12 my-5 px-5">
            <h3 className="fw-bold">Movie Description</h3>
            <form
              className="mt-3 mb-5 row form-user py-3"
              onSubmit={handleSubmit(addData)}
            >
              <div className="movie-box card-body row shadow-sm">
                <div className="col-12 col-md-5 d-flex justify-content-center my-5">
                  <div className="movie-poster mx-auto">
                    <label>
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        multiple
                        onChange={(e) => SetLogo(e.target.files)}
                        required
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}/logo/no-photo.png`}
                        alt="poster"
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="col-12 col-md-12 mb-3">
                    <label htmlFor="name" className="my-4">
                      Cinema Name
                    </label>
                    <input
                      {...register("name", {
                        required: "name can't be empty",
                      })}
                      type="text"
                      className={`name form-control bg-light ${errors.name ? "is-invalid" : ""
                        }`}
                      id="name"
                    />
                    <small className="text-danger ms-3 fw-bold">
                      {errors?.name?.message}
                    </small>
                  </div>
                  <div className="mt-4 col-12 col-md-12 mb-4">
                    <label htmlFor="city" className="mb-3">
                      City
                    </label>
                    <input
                      {...register("city", {
                        required: "city can't be empty",
                      })}
                      type="text"
                      className={`city form-control bg-light ${errors.city ? "is-invalid" : ""
                        }`}
                      id="city"
                    />
                    <small className="text-danger ms-3 fw-bold">
                      {errors?.city?.message}
                    </small>
                  </div>
                  <div className="mt-4 col-9 col-md-9 mb-4">
                    <label htmlFor="street" className="mb-3">
                      Street
                    </label>
                    <input
                      {...register("street", {
                        required: "Street can't be empty",
                      })}
                      type="text"
                      className={`category form-control bg-light ${errors.street ? "is-invalid" : ""
                        }`}
                      id="street"
                    />
                    <small className="text-danger ms-3 fw-bold">
                      {errors?.street?.message}
                    </small>
                  </div>
                  <div className="mt-4 col-3 col-md-3 mb-4">
                    <label htmlFor="street_number" className="mb-3">
                      street number
                    </label>
                    <input
                      {...register("street_number", {
                        required: "Street Number can't be empty",
                      })}
                      type="number"
                      className={`category form-control bg-light ${errors.street_number ? "is-invalid" : ""
                        }`}
                      id="street_number"
                    />
                    <small className="text-danger ms-3 fw-bold">
                      {errors?.street_number?.message}
                    </small>
                  </div>
                  <div className="mt-4 col-12 col-md-6 mb-4">
                    <div className="d-grid gap-5">
                      <button
                        className="btn btn-outline-purple btn-lg"
                        onClick={handleSubmit(addData)}
                      >
                        Add Cinema
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddCinemaAdmin;
