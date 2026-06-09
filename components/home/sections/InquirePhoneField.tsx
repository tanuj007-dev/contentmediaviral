"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export function InquirePhoneField() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [localPhone, setLocalPhone] = useState("");

  return (
    <div className="inquire-phone-input">
      <PhoneInput
        defaultCountry="in"
        preferredCountries={["in", "us", "gb", "ae", "au", "sg", "ca"]}
        value={phone}
        onChange={(value, { country, inputValue }) => {
          setPhone(value);
          setCountryCode(`+${country.dialCode}`);
          setLocalPhone(inputValue.trim());
        }}
        placeholder="98765 43210"
        inputProps={{ id: "f-phone", required: true, "aria-required": true }}
      />
      <input type="hidden" name="country-code" value={countryCode} />
      <input type="hidden" name="phone" value={localPhone} />
    </div>
  );
}
