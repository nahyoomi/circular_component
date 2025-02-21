import { useForm } from "react-hook-form";
import { LoanRequestData, LoanFormProps } from "../types";
import { submitLoanRequest } from "../services/submitLoanRequest";


const LoanForm: React.FC<LoanFormProps> = ({
  user,
  onSubmitSuccess,
  onSubmitFailure,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoanRequestData>({
    defaultValues: {
      id: user?.id,
      phone: user?.phone,
      age: user?.age,
      loan_amount: undefined,
      loan_date: "",
      loan_weeks: undefined,
      check: false,
    },
  });

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const onSubmit = async (data: LoanRequestData) => {
    try {
      await submitLoanRequest(data);
      onSubmitSuccess(data);
      reset();
    } catch (error: unknown) {
      const err = error as Error;
      onSubmitFailure(err.message);
      console.error("Error al enviar la solicitud:", err);
    }
  };

  const validateLoanAmount = (value: number) => {
    return (
      (value > 10 && value <= 1000) || "Loan amount must be between 10 and 1000"
    );
  };

  const validateLoanWeeks = (value: number) => {
    return (
      (value >= 1 && value <= 20) || "Return weeks must be between 1 and 20"
    );
  };

  return (
    <div className="max-w-2xl mx-auto my-8 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Loan Request Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="id" className="block text-gray-700 font-medium">
              ID
            </label>
            <input
              type="number"
              id="id"
              {...register("id")}
              defaultValue={user?.id}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed p-2"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.name}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed p-2"
            />
          </div>
          <div>
            <label
              htmlFor="surname"
              className="block text-gray-700 font-medium"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              defaultValue={user?.surname}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed p-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^\+?\d+$/,
                message: "Must be a valid phone number",
              },
              setValueAs: (value: string) => value.trim(),
            })}
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="age" className="block text-gray-700 font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Must have at least 18" },
            })}
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.age && (
            <span className="text-red-500 text-sm">{errors.age.message}</span>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="loan_amount"
            className="block text-gray-700 font-medium"
          >
            Loan amount
          </label>
          <input
            type="number"
            id="loan_amount"
            step="0.01"
            {...register("loan_amount", {
              required: "Amount is required",
              valueAsNumber: true,
              validate: validateLoanAmount,
            })}
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.loan_amount ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.loan_amount && (
            <span className="text-red-500 text-sm">
              {errors.loan_amount.message}
            </span>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="loan_date"
            className="block text-gray-700 font-medium"
          >
            Date to obtain loan
          </label>
          <input
            type="date"
            id="loan_date"
            {...register("loan_date", {
              required: "Date is required",
              validate: (value) => {
                if (value === "") return true;
                const regex = /^\d{4}-\d{2}-\d{2}$/;
                if (!regex.test(value))
                  return "Date must be in the format YYYY-MM-DD";
                return (
                  new Date(value) > new Date() ||
                  "La fecha debe ser en el futuro"
                );
              },
            })}
            min={minDate}
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.loan_date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.loan_date && (
            <span className="text-red-500 text-sm">
              {errors.loan_date.message}
            </span>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="loan_weeks"
            className="block text-gray-700 font-medium"
          >
            Time to return loan (In weeks)
          </label>
          <input
            type="number"
            id="loan_weeks"
            {...register("loan_weeks", {
              required: "Time is required",
              valueAsNumber: true,
              validate: validateLoanWeeks,
            })}
            className={`mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.loan_weeks ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.loan_weeks && (
            <span className="text-red-500 text-sm">
              {errors.loan_weeks.message}
            </span>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="check"
            className="flex items-center text-gray-700 font-medium"
          >
            <input
              type="checkbox"
              id="check"
              {...register("check", {
                required: "Must accept terms and conditions",
              })}
              className={`mr-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                errors.check ? "border-red-500" : "border-gray-300"
              }`}
            />
            I accept&nbsp;
            <a
              href="https://cloudframework.io/terminos-y-condiciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              terms and conditions
            </a>
          </label>
          {errors.check && (
            <span className="text-red-500 text-sm">{errors.check.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
        >
          Send request
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
