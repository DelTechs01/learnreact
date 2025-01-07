//Validation with Regex ,Custom Functions
//Error, helpText prop textfield
//Use react hook form
import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from '@mui/material';
function formAp() {
    const { register, handleSubmit, formState: {errors},
    } = useForm();
    console.log("Rendered Succesful.");
    return ( 
        <div>
            <form style={{display:"flex", flexDirection:"column", gap:5, border: "2px solid #ccc", width:"300px", margin:"150px auto"}} onSubmit= {handleSubmit((data) => console.log(data))}>
                <TextField error = {Boolean(errors.email)} helperText = {Boolean(errors.email) ? (<Typography>Inavalid Email</Typography>) : null} {...register("email", {validate: (val) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val),})} />
                <TextField error = {Boolean(errors.password)} helperText = {Boolean(errors.password) ? (<Typography>Inavalid Password.Please try again.</Typography>) : null} type="password" {...register("password", {minLength: 6, required:true})} />
                <Button disabled={Boolean(errors.email) || Boolean(errors.password)} type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};
export default formAp;