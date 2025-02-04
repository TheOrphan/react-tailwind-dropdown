# React Tailwind Dropdown

## Quick Links

- 📚 Documentation & Demo: [Storybook](https://theorphan.github.io/react-tailwind-dropdown/)
- 💻 Repository: [GitHub](https://github.com/TheOrphan/react-tailwind-dropdown)
- 🚀 NPM Package: [npm](https://www.npmjs.com/package/react-dropdown-tailwind)

A highly customizable React dropdown component built with Tailwind CSS. Features include single/multiple selection, search functionality, portal rendering, and custom styling options.

## Installation

```bash
npm install react-dropdown-tailwind
# or
yarn add react-dropdown-tailwind
```

Make sure you have the peer dependencies installed:

- React >= 18.0.0
- React DOM >= 18.0.0
- Tailwind CSS >= 3.0.0

## Usage

```jsx
import Dropdown from "react-dropdown-tailwind";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      label="Select an option"
      placeholder="Choose..."
    />
  );
}
```

## Features

- Single and multiple selection modes
- Search functionality
- Portal rendering support
- Custom styling with Tailwind CSS
- Error state handling
- Required field validation
- Disabled state
- Custom option rendering
- Keyboard navigation
- Accessible by default

## Props

| Prop         | Type                                        | Default     | Description                                      |
| ------------ | ------------------------------------------- | ----------- | ------------------------------------------------ |
| value        | string \| string[]                          | ''          | Selected value(s) of the dropdown                |
| options      | Array<{ value: string, label: string }>     | []          | Array of options with value and label properties |
| onChange     | (value: string \| string[]) => void         | -           | Callback function when selection changes         |
| multiple     | boolean                                     | false       | Enable multiple selection mode                   |
| withSearch   | boolean                                     | false       | Enable search functionality                      |
| withOutline  | boolean                                     | true        | Show outline border                              |
| withPortal   | boolean                                     | false       | Render dropdown menu in a portal                 |
| disabled     | boolean                                     | false       | Disable the dropdown                             |
| required     | boolean                                     | false       | Mark the field as required                       |
| error        | string                                      | ''          | Error message to display                         |
| placeholder  | string                                      | 'Select...' | Placeholder text when no option is selected      |
| label        | string                                      | ''          | Label text for the dropdown                      |
| className    | string                                      | ''          | Additional CSS classes                           |
| zIndex       | number                                      | 1000        | Z-index for the dropdown menu when using portal  |
| renderOption | (option, isSelected, onSelect) => ReactNode | -           | Custom render function for dropdown options      |

## Examples

### Multiple Selection

```jsx
<Dropdown
  multiple
  options={options}
  value={["1", "2"]}
  onChange={setSelectedValues}
  placeholder="Select multiple options..."
/>
```

### With Search

```jsx
<Dropdown
  withSearch
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Search and select..."
/>
```

### Custom Styling

```jsx
<Dropdown
  className="min-w-[300px]"
  options={options}
  value={value}
  onChange={setValue}
  label="Custom Styled Dropdown"
/>
```

### Custom Option Rendering

```jsx
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  renderOption={(option, isSelected, onSelect) => (
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
  )}
/>
```

## Development

```bash
# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Build the package
npm run build

# Build Storybook
npm run build-storybook
```

## License

MIT © [Joko Santoso](https://github.com/TheOrphan)
