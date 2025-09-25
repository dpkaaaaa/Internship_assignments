import React, { useState } from "react";
import Input from "../components/Input";
import RadioButton from "../components/Radiobutton";
import Checkbox from "../components/Checkbox";
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        agree: false
    });

    const [errors, setErrors] = useState({});

    // Regex patterns
    const regex = {
        name: /^[a-zA-Z ]{2,30}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validate = () => {
        const tempErrors = {};

        if (!regex.name.test(formData.name)) tempErrors.name = "Enter a valid name";
        if (!regex.email.test(formData.email)) tempErrors.email = "Enter a valid email";
        if (!regex.password.test(formData.password))
            tempErrors.password = "Password must be 8+ chars with uppercase, lowercase & number.";
        if (!formData.gender) tempErrors.gender = "Select your gender";


        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            console.log(formData);
            setFormData({ name: "", email: "", password: "", gender: "", agree: false });
            setErrors({});
        }
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} noValidate>
                <Input label="Name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} error={errors.name} />
                <Input label="Email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} error={errors.email} />
                <Input label="Password" type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} error={errors.password} />
                <RadioButton label="Gender" name="gender" options={["male", "female"]} value={formData.gender} onChange={handleChange} error={errors.gender} />
                <Checkbox name="agree" checked={formData.agree} onChange={handleChange} label="Remember me" error={errors.agree} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
