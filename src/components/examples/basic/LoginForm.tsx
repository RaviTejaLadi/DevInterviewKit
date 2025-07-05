import React, { useReducer } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

interface State {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
}

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof FormData; value: string }
  | { type: 'SET_ERRORS'; errors: FormErrors }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_END' };

const initialState: State = {
  formData: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  isSubmitting: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      };
    case 'SUBMIT_END':
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};

const validateForm = (formData: FormData): { errors: FormErrors; isValid: boolean } => {
  const errors: FormErrors = {
    email: '',
    password: '',
  };
  let isValid = true;

  if (!formData.email) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
    isValid = false;
  }

  if (!formData.password) {
    errors.password = 'Password is required';
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  return { errors, isValid };
};

const LoginForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name as keyof FormData, value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const { errors, isValid } = validateForm(state.formData);

    dispatch({ type: 'SET_ERRORS', errors });

    if (isValid) {
      dispatch({ type: 'SUBMIT_START' });
      // Simulate API call
      setTimeout(() => {
        alert(`Logged in as ${state.formData.email}`);
        dispatch({ type: 'SUBMIT_END' });
      }, 1000);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-inherit text-foreground border-gray-300 rounded"
          />
          {state.errors.email && <div className="text-red-500 text-sm mt-1">{state.errors.email}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.formData.password}
            onChange={handleChange}
            className="w-full p-2 border bg-inherit text-foreground border-gray-300 rounded"
          />
          {state.errors.password && <div className="text-red-500 text-sm mt-1">{state.errors.password}</div>}
        </div>
        <button
          type="submit"
          disabled={state.isSubmitting}
          className={`w-full p-2 rounded text-white ${
            state.isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {state.isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
