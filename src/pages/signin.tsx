import { SubmitHandler, useForm } from "react-hook-form";
import { Submit, EmailInput } from "~/components/form";
import { Layout, SEO, Header, Footer } from "~/components/layout";

type FormValues = {
  fullName: string;
  email: string;
};

const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <SEO title="Sign in" />
      <Header />
      <main>
        <div className="flex place-items-center place-content-center h-screen">
          <form
            className="max-w-sm flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl text-center">Sign in</h1>
            <EmailInput
              name="email"
              label="Email"
              placeholder="Enter email"
              register={register}
              required
            />

            <div className="my-4">
              <Submit disabled={!isDirty || !isValid || isSubmitting}>
                Signin
              </Submit>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Signin;
