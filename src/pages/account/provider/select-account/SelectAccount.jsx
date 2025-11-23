import React from "react";
import AccountIntro from "../../../../components/others/provider-account/account-intro/AccountIntro";
import AccountSelect from "../../../../components/others/provider-account/account-select/AccountSelect";

const SelectAccount = () => {
  return (
  <div className="create-acc-container">
    <AccountIntro />

    {/* RIGHT SECTION */}
     <AccountSelect />

    </div>
  );
};

export default SelectAccount;
