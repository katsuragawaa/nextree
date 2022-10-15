import { useState, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

type InlineEditProps = {
  value: string;
  setValue: (value: string) => void;
};

export const InlineEdit = ({ value, setValue }: InlineEditProps) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setEditingValue(event.target.value);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      (event.target as HTMLInputElement).blur();
    }
  };

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (event.target.value.trim() === '') {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};
