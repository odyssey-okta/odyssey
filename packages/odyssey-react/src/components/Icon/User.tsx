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

import { useMemo } from "react";
import type { SVGProps, CSSProperties } from "react";
import { nanoid } from "nanoid";
import styles from "./Icon.module.scss";
interface Props {
  title?: string;
  titleId?: string;
  size?: string;
  color?: string;
}

function SvgUser({
  title = "User",
  titleId,
  size,
  color,
  ...props
}: SVGProps<SVGSVGElement> & Props): JSX.Element {
  if (!titleId) {
    titleId = useMemo(() => "icon_" + nanoid(6), [titleId]);
  }

  const sizeAndColor: CSSProperties = new Object();

  if (size) {
    sizeAndColor.fontSize = size;
  }

  if (color) {
    sizeAndColor.color = color;
  }

  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      style={sizeAndColor}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7 7C8.65685 7 10 5.65685 10 4 10 2.34315 8.65685 1 7 1 5.34315 1 4 2.34315 4 4 4 5.65685 5.34315 7 7 7zM5 8C4 8 3 9 3 10V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V10C11 9 10 8 9 8H5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUser;
