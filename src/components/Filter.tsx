"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormSelect from "react-bootstrap/FormSelect";
import FilterSpinner from "./FilterSpinner";

type FilterProps = {
  label: string,
  keyName: string,
  collection: Record<string, string>,
  selectedValue?: string,
  now: number,
};

const Filter = ({
  label,
  keyName,
  collection,
  selectedValue = "",
  now,
}: FilterProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [now]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    const url = new URL(window.location.href);
    if (e.target.value.length) {
      url.searchParams.set(keyName, e.target.value);
    } else {
      url.searchParams.delete(keyName);
    }
    url.searchParams.delete("page");
    router.push(url.toString());
  };

  return (
    <FilterSpinner isActive={loading}>
      <FormSelect
        size="sm"
        aria-label={label}
        value={selectedValue}
        onChange={handleChange}
        disabled={loading}
      >
        {Object.entries(collection).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
        <option className="fw-bold" value="">{label}</option>
      </FormSelect>
    </FilterSpinner>
  );
};

export default Filter;
