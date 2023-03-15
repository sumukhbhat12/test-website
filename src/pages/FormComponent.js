import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const FormComponent = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is Required"),
        email: yup.string().email("Invalid Email Format").required("Email ID is Required"),
        age: yup.number("Age Must be a Number").positive("Age cannot be negative").integer("Age must be an integer").min(18).required("Age is Required"),
        password: yup.string().min(4).max(20).required("Password is Required"),
        confirmPass: yup.string().oneOf([yup.ref("password"),null],"Passwords Mismatch").required("Confirm Password is Required"),
    })


    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });


    

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            Name : <input type='text' style={{margin:'10px'}} placeholder="Full Name" {...register("fullName")}/><p style={{color:'red'}}>{errors.fullName?.message}</p>
            <br />
            Email : <input type='text' style={{margin:'10px'}} placeholder="Email" {...register("email")}/><p style={{color:'red'}}>{errors.email?.message}</p>
            <br />
            Age : <input type='Number' style={{margin:'10px'}} placeholder="Age" {...register("age")}/><p style={{color:'red'}}>{errors.age?.message}</p>
            <br />
            Password : <input type='password' style={{margin:'10px'}} placeholder="Password" {...register("password")}/><p style={{color:'red'}}>{errors.password?.message}</p>
            <br />
            Confirm Password : <input type='password' style={{margin:'10px'}} placeholder="Confirm Password" {...register("confirmPass")}/><p style={{color:'red'}}>{errors.confirmPass?.message}</p>
            <br />
            <input type='submit' />
        </form>
    )
}