import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import { BasicInput } from "@/components/BasicInput";
import { BasicButton } from "@/components/BasicButton";
import { useRootStore } from "@/providers/store/rootStore.mobx";
import { loginByEmail } from "../model/thunks";
import { selectAuthError, selectAuthLoading } from "../model/selectors";

export const LoginForm = observer(() => {
  const dispatch = useDispatch();

  const isLoadingRedux = useSelector(selectAuthLoading);
  const errorRedux = useSelector(selectAuthError);

  const {
    auth: { isLoading: isLoadingMobx, error: errorMobx, loginByEmail: loginByEmailMobx },
  } = useRootStore();

  const fromStore = 'redux';

  const isLoading = fromStore === 'redux' ? isLoadingRedux : isLoadingMobx;
  const error = fromStore === 'redux' ? errorRedux : errorMobx;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={
        async (values) => {
          fromStore === 'redux' ? dispatch(loginByEmail(values.email)) : await loginByEmailMobx(values)
        }
      }
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
});
