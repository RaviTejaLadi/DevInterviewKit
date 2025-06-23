# React Hook Form Implementation with TypeScript and Zod

Here's a comprehensive form implementation using React Hook Form and Zod for validation, following best practices:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define validation schema with Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  age: z.number().min(18, {
    message: "You must be at least 18 years old.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  subscription: z.enum(["free", "pro", "enterprise"]),
  notifications: z.enum(["email", "sms", "none"]).array().nonempty({
    message: "Please select at least one notification method.",
  }),
  bio: z.string().max(500, {
    message: "Bio must not exceed 500 characters.",
  }).optional(),
  avatar: z.instanceof(FileList).optional(),
  birthday: z.date().refine((date) => date < new Date(), {
    message: "Birthday must be in the past.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ComprehensiveForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscription: "free",
      notifications: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    // Reset form after submission
    reset();
  };

  // Watch password value to implement confirm password validation
  const password = watch("password");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Text Input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            {...register("username")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password (custom validation) */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Number Input */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
          )}
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
            Birthday
          </label>
          <input
            id="birthday"
            type="date"
            {...register("birthday", { valueAsDate: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.birthday && (
            <p className="mt-1 text-sm text-red-600">{errors.birthday.message}</p>
          )}
        </div>

        {/* Select Dropdown */}
        <div>
          <label htmlFor="subscription" className="block text-sm font-medium text-gray-700">
            Subscription Plan
          </label>
          <select
            id="subscription"
            {...register("subscription")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          >
            <option value="free">Free</option>
            <option value="pro">Pro ($9.99/month)</option>
            <option value="enterprise">Enterprise ($29.99/month)</option>
          </select>
          {errors.subscription && (
            <p className="mt-1 text-sm text-red-600">{errors.subscription.message}</p>
          )}
        </div>

        {/* Checkbox Group */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification Preferences
          </label>
          <div className="space-y-2">
            {["email", "sms", "none"].map((method) => (
              <div key={method} className="flex items-center">
                <input
                  type="checkbox"
                  id={`notifications.${method}`}
                  value={method}
                  {...register("notifications")}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`notifications.${method}`} className="ml-2 block text-sm text-gray-700">
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.notifications && (
            <p className="mt-1 text-sm text-red-600">{errors.notifications.message}</p>
          )}
        </div>

        {/* Single Checkbox */}
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>
        {errors.terms && (
          <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
        )}

        {/* Textarea */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            {...register("bio")}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
          )}
        </div>

        {/* File Input */}
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
            Avatar
          </label>
          <input
            id="avatar"
            type="file"
            {...register("avatar")}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.avatar && (
            <p className="mt-1 text-sm text-red-600">{errors.avatar.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
```

## Key Features and Best Practices:

1. **Type Safety**:
   - Uses TypeScript with inferred types from Zod schema
   - Strongly typed form values and validation

2. **Validation**:
   - Comprehensive validation with Zod
   - Custom validation for confirm password field
   - Proper error messages for each field

3. **Form Handling**:
   - Proper loading state during submission
   - Form reset after successful submission
   - Value watching for dependent validation

4. **Input Types**:
   - Text inputs (username, email, password)
   - Number input (age)
   - Date input (birthday)
   - Select dropdown (subscription)
   - Checkbox group (notifications)
   - Single checkbox (terms)
   - Textarea (bio)
   - File input (avatar)

5. **Accessibility**:
   - Proper label associations with `htmlFor` and `id`
   - Focus states for interactive elements
   - Clear error messages

6. **UI/UX**:
   - Disabled submit button during submission
   - Loading state feedback
   - Responsive design

7. **Organization**:
   - Logical grouping of related form elements
   - Consistent styling
   - Clean component structure

To use this form, you'll need to install the required dependencies:
```bash
npm install react-hook-form @hookform/resolvers zod
```