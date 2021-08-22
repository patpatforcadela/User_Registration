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
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="firstName">First name:</label>
                <input {...register('firstName')} className="form-control" type="text" name="firstName" id="firstName" />

                <label htmlFor="lastName">Last name:</label>
                <input {...register('lastName')} className="form-control" type="text" name="lastName" id="lastName" />
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