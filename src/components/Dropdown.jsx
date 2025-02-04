import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import "../styles/tailwind.css";

const Dropdown = ({
  options = [],
  value,
  onChange,
  id,
  label = "Label",
  multiple = false,
  withSearch = false,
  withOutline = true,
  withPortal = false,
  placeholder = "Select...",
  className = "",
  zIndex = 1050,
  error,
  disabled = false,
  required = false,
  renderOption,
  renderSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValues, setSelectedValues] = useState(multiple ? [] : null);
  const dropdownRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const inputRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  // Update dropdown position when portal is used
  const updateDropdownPosition = () => {
    if (isOpen && withPortal && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updateDropdownPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, withPortal]);

  // Add window resize listener to update portal position
  useEffect(() => {
    if (withPortal) {
      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition);

      return () => {
        window.removeEventListener("resize", updateDropdownPosition);
        window.removeEventListener("scroll", updateDropdownPosition);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withPortal]);

  const currentSelectedValues = multiple
    ? Array.isArray(selectedValues)
      ? selectedValues
      : []
    : selectedValues
    ? [selectedValues]
    : [];

  const filteredOptions = options
    .filter((option) => {
      const label = option.label.toLowerCase();
      const query = searchQuery.toLowerCase();
      return label.includes(query);
    })
    .map((option) => {
      if (!searchQuery) return option;

      const parts = option.label.split(new RegExp(`(${searchQuery})`, "gi"));
      const highlighted = parts.map((part, i) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <span key={i} className="bg-blue-200">
            {part}
          </span>
        ) : (
          part
        )
      );

      return {
        ...option,
        label: <span>{highlighted}</span>,
      };
    });

  const selectedOptions = options.filter((opt) =>
    currentSelectedValues.includes(opt.value)
  );

  // Modified click outside handler to work with portal
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInDropdown = dropdownRef.current?.contains(event.target);
      const isClickInPortal = dropdownContentRef.current?.contains(
        event.target
      );

      if (!isClickInDropdown && !isClickInPortal) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    const newValue = multiple
      ? currentSelectedValues.includes(optionValue)
        ? currentSelectedValues.filter((v) => v !== optionValue)
        : [...currentSelectedValues, optionValue]
      : optionValue;

    setSelectedValues(newValue);
    onChange?.(newValue);
    if (!multiple) setIsOpen(false);
    setSearchQuery("");
  };

  const handleClear = (e, valueToRemove) => {
    e.stopPropagation();
    const newValue = multiple
      ? valueToRemove
        ? currentSelectedValues.filter((v) => v !== valueToRemove)
        : []
      : null;

    setSelectedValues(newValue);
    onChange?.(newValue);
  };

  const renderDefaultOption = (option, isSelected) => (
    <div
      key={option.value}
      className={`
        px-3 py-1.5 text-sm cursor-pointer flex items-center
        ${
          isSelected
            ? "bg-blue-100 text-blue-800"
            : "text-gray-700 hover:bg-gray-50"
        }
      `}
      onClick={() => handleSelect(option.value)}
    >
      {option.label}
    </div>
  );

  const renderDefaultSelectedOption = (option) => (
    <div
      key={option.value}
      className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm"
    >
      {option.label}
      <X
        className="inline-block ml-1 h-3 w-3 hover:text-blue-600"
        onClick={(e) => handleClear(e, option.value)}
      />
    </div>
  );

  const dropdownContent = (
    <div
      ref={dropdownContentRef}
      className="absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200"
      style={
        withPortal
          ? {
              position: "fixed",
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              zIndex: zIndex || 1050,
            }
          : undefined
      }
    >
      {withSearch && (
        <div className="p-2 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              className={`
                w-full pl-8 pr-4 py-1.5 text-sm rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${withOutline ? "border" : "bg-gray-100"}
              `}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="max-h-60 overflow-auto py-1">
        {filteredOptions.map((option) =>
          renderOption
            ? renderOption(
                option,
                currentSelectedValues.includes(option.value),
                () => handleSelect(option.value)
              )
            : renderDefaultOption(
                option,
                currentSelectedValues.includes(option.value)
              )
        )}
        {filteredOptions.length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500">
            No options found
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      {label && (
        <label
          htmlFor={id}
          className="text-md font-medium text-gray-700 min-w-[100px]"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex-1">
        <div ref={dropdownRef} className="relative">
          <div
            className={`
              px-3 py-2 bg-white border border-gray-200 rounded-lg
              flex items-center justify-between 
              ${withOutline ? "bg-white border border-gray-200" : "bg-gray-100"}
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-gray-300 cursor-pointer"
              }
              ${error ? "border-red-500" : ""}
              ${isOpen ? "ring-2 ring-blue-500 border-transparent" : ""}
              ${className}
            `}
            onClick={() => !disabled && setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2 flex-wrap">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((option) =>
                  renderSelectedOption
                    ? renderSelectedOption(option, () =>
                        handleClear(null, option.value)
                      )
                    : renderDefaultSelectedOption(option)
                )
              ) : (
                <span className="text-gray-400">{placeholder}</span>
              )}
            </div>
            <svg
              className={`h-5 w-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen &&
            (withPortal
              ? createPortal(dropdownContent, document.body)
              : dropdownContent)}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
