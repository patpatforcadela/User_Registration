import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import './style.css'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

export const RegistrationForm = ({ user, onSubmit }) => {
    const { register, handleSubmit } = useForm({
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
                    <input {...register('firstName')} className="form-control" type="text" name="firstName" id="firstName" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="middleName" className="form-label">Middle name</label>
                    <input {...register('middleName')} className="form-control" type="text" name="middleName" id="middleName" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input {...register('lastName')} className="form-control" type="text" name="lastName" id="lastName" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email')} type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="number" className="form-label">Mobile Number</label>
                    <input {...register('number')} type="text" className="form-control" id="number" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="birthplace" className="form-label">Birthplace</label>
                    <input {...register('birthplace')} type="text" className="form-control" id="birthplace" />
                </div>
                {/* <div className="col-md-6">
                    <label htmlFor="sex" className="form-label">Sex</label>
                    <input {...register('sex')} type="text" className="form-control" id="sex" />
                </div> */}
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
                    <input {...register('address')} type="text" className="form-control" id="address" placeholder="Enter your permanent address" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="province" className="form-label">Province</label>
                    <input {...register('province')} type="text" className="form-control" id="province" placeholder="Enter your Province" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input {...register('city')} type="text" className="form-control" id="city" placeholder="Enter your City" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input {...register('zip')} type="text" className="form-control" id="zip" />
                </div>
                <div className="form-group">
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            backgroundColor: '#343a40',
                            color: '#fff'
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