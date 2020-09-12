import * as React from "react";
export const FullName = (props: any) => {
  return (
    <h2>
      {props.user.firstName} {props.user.lastName}
    </h2>
  );
};
