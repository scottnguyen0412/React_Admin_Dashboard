import {Box, Button, TextField} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
// Thiết lập giá trị ban đầu cho input form
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",

}

const phoneNumberRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// Validation form
const userSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Not correct format! The email must example@gmail.com").required("Email is required"),
    contact: yup.string().matches(phoneNumberRegex, "Phone Number is not valid")
                .required("Phone number is required"),
    address1: yup.string().required("Address 1 is required"),
    address2: yup.string().required("Address 2 is required"),
});
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleSubmit = (values) => {
        console.log(values);

    }

    return (<Box m="20px">
        <Header title="Create User Form" subTitle="Create New User Profile"/>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({values, errors, touched, handleBlur, handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit}>
                    <Box display="grid" gap="30px" m="10px"
                            gridTemplateColumns="repeat(4, minmax(0,1fr)"
                            sx={{
                                "& > div": {gridColumn: isNonMobile ? undefined:"span 4"},
                            }}
                            >
                                <TextField fullWidth variant='filled' type="text" label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    // hiển thị lỗi các input field đã chạm
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx = {{gridColumn:"span 2"}}
                                />
                                <TextField fullWidth variant='filled' type="text" label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    // hiển thị lỗi các input field đã chạm
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx = {{gridColumn:"span 2"}}
                                />
                                <TextField fullWidth variant="filled" type="email" label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField fullWidth variant="filled" type="text" label="Contacts"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField fullWidth variant="filled" type="text" label="Address 1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name="address1"
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={touched.address1 && errors.address1}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField fullWidth variant="filled" type="text" label="Address 2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name="address2"
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={touched.address2 && errors.address2}
                                    sx={{ gridColumn: "span 4" }}
                                />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color='success'  variant="contained"                            
                        >Create</Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
    );
};

export default Form;


