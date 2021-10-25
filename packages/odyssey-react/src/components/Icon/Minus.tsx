/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import { useOmit } from "../../utils";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type MinusIconProps = SvgIconNoChildrenProps;

const MinusIcon = forwardRef<SVGSVGElement, MinusIconProps>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <SvgIcon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 7C1 6.44771 1.44772 6 2 6L12 6C12.5523 6 13 6.44772 13 7V7C13 7.55228 12.5523 8 12 8L2 8C1.44772 8 1 7.55228 1 7V7Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
});

MinusIcon.displayName = "MinusIcon";

export { MinusIcon };
