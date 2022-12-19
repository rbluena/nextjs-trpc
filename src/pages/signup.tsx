import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Submit, TextInput, EmailInput } from "~/components/form";
import { Layout, SEO, Footer, Header } from "~/components/layout";
import { trpc } from "~/lib/trpc";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
};

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty },
  } = useForm<FormValues>();
  const mutation = trpc.user.create.useMutation({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    mutation.mutate(data, {
      onSuccess() {
        router.push("/signin");
      },
      onSettled() {
        setIsLoading(false);
      },
      onError() {
        setIsLoading(false);
      },
    });
  };

  return (
    <Layout>
      <SEO title="Sign up" />
      <Header />
      <main>
        <div className="flex place-items-center place-content-center h-screen">
          <form
            className="w-[280px] flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl text-center">Rigister</h1>
            {mutation.error ? mutation.error.message : null}
            <TextInput
              name="name"
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
              <Submit disabled={isLoading || !isValid || !isDirty}>
                Submit
              </Submit>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Signup;
