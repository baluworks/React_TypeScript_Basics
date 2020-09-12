import * as React from "react";
import { FullName } from "./FullName";
export const List: React.FC<any> = (props: any) => {
  return (
    <div>
      {props.list.map((item: any, index: number) => (
        <FullName key={index} user={item} />
      ))}
    </div>
  );
};
