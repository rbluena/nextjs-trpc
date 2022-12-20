import { SubmitHandler, useForm } from "react-hook-form";
import { Submit, EmailInput } from "~/components/form";
import { Layout, SEO, Header, Footer } from "~/components/layout";
import { trpc } from "~/lib/trpc";

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

  const mutation = trpc.user.login.useMutation();

  /**
   * Sending verification token when email submitted
   * @param data FormValues
   */
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
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
            {mutation.error ? (
              <span className="text-cerise-600">{mutation.error.message}</span>
            ) : null}
            {mutation.data?.message ? (
              <span className="text-submarine-600">
                {mutation.data.message}
              </span>
            ) : null}

            <EmailInput
              name="email"
              label="Email"
              placeholder="Enter email"
              register={register}
              required
            />

            <div className="my-4">
              <Submit
                disabled={
                  mutation.isLoading || !isDirty || !isValid || isSubmitting
                }
              >
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
