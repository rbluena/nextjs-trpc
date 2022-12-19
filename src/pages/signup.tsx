import { SubmitHandler, useForm } from "react-hook-form";
import { Submit, TextInput, EmailInput } from "~/components/form";
import { Layout, SEO, Footer, Header } from "~/components/layout";

type FormValues = {
  fullName: string;
  email: string;
};

const Signup = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <SEO title="Sign up" />
      <Header />
      <main>
        <div className="flex place-items-center place-content-center h-screen">
          <form
            className="max-w-sm flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl text-center">Rigister</h1>
            <TextInput
              name="fullName"
              label="Name"
              placeholder="Enter your name"
              register={register}
              required
            />
            <EmailInput
              name="email"
              label="Email"
              placeholder="Enter email address"
              register={register}
              required
            />

            <div className="my-4">
              <Submit>Submit</Submit>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Signup;
