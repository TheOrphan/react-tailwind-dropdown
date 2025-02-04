import Dropdown from ".";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Selected value(s) of the dropdown",
    },
    options: {
      control: { type: "object" },
      description: "Array of options with value and label properties",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Allow multiple selections",
    },
    withSearch: {
      control: { type: "boolean" },
      description: "Enable search functionality",
    },
    withOutline: {
      control: { type: "boolean" },
      description: "Show outline border",
    },
    withPortal: {
      control: { type: "boolean" },
      description: "Render dropdown menu in a portal",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the dropdown",
    },
    required: {
      control: { type: "boolean" },
      description: "Mark the field as required",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text when no option is selected",
    },
    label: {
      control: { type: "text" },
      description: "Label text for the dropdown",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    zIndex: {
      control: { type: "number" },
      description: "Z-index for the dropdown menu when using portal",
    },
  },
};

export default meta;

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "5", label: "Long Long Option 3" },
  { value: "6", label: "Long Long Long Option 4" },
  { value: "7", label: "Long Long Long Long Option 5" },
  { value: "8", label: "Long Long Long Long Long Option 6" },
];

// Default dropdown
export const Default = {
  args: {
    options,
    value: "",
    onChange: (value) => console.log("Selected:", value),
    id: "default-dropdown",
    label: "Label",
    multiple: false,
    withSearch: true,
    withOutline: true,
    withPortal: false,
    placeholder: "Select an option...",
    className: "",
    error: "",
    disabled: false,
    required: false,
  },
};

// Multiple selection
export const MultipleSelection = {
  args: {
    ...Default.args,
    multiple: true,
    value: ["1", "2"],
    placeholder: "Select multiple options...",
  },
};

// With Portal
export const WithPortal = {
  args: {
    ...Default.args,
    withPortal: true,
    zIndex: 1050,
  },
};

// With Search
export const WithSearch = {
  args: {
    ...Default.args,
    withSearch: true,
    options: [
      ...options,
      { value: "9", label: "Searchable Option 1" },
      { value: "10", label: "Another Searchable Option" },
      { value: "11", label: "Yet Another Option" },
    ],
  },
};

// With Error
export const WithError = {
  args: {
    ...Default.args,
    error: "Please select a valid option",
    value: "",
  },
};

// Disabled State
export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
    value: "1",
  },
};

// Required Field
export const Required = {
  args: {
    ...Default.args,
    required: true,
    label: "Required Field",
  },
};

// Custom Styling
export const CustomStyling = {
  args: {
    ...Default.args,
    className: "min-w-[300px]",
    label: "Custom Styled Dropdown",
  },
};

// With Custom Render Option
export const CustomRenderOption = {
  args: {
    ...Default.args,
    renderOption: (option, isSelected, onSelect) => (
      <div
        key={option.value}
        className={`
          px-3 py-2 cursor-pointer flex items-center gap-2
          ${isSelected ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50"}
        `}
        onClick={onSelect}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isSelected ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
        <span>{option.label}</span>
      </div>
    ),
  },
};
