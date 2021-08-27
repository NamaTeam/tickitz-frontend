import { Navbar, Footer} from '../../../components'
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
/* import { FetchCinema} from "../../../Redux/Actions/cinema" */
import { useForm } from 'react-hook-form';
import '../styles/style.css'
import { AddMovie } from '../../../Redux/Actions/movie';
import { useHistory } from 'react-router';

const AddMovieAdmin = () =>{
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [poster, SetPoster] = useState([])
    const dispatch = useDispatch()
    const formData = new FormData()

    const addData = (data)=>{
        const duration = `${data.hours} hour ${data.min} min`
        formData.append('poster', poster[0])
        formData.append('duration', duration)
        formData.append('title', data.title)
        formData.append('category', data.category)
        formData.append('release_date', data.release_date)
        formData.append('actors', data.actors)
        formData.append('synopsis', data.synopsis)
        dispatch(AddMovie(formData,history))
        console.log(formData)
    }

    return(
        <>
            <Navbar/>
                <section className='container-fluid bg-grey'>
                    <div className='row'>
                        <div className='col-12 col-md-12 my-5 px-5'>
                            <h3 className='fw-bold'>Movie Description</h3>
                            <form className='mt-3 mb-5 row form-user py-3' onSubmit={handleSubmit(addData)}>
                            <div className='movie-box card-body row shadow-sm'>
                                <div className="col-12 col-md-5 d-flex justify-content-center my-5">
                                    <div className='movie-poster mx-auto'>
                                    <label>
                                        <input type="file" name="photo" accept="image/*" onChange={(e) => SetPoster(e.target.files)}/>
                                        <img src={`${process.env.PUBLIC_URL}/logo/no-photo.png`} alt="poster" className='img-fluid'/>
                                    </label>
                                    </div>
                                </div>
                                <div className='col-12 col-md-7'>
                                   
                                        <div className='col-12 col-md-12 mb-3'>
                                            <label htmlFor="inputFirstName" className="my-4">Movie Name</label>
                                            <input {...register("title", { required: "title can't be empty" })} type="text"  className={`title form-control bg-light ${errors.title ? 'is-invalid' : ''}`} id="inputFirstName" />
                                            <small className='text-danger ms-3 fw-bold'>{errors?.title?.message}</small>
                                        </div>
                                        <div className='mt-4 col-12 col-md-12 mb-4'>
                                            <label htmlFor="inputLastName" className="mb-3">Category</label>
                                            <input  {...register("category", { required: "category can't be empty" })} type="text" className={`category form-control bg-light ${errors.category ? 'is-invalid' : ''}`} id="inputLastName" />
                                            <small className='text-danger ms-3 fw-bold'>{errors?.category?.message}</small>
                                        </div>
                                        <div className='mt-4 col-12 col-md-12 mb-4'>
                                            <label htmlFor="inputLastName" className="mb-3">Synopsis</label>
                                            <textarea  {...register("synopsis", { required: "category can't be empty" })} type="text" className={`category form-control bg-light ${errors.synopsis ? 'is-invalid' : ''}`} id="inputLastName" />
                                            <small className='text-danger ms-3 fw-bold'>{errors?.synopsis?.message}</small>
                                        </div>
                                        <div className='mt-4 col-12 col-md-12 mb-4'>
                                            <label htmlFor="inputLastName" className="mb-3">Actors</label>
                                            <input  {...register("actors", { required: "category can't be empty" })} type="text" className={`category form-control bg-light ${errors.actors ? 'is-invalid' : ''}`} id="inputLastName" />
                                            <small className='text-danger ms-3 fw-bold'>{errors?.actors?.message}</small>
                                        </div>
                                        <div className='mt-4 col-12 col-md-6 mb-4'>
                                            <label className="mb-3">Release date</label>
                                            <input {...register("release_date", { required: "release date can't be empty" })} type="date" className={`release_date form-control bg-light ${errors.release_date ? 'is-invalid' : ''}`} id="inputEmail"/>
                                            <small className='text-danger ms-3 fw-bold'>{errors?.release_date?.message}</small>
                                        </div>
                                        <div className='mt-4 col-12 col-md-6 mb-4'>
                                            <label htmlFor="hout min" className="mb-3">Duration</label>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="hout min" className="mb-3">Hour / </label>
                                                    <input  {...register("hours", { required: "hours can't be empty" })} type="number" className={`release_date form-control bg-light ${errors.hours ? 'is-invalid' : ''}`} placeholder="Hour" aria-label="Hour" />
                                                    <small className='text-danger ms-3 fw-bold'>{errors?.hours?.message}</small>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="hout min" className="mb-3">Min</label>
                                                    <input {...register("min", { required: "min can't be empty" })} type="number" className={`release_date form-control bg-light ${errors.min ? 'is-invalid' : ''}`} placeholder="Minute" aria-label="min" />
                                                    <small className='text-danger ms-3 fw-bold'>{errors?.min?.message}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-4 col-12 col-md-6 mb-4'>
                                            <div className='d-grid gap-5'>
                                                <button className='btn btn-outline-purple btn-lg' onClick={handleSubmit(addData)}>Tambah</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </form>
                        </div>                        
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default AddMovieAdmin