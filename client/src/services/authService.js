import {
  userLogin,
  userRegistration,
} from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide All Fields");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    // console.log(
    //   "Register",
    //   e,
    //   name,
    //   role,
    //   email,
    //   password,
    //   organisationName,
    //   hospitalName,
    //   website,
    //   address,
    //   phone
    // );
    store.dispatch(
      userRegistration({
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
