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
            lastName: user ? user.lastName : ""
        }
    });
    const classes = useStyles();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (
        <div className="form-group main-container">
            <form onSubmit={submitHandler} class="row g-3">
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
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputNumber" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" id="inputNumber" />
                </div>

                <div class="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Sex</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select your sex.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputBirthplace" className="form-label">Birthplace</label>
                    <input type="text" className="form-control" id="inputBirthplace" />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter your permanent address" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputProvince" className="form-label">Province</label>
                    <input type="text" className="form-control" id="inputProvince" placeholder="Enter your Province" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Enter your City" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
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