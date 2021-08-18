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

function SvgComplete({
  title = "Complete",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM9.50016 3.42651L6.63849 8.8669L4.22481 7.07784C3.89245 6.83149 3.42613 6.89322 3.16837 7.21769C2.90629 7.5476 2.95548 8.02808 3.27889 8.29728L6.32704 10.8344C6.67432 11.1235 7.19733 11.0221 7.41313 10.6239L10.9026 4.18507C11.1185 3.78675 10.963 3.28766 10.5598 3.08475C10.173 2.89009 9.70251 3.04183 9.50016 3.42651Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComplete;
