"use client";

import { Select, Option } from "@material-tailwind/react";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

function FilterHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [gender, setGender] = React.useState("male");
  const [status, setStatus] = React.useState("alive");

  const handleFilter = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="pt-10">
      <div className="container">
        <div className="flex gap-5">
          <div className="max-w-[200px]">
            {/* @ts-ignore */}
            <Select
              label="Status"
              onChange={(e) => handleFilter("status", e)}
              value={status}>
              <Option value="alive">Alive</Option>
              <Option value="dead">Dead</Option>
              <Option value="unknown">Unknown</Option>
            </Select>
          </div>
          <div className="max-w-[200px]">
            {/* @ts-ignore */}
            <Select
              label="Gender"
              onChange={(e) => handleFilter("gender", e)}
              value={gender}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="genderless">Genderless</Option>
              <Option value="unknown">unknown</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterHandler;
