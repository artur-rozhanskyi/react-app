import { Formik } from "formik";
import { BasicInput } from "@/components/BasicInput";
import { BasicButton } from "@/components/BasicButton";
import { useDispatch, useSelector } from "react-redux";
import { loginByEmail } from "../model/thunks";
import { selectAuthError, selectAuthLoading } from "../model/selectors";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => dispatch(loginByEmail(values))}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <BasicInput
                label="Login"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              ></BasicInput>
              {errors.email && touched.email && errors.email}
            </div>

            <div>
              <BasicInput
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></BasicInput>
              {errors.password && touched.password && errors.password}
            </div>
            <BasicButton type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? "Loading..." : "Login"}
            </BasicButton>
            {error && <p>{error}</p>}
          </form>
        )}
      </Formik>
  );
};
