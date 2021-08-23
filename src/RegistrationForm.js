import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { ErrorMessage } from "@hookform/error-message";
import './style.css'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

export const RegistrationForm = ({ user, onSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode: "all",
        defaultValues: {
            firstName: user ? user.firstName : "",
            middleName: user ? user.middleName : "",
            lastName: user ? user.lastName : "",
            email: user ? user.email : "",
            number: user ? user.number : "",
            birthplace: user ? user.birthplace : "",
            sex: user ? user.sex : "Male",
            address: user ? user.address : "",
            province: user ? user.province : "",
            city: user ? user.city : "",
            zip: user ? user.zip : "",
        }
    });
    const classes = useStyles();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (
        <div className="form-group main-container">
            <form onSubmit={submitHandler} className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input {...register('firstName', { required: "*First name is required." })} className="form-control" type="text" name="firstName" id="firstName" placeholder="Enter your First name" />
                    <ErrorMessage
                        errors={errors}
                        name="firstName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="middleName" className="form-label">Middle name</label>
                    <input {...register('middleName', { required: "*Middle name is required." })} className="form-control" type="text" name="middleName" id="middleName" placeholder="Enter your Middle name" />
                    <ErrorMessage
                        errors={errors}
                        name="middleName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input {...register('lastName', { required: "*Surname is required." })} className="form-control" type="text" name="lastName" id="lastName" placeholder="Enter your Surname" />
                    <ErrorMessage
                        errors={errors}
                        name="lastName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email', { required: "*Email is required." })} type="email" className="form-control" id="email" placeholder="Enter your Email address" />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="number" className="form-label">Mobile Number</label>
                    <input {...register('number', { required: "*Mobile number is required." })} type="text" className="form-control" id="number" placeholder="Enter your Mobile number" />
                    <ErrorMessage
                        errors={errors}
                        name="number"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="birthplace" className="form-label">Birthplace</label>
                    <input {...register('birthplace', { required: "*Birthplace is required." })} type="text" className="form-control" id="birthplace" placeholder="Enter your Birthplace" />
                    <ErrorMessage
                        errors={errors}
                        name="birthplace"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div class="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Sex</label>
                    <select {...register('sex')} class="form-select" id="validationCustom04" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select your sex.
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input {...register('address', { required: "*Address is required." })} type="text" className="form-control" id="address" placeholder="Enter your permanent address" />
                    <ErrorMessage
                        errors={errors}
                        name="address"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="province" className="form-label">Province</label>
                    <input {...register('province', { required: "*Province is required." })} type="text" className="form-control" id="province" placeholder="Enter your Province" />
                    <ErrorMessage
                        errors={errors}
                        name="province"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input {...register('city', { required: "*City is required." })} type="text" className="form-control" id="city" placeholder="Enter your City" />
                    <ErrorMessage
                        errors={errors}
                        name="city"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input {...register('zip', { required: "*Zip is required." })} type="text" className="form-control" id="zip" placeholder="Enter zip code" />
                    <ErrorMessage
                        errors={errors}
                        name="zip"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="form-group">
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            backgroundColor: '#343a40',
                            color: '#fff',
                            width: '100%'
                        }}
                        size="medium"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}