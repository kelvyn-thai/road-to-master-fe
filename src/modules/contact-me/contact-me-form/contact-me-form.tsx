"use client";

import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldErrors } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Form,
  FormField,
  FormFieldWrapper,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/core/ui";
import { useToast } from "@/hooks";
import { cn } from "@/lib/utils";
import { delay } from "@/utils";

export const Types = ["hireMe", "openSource", "other"] as const;

export type TypesEnum = (typeof Types)[number]; // or z.infer<typeof Types>

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  type: z.enum(Types),
  message: z.string().nonempty(),
});

export type FormType = z.infer<typeof formSchema>;

function ContactMeForm() {
  const { toast } = useToast();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      type: faker.helpers.arrayElement(Types),
      message: faker.lorem.paragraph(),
    },
    mode: "onChange",
  });
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = form;

  const onValid = async (data: FormType) => {
    console.log({ data });
    await delay(2000);

    toast({
      title: "All good!",
      description: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      variant: "success",
    });
  };

  const onInvalid = (errors: FieldErrors<FormType>) => {
    console.error({ errors });

    toast({
      title: "Oops!",
      description: `Something went wrong, please try again later!`,
      variant: "error",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(
          (data) => onValid(data),
          (errors) => onInvalid(errors),
        )}
        className="text-white"
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormFieldWrapper
              label="Your name"
              description="This is your public display name."
              isRequired
            >
              <Input {...field} type="text" placeholder="Enter your name" />
            </FormFieldWrapper>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormFieldWrapper
              label="Your email"
              description="This is your email."
              isRequired
            >
              <Input {...field} type="email" placeholder="Type your email" />
            </FormFieldWrapper>
          )}
        />
        <FormField
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <FormFieldWrapper
                label="Type of enquiry"
                description="This is your type of enquiry."
                isRequired
              >
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={Types[0]}>
                        Freelance project proposal
                      </SelectItem>
                      <SelectItem value={Types[1]}>
                        Open source consultancy session
                      </SelectItem>
                      <SelectItem value={Types[2]}>Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormFieldWrapper>
            );
          }}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormFieldWrapper
              label="Your message"
              description="This is your message!"
              isRequired
            >
              <Textarea
                {...field}
                placeholder="Type your message here."
                className="h-40"
              />
            </FormFieldWrapper>
          )}
        />
        <Button
          type="submit"
          className={cn(
            "mt-4 w-full bg-violet-500 hover:bg-violet-400 hover:shadow-xl",
          )}
          disabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ContactMeForm;
