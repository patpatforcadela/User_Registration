import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

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
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            {/* <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
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
    )
}