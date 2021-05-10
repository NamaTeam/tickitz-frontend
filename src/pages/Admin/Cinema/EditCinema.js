import { Navbar, Footer } from "../../../components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { FetchCinema} from "../../../Redux/Actions/cinema" */
import { useForm } from "react-hook-form";
import "../styles/style.css";
import { UpdateCinema, FetchCinemaById } from '../../../Redux/Actions/cinema'
import { useHistory, useParams } from "react-router";

const EditCinemaAdmin = () => {
  const history = useHistory()
  const { id } = useParams()
  const { data: cinema } = useSelector(state => state.FetchCinemaById)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [logo, SetLogo] = useState({
    logo: []
  });
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch();
  const formData = new FormData();

  const editData = (data) => {
    if (logo.logo.length > 0) {
      formData.append("logo", logo.logo[0]);
      formData.append('name', data.name || cinema.name)
      formData.append('street', data.street || cinema.street)
      formData.append('street_number', data.street_number || cinema.street_number)
      formData.append('city', formData.city || cinema.city)
    } else {
      formData.append('name', data.name || cinema.name)
      formData.append('street', data.street || cinema.street)
      formData.append('street_number', data.street_number || cinema.street_number)
      formData.append('city', formData.city || cinema.city)
    };
    dispatch(UpdateCinema(id, formData, history))
  }

  useEffect(() => {
    dispatch(FetchCinemaById(id))
  }, [id])

  return (
    <>
      <Navbar />
      {cinema && (
        <section className="container-fluid bg-grey">
          <div className="row">
            <div className="col-12 col-md-12 my-5 px-5">
              <h3 className="fw-bold">Movie Description</h3>
              <form
                className="mt-3 mb-5 row form-user py-3"
                onSubmit={handleSubmit(editData)}
              >
                <div className="movie-box card-body row shadow-sm">
                  <div className="col-12 col-md-5 d-flex justify-content-center my-5">
                    <div className="mx-auto">
                      <label>
                        <input
                          type="file"
                          name="photo"
                          accept="image/*"
                          multiple
                          onChange={(e) => SetLogo({ logo: e.target.files })}
                          disabled={disable}
                        />
                        <img
                          src={`${process.env.REACT_APP_API_IMG_URL}${cinema.logo}`}
                          alt="logo"
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
                        {...register("name")}
                        type="text"
                        className={`name form-control bg-light ${errors.name ? "is-invalid" : ""
                          }`}
                        id="name"
                        defaultValue={cinema.name}
                        disabled={disable}
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
                        {...register("city")}
                        type="text"
                        className={`city form-control bg-light ${errors.city ? "is-invalid" : ""
                          }`}
                        id="city"
                        defaultValue={cinema.city}
                        disabled={disable}
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
                        {...register("street")}
                        type="text"
                        className={`category form-control bg-light ${errors.street ? "is-invalid" : ""
                          }`}
                        id="street"
                        defaultValue={cinema.street}
                        disabled={disable}
                      />
                      <small className="text-danger ms-3 fw-bold">
                        {errors?.street?.message}
                      </small>
                    </div>
                    <div className="mt-4 col-3 col-md-3 mb-4">
                      <label htmlFor="street_number" className="mb-3">
                        Street Number
                    </label>
                      <input
                        {...register("street_number")}
                        type="number"
                        className={`category form-control bg-light ${errors.street_number ? "is-invalid" : ""
                          }`}
                        id="street_number"
                        defaultValue={cinema.street_number}
                        disabled={disable}
                      />
                      <small className="text-danger ms-3 fw-bold">
                        {errors?.street_number?.message}
                      </small>
                    </div>
                    <div className="mt-4 col-12 col-md-6 mb-4">
                      <div className="d-grid gap-5">
                        {disable ? (
                          <button
                            className="btn btn-outline-purple btn-lg"
                            onClick={() => setDisable(false)}
                          >
                            Edit Cinema
                          </button>
                        ) : (

                          <button
                            className="btn btn-outline-purple btn-lg"
                            onClick={handleSubmit(editData)}
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default EditCinemaAdmin;
